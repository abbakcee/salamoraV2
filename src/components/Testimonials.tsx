import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { reviews } from '../data';

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-950/10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-500 uppercase tracking-[0.2em] font-medium text-sm mb-4">
            Guest Experiences
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Words of Praise
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 p-8 rounded-sm border border-zinc-800/50 hover:border-brand-900 transition-colors"
            >
              <div className="flex gap-1 mb-6 text-brand-500">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "currentColor" : "none"} 
                    className={i < review.rating ? "text-brand-500" : "text-zinc-700"}
                  />
                ))}
              </div>
              <p className="text-zinc-300 font-light italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <p className="text-white font-medium uppercase tracking-wider text-sm">
                — {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
