/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-50">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
