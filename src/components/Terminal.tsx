import { motion } from "motion/react";
import { Terminal as TerminalIcon } from "lucide-react";

export default function Terminal() {
  const commands = [
    { cmd: "forge init", output: "✔ Project initialized in .forge/" },
    { cmd: "forge add deploy-aws", output: "✔ Added AWS deployment workflow" },
    { cmd: "forge run", output: "🚀 Forging your workflow...\n📦 Building assets...\n☁️ Deploying to production...\n✨ Success! Live at forge.dev/app" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto font-mono text-sm">
      <div className="bg-forge-gray border border-forge-border rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-forge-border">
          <TerminalIcon size={14} className="text-forge-orange" />
          <span className="text-xs text-white/50">bash — forge</span>
          <div className="flex gap-1.5 ml-auto">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="p-6 space-y-4">
          {commands.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-2">
                <span className="text-forge-orange">$</span>
                <span className="text-white">{item.cmd}</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.5 + 0.3 }}
                viewport={{ once: true }}
                className="mt-1 text-white/50 whitespace-pre-line"
              >
                {item.output}
              </motion.div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: commands.length * 0.5 }}
            viewport={{ once: true }}
            className="flex gap-2"
          >
            <span className="text-forge-orange">$</span>
            <span className="w-2 h-5 bg-forge-orange animate-pulse" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
