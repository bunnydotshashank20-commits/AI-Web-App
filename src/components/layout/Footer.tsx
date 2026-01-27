import { Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border bg-secondary/30">
      <div className="container px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="font-heading text-lg font-bold inline-block mb-4">
              Deep<span className="gradient-text">Data</span>Xperts
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              We build intelligent AI solutions that unlock the power of your data, 
              automate complex workflows, and drive measurable results.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Deep Data Xperts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
