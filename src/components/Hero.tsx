import { motion } from "motion/react";
import Terminal from "./Terminal";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-forge-border">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-forge-orange/10 text-forge-orange text-xs font-mono tracking-widest uppercase border border-forge-orange/20 rounded-full mb-6">
                v1.0.0 is now live
              </span>
              <h1 className="text-8xl md:text-9xl font-display font-extrabold tracking-tighter leading-[0.8] mb-6">
                FORGE<span className="text-forge-orange">.</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/60 font-light tracking-tight max-w-md">
                Your terminal, <span className="text-white font-medium">supercharged.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-white text-forge-black font-bold hover:bg-forge-orange hover:text-white transition-colors duration-300 zine-border">
                GET STARTED
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white transition-colors duration-300 font-mono text-sm">
                npm install -g forge-cli
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-8 pt-8 border-t border-forge-border"
            >
              <div className="text-xs font-mono uppercase tracking-widest">Trusted by teams at</div>
              <div className="flex gap-6 grayscale opacity-50">
                <span className="font-bold tracking-tighter">VERCEL</span>
                <span className="font-bold tracking-tighter">STRIPE</span>
                <span className="font-bold tracking-tighter">GITHUB</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
