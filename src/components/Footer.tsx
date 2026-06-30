import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#home" className="text-2xl font-serif font-bold text-white tracking-wide block mb-6">
              SALAMORA<span className="text-brand-500">.</span>
            </a>
            <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">
              An elevated culinary experience blending authentic African heritage with modern gastronomy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-500 hover:text-brand-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-brand-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-brand-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-zinc-500 font-light text-sm">
                <MapPin size={16} className="mr-3 mt-0.5 text-brand-500 shrink-0" />
                <span>123 Culinary Avenue, Food District, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center text-zinc-500 font-light text-sm">
                <Phone size={16} className="mr-3 text-brand-500 shrink-0" />
                <span>+234 800 123 4567</span>
              </li>
              <li className="flex items-center text-zinc-500 font-light text-sm">
                <Mail size={16} className="mr-3 text-brand-500 shrink-0" />
                <span>reservations@salamora.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center text-zinc-500 font-light text-sm">
                <span>Monday - Thursday</span>
                <span className="text-zinc-400">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between items-center text-zinc-500 font-light text-sm">
                <span>Friday - Saturday</span>
                <span className="text-zinc-400">11:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between items-center text-zinc-500 font-light text-sm">
                <span>Sunday</span>
                <span className="text-zinc-400">12:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-zinc-500 font-light text-sm mb-4">
              Subscribe to receive updates on seasonal menus and exclusive events.
            </p>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button 
                type="submit"
                className="bg-brand-600 hover:bg-brand-500 text-white font-medium uppercase tracking-widest text-xs py-3 rounded-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs font-light">
            &copy; {new Date().getFullYear()} Salamora Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 text-zinc-600 text-xs font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
