/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-forge-orange selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-forge-black/80 backdrop-blur-md border-b border-forge-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-display font-bold tracking-tighter">
            FORGE<span className="text-forge-orange">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-white/50">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
          </div>
          <button className="px-5 py-2 bg-white text-forge-black text-xs font-bold hover:bg-forge-orange hover:text-white transition-colors duration-300">
            SIGN UP
          </button>
        </div>
      </nav>

      <main>
        <Hero />
        
        {/* Quote Section */}
        <section className="py-24 px-6 border-b border-forge-border">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl font-light italic leading-tight text-white/80"
            >
              "Forge has completely transformed how our team handles deployments. It's the missing piece of the developer experience puzzle."
            </motion.p>
            <div className="mt-8 text-sm font-mono uppercase tracking-widest text-forge-orange">
              — Sarah Chen, Lead Architect at Vercel
            </div>
          </div>
        </section>

        <Features />

        {/* CTA Section */}
        <section className="py-32 px-6 bg-forge-orange text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
              READY TO <br />SUPERCHARGE?
            </h2>
            <p className="text-xl mb-12 font-light opacity-90 max-w-xl mx-auto">
              Join 50,000+ developers who are already building faster with Forge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-5 bg-forge-black text-white font-bold hover:bg-white hover:text-forge-black transition-colors duration-300 zine-border">
                GET STARTED FOR FREE
              </button>
              <button className="px-10 py-5 bg-transparent border-2 border-forge-black text-forge-black font-bold hover:bg-forge-black hover:text-white transition-colors duration-300">
                TALK TO SALES
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
