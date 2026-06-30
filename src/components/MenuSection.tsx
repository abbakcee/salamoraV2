import React, { useState } from 'react';
import { motion } from 'motion/react';
import { menuItems } from '../data';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Starters', 'Mains', 'Desserts'];
  
  const filteredMenu = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 md:py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-500 uppercase tracking-[0.2em] font-medium text-sm mb-4">
            Culinary Masterpieces
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Our Menu
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                  activeCategory === category
                    ? 'bg-brand-600 text-white'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden group hover:border-brand-900/50 transition-colors"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-brand-600 text-white text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-sm">
                    Popular
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-serif font-bold text-white group-hover:text-brand-400 transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-brand-500 font-medium whitespace-nowrap ml-4">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#reservation"
            className="inline-block px-8 py-4 bg-transparent border border-brand-600 text-brand-500 hover:bg-brand-600 hover:text-white font-medium uppercase tracking-widest transition-all text-sm rounded-sm"
          >
            Download Full Menu
          </a>
        </div>

      </div>
    </section>
  );
}
