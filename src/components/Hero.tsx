import React from 'react';
import { motion } from 'motion/react';
import heroBg from '../assets/images/wings_and_fries_1782847756967.jpg';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Glazed Wings and Fries"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brand-500 uppercase tracking-[0.3em] font-medium text-sm md:text-base mb-6"
        >
          An elevated culinary experience
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-8"
        >
          Taste the <br />
          <span className="italic font-light text-zinc-300">tradition</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl text-zinc-400 text-lg md:text-xl font-light mb-10"
        >
          Discover a symphony of authentic African flavors reimagined with modern sophistication in the heart of the city.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#menu"
            className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium uppercase tracking-widest transition-colors text-sm rounded-sm text-center"
          >
            Explore Menu
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium uppercase tracking-widest transition-all text-sm rounded-sm text-center"
          >
            Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
