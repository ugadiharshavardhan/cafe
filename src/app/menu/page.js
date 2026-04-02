'use client';

import React from 'react';

const menuData = [
  {
    category: 'Hot Coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Cappuccino', price: '209', img: '/menu/cappuccino.png' },
      { name: 'Americano', price: '190', img: '/menu/americano.png' },
      { name: 'Flat White', price: '250', img: '/menu/flat-white.png' },
      { name: 'Cafe Latte', price: '230', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=60' },
      { name: 'Cafe Mocha', price: '250', img: 'https://images.unsplash.com/photo-1607681034540-2c46cc71896d?auto=format&fit=crop&w=800&q=60' },
      { name: 'Espresso', price: '170', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=60' },
      { name: 'Biscoff Coffee', price: '260', img: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Rose Cappuccino', price: '250', img: 'https://images.unsplash.com/photo-1572286258217-027f3115438c?auto=format&fit=crop&w=800&q=60' },
      { name: 'Hazelnut Cappuccino', price: '230', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Caramel Cappuccino', price: '230', img: 'https://images.unsplash.com/photo-1544145945-f904253d0c73?auto=format&fit=crop&w=800&q=60' },
      { name: 'Irish Cappuccino', price: '240', img: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=800&q=60' },
      { name: 'Vanilla Cappuccino', price: '230', img: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=800&q=60' },
    ]
  },
  {
    category: 'Iced Coffee',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Nitro Cold Brew', price: '320', img: '/menu/nitro-cold-brew.png' },
      // { name: 'Cold Coffee Blend', price: '300', img: 'https://images.unsplash.com/photo-1503481766315-77d8a4375ad0?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Vanilla Iced Latte', price: '280', img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=60' },
      { name: 'Irish Latte', price: '290', img: 'https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&w=800&q=60' },
      { name: 'Hazelnut Iced Latte', price: '290', img: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=800&q=60' },
      { name: 'Vanilla Iced Latte (Premium)', price: '270', img: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=60' },
      { name: 'OG Filter Coffee', price: '290', img: 'https://images.unsplash.com/photo-1543255006-d6395b6f1171?auto=format&fit=crop&w=800&q=60' },
      { name: 'Honey Cinnamon Latte', price: '270', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=60' },
      { name: 'Spanish Latte', price: '260', img: '/menu/spanish-latte.png' },
      // { name: 'Affogato', price: '260', img: 'https://images.unsplash.com/photo-1507512736643-3d3cc5a23f40?auto=format&fit=crop&w=800&q=60' },
      { name: 'Iced Latte', price: '230', img: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Caramel Ocean Espresso', price: '320', img: 'https://images.unsplash.com/photo-1512568400610-64da2dca88c5?auto=format&fit=crop&w=800&q=60' },
      { name: 'Cranberry Espresso', price: '270', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=60' },
      { name: 'Orange Espresso', price: '270', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=60' },
    ]
  },
  {
    category: 'Cold Brews',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Cranberry Cold Brew', price: '270', img: '/menu/cranberry-cold-brew.png' },
      { name: 'Cinnamon Honey', price: '270', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=60' },
      { name: 'Valencia Orange', price: '280', img: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&w=800&q=60' },
      { name: 'Cola Cold Brew', price: '230', img: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&w=800&q=60' },
      { name: 'Lemon & Honey', price: '270', img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=60' },
      { name: 'Apple Whiskey', price: '290', img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Mazagran', price: '270', img: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Orange Whiskey', price: '290', img: 'https://images.unsplash.com/photo-1582239665538-ef42eaaaf700?auto=format&fit=crop&w=800&q=60' },
      { name: 'Simple Cold Brew', price: '199', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=60' },
    ]
  },
  {
    category: 'Matcha Rituals',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Matcha Hot Coffee', price: '250', img: '/menu/matcha-latte.png' },
      // { name: 'Vietnamese Matcha Latte', price: '320', img: 'https://images.unsplash.com/photo-1536441544485-8f6df71110b6?auto=format&fit=crop&w=800&q=60' },
      { name: 'Vanilla Matcha Latte', price: '290', img: 'https://images.unsplash.com/photo-1576092762791-dd9e2220abd1?auto=format&fit=crop&w=800&q=60' },
      { name: 'Avocado Matcha', price: '330', img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Coconut Matcha', price: '280', img: 'https://images.unsplash.com/photo-1507133750040-4a8f5707833f?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Strawberry Matcha Latte', price: '280', img: 'https://images.unsplash.com/photo-1464191056476-a15e0031980a?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Mango Matcha Latte', price: '280', img: 'https://images.unsplash.com/photo-1525423235917-20bb669ec347?auto=format&fit=crop&w=800&q=60' },
    ]
  },
  {
    category: 'Bites & Breakfast',
    image: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Granola Fruit Bowl', price: '220', img: '/menu/granola-bowl.png' },
      { name: 'Masala Oats', price: '180', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60' },
      { name: 'English Breakfast', price: '250', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=60' },
      { name: 'Kimchi Korean Maggi', price: '220', img: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=60' },
      { name: 'Korean Spicy Maggi', price: '220', img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Standard Maggi', price: '190', img: 'https://images.unsplash.com/photo-1516100882582-76c9a444dd5d?auto=format&fit=crop&w=800&q=60' },
      { name: 'Egg Maggi', price: '210', img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Bread Omelette', price: '160', img: 'https://images.unsplash.com/photo-1544787210-2211d247156a?auto=format&fit=crop&w=800&q=60' },
      { name: 'French Toast', price: '200', img: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Bun Maska', price: '200', img: 'https://images.unsplash.com/photo-1502462041144-01-e836881bc3c?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Sweet Crepes', price: '250', img: 'https://images.unsplash.com/photo-1499961032204-616323c18092?auto=format&fit=crop&w=800&q=60' },
    ]
  },
  {
    category: 'Burgers & Sliders',
    image: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Crispy Chicken Burger', price: '350', img: '/menu/chicken-burger.png' },
      { name: 'Veg. Burger', price: '250', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=60' },
      { name: 'Ved Tikki Sliders', price: '250', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=60' },
      { name: 'Corn Jalapeno Burger', price: '279', img: 'https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Butter Chicken Burger', price: '350', img: 'https://images.unsplash.com/photo-1464305795204-6f5bdee7f81a?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Non-veg. Sliders', price: '280', img: 'https://images.unsplash.com/photo-1558961309-db0117dce9a4?auto=format&fit=crop&w=800&q=60' },
      { name: 'Fried Chicken Burger', price: '299', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=60' },
      { name: 'Chicken Smash Burger', price: '299', img: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?auto=format&fit=crop&w=800&q=60' },
      // { name: 'BBQ Pulled Chicken', price: '299', img: 'https://images.unsplash.com/photo-1594631252845-29fc458695d3?auto=format&fit=crop&w=800&q=60' },
    ]
  },
  {
    category: 'Thin Crust Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Garden Fresh', price: '379', img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=800&q=60' },
      { name: 'Margherita', price: '349', img: '/menu/margherita.png' },
      // { name: 'Paneer Tikka Pizza', price: '399', img: 'https://images.unsplash.com/photo-1528642463366-83218987ec8f?auto=format&fit=crop&w=800&q=60' },
      { name: 'Peri Peri Chicken', price: '399', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=60' },
      { name: 'Butter Chicken Pizza', price: '399', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=60' },
    ]
  },
  {
    category: 'Pasta Artisanal',
    image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Red Sauce (Veg/Non-Veg)', price: '350/400', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=60' },
      // { name: 'White Sauce (Veg/Non-Veg)', price: '350/400', img: 'https://images.unsplash.com/photo-1558961309-db0117dce9a4?auto=format&fit=crop&w=800&q=60' },
      { name: 'Pink Sauce (Veg/Non-Veg)', price: '350/400', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=60' },
    ]
  },
  {
    category: 'Green & Iced Teas',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Chamomile Tea', price: '210', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80' },
      { name: 'Blue Pea Tea', price: '210', img: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&w=800&q=80' },
      { name: 'Rosalang Tea', price: '210', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Lavender Tea', price: '210', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80' },
      { name: 'Kashmiri Khawa', price: '210', img: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=800&q=80' },
      { name: 'Peach Iced Tea', price: '210', img: 'https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=800&q=80' },
      { name: 'Orange Bluepea', price: '220', img: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=800&q=80' },
    ]
  },
  {
    category: 'Sweet Endings',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1200&q=80',
    items: [
      { name: 'Banana Bread', price: '140', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=60' },
      // { name: 'Hot Chocolate Brownie', price: '299', img: 'https://images.unsplash.com/photo-1620360289413-ed4469f3f717?auto=format&fit=crop&w=800&q=60' },
      { name: 'Croissant Fruitjam', price: '200', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=60' },
      { name: 'Tres Leches', price: '299', img: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&w=800&q=60' },
      { name: 'Chocochip Cookie', price: '100', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=60' },
      { name: 'Creamy Panacotta', price: '299', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=60' },
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="bg-matte-black min-h-screen pt-32 pb-24 text-latte">

      <header className="px-8 md:px-24 mb-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
        <div className="space-y-4">
          <h1 className="text-7xl md:text-[10rem] font-serif leading-none tracking-tight">
            The <br /> Menu
          </h1>
          <p className="text-caramel uppercase tracking-[0.5em] text-sm animate-pulse">
            Experience the Cinematic Essence
          </p>
        </div>
        
        <div className="w-full md:w-1/2 aspect-[16/9] rounded-[40px] overflow-hidden relative group border border-latte/10">
          <img 
            src="/menu_hero.png" 
            alt="Cinematic Bistro Experience" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl border border-latte/10">
            <p className="text-xs text-latte/60 tracking-widest uppercase mb-1">Our Philosophy</p>
            <p className="text-sm italic font-serif leading-relaxed text-latte">
              "Crafting every cup and plate like a scene from a classic film."
            </p>
          </div>
        </div>
      </header>

      <div className="space-y-40">
        {menuData.map((category, catIdx) => (
          <div key={catIdx} className="space-y-12 group">
            {/* Category Header with Image */}
            <div className="px-8 md:px-24">
              <div className="relative h-[300px] md:h-[400px] rounded-[40px] overflow-hidden mb-12 shadow-2xl border border-latte/10">
                <img 
                  src={category.image} 
                  alt={category.category} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-matte-black/80 via-matte-black/40 to-transparent" />
                <div className="absolute inset-0 p-12 flex flex-col justify-center">
                  <p className="text-gold/80 text-xs tracking-[0.6em] uppercase mb-4">Collection 0{catIdx + 1}</p>
                  <h2 className="text-5xl md:text-8xl font-serif text-latte group-hover:text-caramel transition-colors duration-500 max-w-2xl leading-tight">
                    {category.category}
                  </h2>
                  <div className="w-12 h-1 bg-caramel mt-6 rounded-full group-hover:w-32 transition-all duration-700" />
                </div>
              </div>
            </div>

            <div 
              className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-8 md:px-24 gap-8 pb-10"
            >
              {category.items.map((item, id) => (
                <div 
                  key={id}
                  className="flex-shrink-0 w-[260px] md:w-[350px] snap-start"
                >
                  <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass border border-latte/5 group/card shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {/* Unique Image for EVERY item */}
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matte-black/40 to-matte-black" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <p className="text-gold font-serif text-xl md:text-2xl mb-2">₹ {item.price}</p>
                      <h3 className="text-2xl md:text-3xl font-serif text-latte leading-tight mb-4 group-hover/card:text-caramel transition-colors">
                        {item.name}
                      </h3>
                      <div className="w-8 h-[2px] bg-caramel group-hover/card:w-full transition-all duration-700 origin-left" />
                    </div>
                  </div>
                </div>
              ))}
              {/* Spacer for horizontal scroll comfort */}
              <div className="flex-shrink-0 w-8 md:w-24" />
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-40 px-8 md:px-24 text-center border-t border-latte/5 pt-20 bg-gradient-to-b from-transparent to-matte-black/50">
        <div className="max-w-md mx-auto space-y-4">
          <p className="text-caramel tracking-[0.3em] text-xs uppercase">Since 2024</p>
          <p className="text-latte/40 text-sm italic font-serif">
            "Every cup tells a story, every bite is a cinematic frame."
          </p>
          <div className="pt-8">
             <div className="inline-block px-12 py-4 border border-latte/10 rounded-full text-xs tracking-widest text-latte/60">
                HYDERABAD • CA PHE BISTRO
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
