import { motion } from "motion/react";
import { Zap, Shield, Cpu, Globe, Code2, Command } from "lucide-react";

const features = [
  {
    icon: <Zap size={24} />,
    title: "Instant Setup",
    description: "Initialize your entire stack with a single command. No more boilerplate hell."
  },
  {
    icon: <Shield size={24} />,
    title: "Secure by Default",
    description: "Automatic secret management and environment hardening for every project."
  },
  {
    icon: <Cpu size={24} />,
    title: "Local First",
    description: "Optimized for speed. Forge runs locally and syncs only when you're ready."
  },
  {
    icon: <Globe size={24} />,
    title: "Edge Ready",
    description: "Deploy to any provider with built-in adapters for Vercel, Netlify, and AWS."
  },
  {
    icon: <Code2 size={24} />,
    title: "Type Safe",
    description: "Full TypeScript support for your configuration files. Catch errors early."
  },
  {
    icon: <Command size={24} />,
    title: "Custom Plugins",
    description: "Extend Forge with your own scripts using our powerful plugin architecture."
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 bg-forge-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter">
            BUILT FOR THE <br />
            <span className="text-forge-orange">MODERN DEVELOPER.</span>
          </h2>
          <p className="text-white/40 max-w-xl font-mono text-sm">
            Forge isn't just a tool; it's a philosophy. We believe your terminal should be as powerful as your IDE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-forge-border border border-forge-border">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-forge-black p-10 group hover:bg-forge-gray transition-colors duration-500"
            >
              <div className="text-forge-orange mb-6 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
