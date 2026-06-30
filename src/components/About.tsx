import React from 'react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef preparing a meal" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-brand-900/50 -z-0 hidden md:block" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-brand-950 -z-0 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-brand-500 uppercase tracking-[0.2em] font-medium text-sm mb-4">
              Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              A celebration of <br />heritage & flavor.
            </h3>
            <div className="space-y-6 text-zinc-400 font-light text-lg">
              <p>
                At Salamora, we believe that food is more than sustenance—it is a language, a history, and a gathering place. Founded with a passion to bring the rich, vibrant flavors of the African continent to a modern setting, every dish tells a story.
              </p>
              <p>
                From the smoky depths of our signature Jollof to the fiery perfection of our grill, we source the finest local ingredients and authentic spices. Our chefs blend traditional recipes passed down through generations with contemporary culinary techniques.
              </p>
              <p>
                Welcome to our table. We invite you to taste the warmth, the culture, and the unforgettable spirit of Salamora.
              </p>
            </div>
            
            <div className="mt-10">
              <img 
                src="https://images.unsplash.com/photo-1583332371151-5b7f14b621e2?q=80&w=300&auto=format&fit=crop" 
                alt="Signature" 
                className="h-12 opacity-50 grayscale contrast-200 brightness-200"
              />
              <p className="mt-2 text-sm text-zinc-500 uppercase tracking-widest">Executive Chef</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
