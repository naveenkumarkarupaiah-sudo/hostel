import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus, Minus, MessageCircle } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import OrderDetailsForm from './OrderDetailsForm';

const CartSheet = () => {
  const { items, selectedShop, updateQuantity, getTotalPrice, clearCart } = useCartStore();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = getTotalPrice();

  const handleWhatsAppOrder = () => {
    if (!selectedShop || items.length === 0) return;
    setIsFormOpen(true);
  };

  const handleConfirmOrder = (details: { name: string; place: string; phone: string }) => {
    const { name, place, phone } = details;

    // Create structured message
    const orderItems = items.map(item => 
      `${item.item.name} (x${item.quantity}) - ₹${item.item.price * item.quantity}`
    ).join("\n"); // Use \n for new lines in WhatsApp message

    const message = `Order Details:\nName: ${name}\nPlace: ${place}\nPhone: ${phone}\nOrder:\n${orderItems}\nTotal: ₹${totalPrice}\nShop: ${selectedShop?.name}`;

    // WhatsApp URL with shop's specific number
    const whatsappNumber = selectedShop?.whatsappNumber;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    console.log("WhatsApp URL:", whatsappUrl); // Add this line
    window.open(whatsappUrl, '_blank');
    clearCart();
  };

  if (totalItems === 0) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center h-64">
            <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="w-5 h-5" />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {totalItems}
            </Badge>
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
            {selectedShop && (
              <p className="text-sm text-muted-foreground">From {selectedShop.name}</p>
            )}
          </SheetHeader>
          
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-auto py-4">
              {items.map((cartItem) => (
                <div key={cartItem.item.id} className="flex items-center justify-between py-3 border-b">
                  <div className="flex-1">
                    <h4 className="font-medium">{cartItem.item.name}</h4>
                    <p className="text-sm text-muted-foreground">₹{cartItem.item.price} each</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="font-semibold w-8 text-center">{cartItem.quantity}</span>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span>₹{totalPrice}</span>
              </div>
              
              <Button 
                variant="default" 
                className="w-full mt-4" 
                size="lg"
                onClick={handleWhatsAppOrder}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Order via WhatsApp
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <OrderDetailsForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        onConfirm={handleConfirmOrder} 
      />
    </>
  );
};

export default CartSheet;