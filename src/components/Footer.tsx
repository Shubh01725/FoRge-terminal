import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-forge-border bg-forge-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 space-y-6">
            <div className="text-2xl font-display font-bold tracking-tighter">
              FORGE<span className="text-forge-orange">.</span>
            </div>
            <p className="text-white/40 max-w-sm text-sm leading-relaxed">
              Crafting the future of developer workflows. Join thousands of developers building faster with Forge.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-forge-border hover:border-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 border border-forge-border hover:border-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 border border-forge-border hover:border-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/30">Product</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-forge-orange transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-forge-orange transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-forge-orange transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-forge-orange transition-colors">CLI Reference</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/30">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-forge-orange transition-colors">About</a></li>
              <li><a href="#" className="hover:text-forge-orange transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-forge-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-forge-orange transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-forge-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs font-mono text-white/20">
            © 2026 FORGE CLI. ALL RIGHTS RESERVED.
          </div>
          <div className="text-xs font-mono text-white/20">
            MADE WITH PRECISION IN THE TERMINAL.
          </div>
        </div>
      </div>
    </footer>
  );
}
