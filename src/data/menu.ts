import { MenuItem } from '@/types';

export const menuItems: Record<string, MenuItem[]> = {
  '1': [ // Sugarcane Juice
    {
      id: 's1',
      name: 'Fresh Sugarcane Juice',
      price: 20,
      description: 'Freshly extracted sugarcane juice',
      image: 'https://zanducare.com/cdn/shop/articles/sugarcane-5388628_1920.jpg?v=1680348269&width=1200&height=1000',
      category: 'Beverages',
      isVeg: true
    },
    {
      id: 's2',
      name: 'Ginger Sugarcane Juice',
      price: 30,
      description: 'Sugarcane juice with fresh ginger',
      image: 'https://zanducare.com/cdn/shop/articles/sugarcane-5388628_1920.jpg?v=1680348269&width=1200?w=300&h=200&fit=crop',
      category: 'Beverages',
      isVeg: true
    },
    {
      id: 's3',
      name: 'Lemon Sugarcane Juice',
      price: 30,
      description: 'Sugarcane juice with fresh lemon',
      image: 'https://cdn-abndc.nitrocdn.com/KidXqHvkFKIabnNEJOITpLSJJqajraJA/assets/images/optimized/rev-985b6af/lh6.googleusercontent.com/-ERACwcVes8k/UsjQVqlelLI/AAAAAAAAOz8/kpGJQbxkvmc/w553-h506-no/sugar%20can%20juice%201.jpg?w=300&h=200&fit=crop',
      category: 'Beverages',
      isVeg: true
    }
  ],
  '2': [ // Seven Star Saavithiri
    {
      id: 'ss1',
      name: 'Chicken Biriyani',
      price: 120,
      description: 'Aromatic basmati rice with tender chicken pieces',
      image: 'https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-720x1080.jpg.webp?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'ss2',
      name: 'Mutton Biriyani',
      price: 220,
      description: 'Premium mutton pieces with fragrant biriyani rice',
      image: 'https://i0.wp.com/paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230323_230743.jpg?resize=1024%2C576&ssl=1?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'ss3',
      name: 'Veg Biriyani',
      price: 130,
      description: 'Mixed vegetables with aromatic biriyani rice',
      image: 'https://images.archanaskitchen.com/images/recipes/indian/main-course/indian-rice-recipes/biryani-recipes/Chettinad_Vegetable_Biryani_Recipe_734cefe8f8.jpg?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: true
    }
  ],
  '3': [ // Dhanuja Shree
    {
      id: 'd1',
      name: 'Masala Dosa',
      price: 60,
      description: 'Crispy dosa with spiced potato filling',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
      category: 'South Indian',
      isVeg: true
    },
    {
      id: 'd2',
      name: 'Idli Sambhar',
      price: 45,
      description: 'Steamed rice cakes with sambhar - 4 pieces',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
      category: 'South Indian',
      isVeg: true
    },
    {
      id: 'd3',
      name: 'Vada Sambhar',
      price: 50,
      description: 'Crispy lentil donuts with sambhar - 3 pieces',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop',
      category: 'South Indian',
      isVeg: true
    }
  ],
  '4': [ // Annachi
    {
      id: 'a1',
      name: 'Chicken Briyani',
      price: 120,
      description: 'Aromatic basmati rice with tender chicken pieces',
      image: 'https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-720x1080.jpg.webp?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'a2',
      name: 'Mutton Briyani',
      price: 220,
      description: 'Premium mutton pieces with fragrant biriyani rice',
      image: 'https://i0.wp.com/paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230323_230743.jpg?resize=1024%2C576&ssl=1?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'a3',
      name: 'Chicken Rice',
      price: 100,
      description: 'Aromatic rice with tender chicken pieces',
      image: 'https://i.ytimg.com/vi/KyxW9rnKPKQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcHT_9404jkhs3VEoDf7DAFHsbvg',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'a4',
      name: 'Porotta',
      price: 15,
      description: 'Flaky layered bread - 2 pieces',
      image: '/images/parotta-jpg.webp',
      category: 'Breads',
      isVeg: true
    },
    {
      id: 'a5',
      name: 'meals',
      price: 80,
      description: 'Plain white rice',
      image: 'https://5.imimg.com/data5/IM/KH/GLADMIN-21954819/south-indian-full-meals-1000x1000.jpg?s=612x612&w=0&k=20&c=s-Sg_21sK4a_Q_g_1vj8hJ5b_Yh22_L2o-2Pau8u3w4=',
      category: 'Rice',
      isVeg: true
    }
  ],
  '5': [ // Namma kadai
    {
      id: 'n1',
      name: 'Chicken Fried Rice',
      price: 100,
      description: 'Delicious chicken fried rice',
      image: '/images/Square-Image-Chicken-Fried-Rice.jpg',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'n2',
      name: 'Chicken Noodle',
      price: 100,
      description: 'Yummy chicken noodles',
      image: '/images/noodles.jpg',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'n3',
      name: 'Parotta',
      price: 15,
      description: '1 piece of soft and flaky parotta',
      image: '/images/parotta-jpg.webp',
      category: 'Bread',
      isVeg: true
    },
    {
      id: 'n4',
      name: 'Biriyani',
      price: 120,
      description: 'Aromatic and flavorful biriyani',
      image: '/images/chicken briyani.webp',
      category: 'Main Course',
      isVeg: false
    }
  ],
  
  '7': [ // Bhai Kadai
    {
      id: 'b1',
      name: 'Chicken Biriyani',
      price: 180,
      description: 'Aromatic basmati rice with tender chicken pieces',
      image: 'https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-720x1080.jpg.webp?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'b2',
      name: 'Mutton Biriyani',
      price: 220,
      description: 'Premium mutton pieces with fragrant biriyani rice',
      image: 'https://i0.wp.com/paattiskitchen.com/wp-content/uploads/2023/03/kmc_20230323_230743.jpg?resize=1024%2C576&ssl=1?w=300&h=200&fit=crop',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'b3',
      name: 'Chicken 65',
      price: 150,
      description: 'Spicy, deep-fried chicken dish',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj4IToB1rYOK7gZVizwWtX6PAJvi9oXPprDzNYG_h8RrKVvEHhqLFb_mrim2oCB4M2cDKIOxC5KyoM4NZDrQKxoI4nbXmchD1qc8wBCXgJPADhwke1ZCkWu6MLDlj8okEwOurD-PDQaZs/w691-h484/chicken+65+4.JPG',
      category: 'Starters',
      isVeg: false
    }
  ],
  '8': [ // Divya Restaurant
    {
      id: 'dr1',
      name: 'Chicken Rice',
      price: 110,
      description: 'Aromatic rice with tender chicken pieces',
      image: 'https://i.ytimg.com/vi/KyxW9rnKPKQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDcHT_9404jkhs3VEoDf7DAFHsbvg',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'dr2',
      name: 'Egg Rice',
      price: 100,
      description: 'Rice with scrambled egg',
      image: 'https://www.budgetbytes.com/wp-content/uploads/2023/10/Scrambled-Eggs-With-Rice-V2-768x1024.jpeg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'dr3',
      name: 'Veg Rice',
      price: 90,
      description: 'Rice with mixed vegetables',
      image: 'https://slurrp.club/wp-content/uploads/2022/04/DSC_0286-2-2-750x481.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Main Course',
      isVeg: true
    },
    {
      id: 'dr4',
      name: 'Chicken Noodles',
      price: 110,
      description: 'Noodles with chicken pieces',
      image: 'https://static.vecteezy.com/system/resources/previews/022/454/892/non_2x/indian-chicken-noodoles-street-food-in-india-valoore-chennai-tamil-nadu-free-photo.jpg?q=tbn:ANd9GcQ9o-7J6n-8wX3Y-9Z8wX3Y-9Z8wX3Y-9Z8wX3Y-9Z8wX3Y-9Z8&s',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'dr5',
      name: 'Egg Noodles',
      price: 100,
      description: 'Noodles with scrambled egg',
      image: 'https://www.justspices.co.uk/media/recipe/Egg-Fried-Noodles_Just-Spices.webp?q=tbn:ANd9GcQ9o-7J6n-8wX3Y-9Z8wX3Y-9Z8wX3Y-9Z8wX3Y-9Z8wX3Y-9Z8&s',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'dr6',
      name: 'Chicken Chilli',
      price: 110,
      description: 'Spicy chicken dish',
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjj4IToB1rYOK7gZVizwWtX6PAJvi9oXPprDzNYG_h8RrKVvEHhqLFb_mrim2oCB4M2cDKIOxC5KyoM4NZDrQKxoI4nbXmchD1qc8wBCXgJPADhwke1ZCkWu6MLDlj8okEwOurD-PDQaZs/w691-h484/chicken+65+4.JPG?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Starters',
      isVeg: false
    },
    {
      id: 'dr7',
      name: 'Koothu Porata',
      price: 100,
      description: 'Shredded parotta mixed with spices and vegetables/meat',
      image: 'https://thasneen.com/cooking/wp-content/uploads/2015/08/Kothuparotta.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Main Course',
      isVeg: false
    },
    {
      id: 'dr8',
      name: 'Poratta',
      price: 15,
      description: 'Flaky layered bread - 1 piece',
      image: '/images/parotta-jpg.webp',
      category: 'Bread',
      isVeg: true
    },
    {
      id: 'dr9',
      name: 'Sapathi',
      price: 15,
      description: 'Soft Indian flatbread',
      image: 'data:image/jpeg;base64,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',
      category: 'Bread',
      isVeg: true
    },
    {
      id: 'dr10',
      name: 'Omelette',
      price: 20,
      description: 'Fluffy egg omelette',
      image: 'data:image/jpeg;base64,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',
      category: 'Breakfast',
      isVeg: false
    }
  ]
};