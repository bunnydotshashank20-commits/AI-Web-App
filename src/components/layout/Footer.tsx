import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({ title: "Please enter an email address." });
      return;
    }

    setLoading(true);
    // simulate request
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setEmail("");

    toast({
      title: "Subscribed!",
      description: "You'll receive our newsletter soon.",
    });
  };

  return (
    <footer className="text-white">
      {/* Top content bar */}
      <div className="w-full bg-[#020706]">
        <div className="container px-6 py-8 sm:py-12 flex flex-col items-center text-center">
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-3">
            Ready to Get Started?
          </div>

          <p className="text-white/90 max-w-2xl text-sm sm:text-base">
            Let's explore how AI can create real value for your business. Our
            team is ready to help.
          </p>
        </div>
      </div>

      {/* slim bar */}
      <div className="w-full bg-[#020706] text-sm">
        <div className="container px-6 py-2 flex flex-col sm:flex-row items-center sm:justify-between gap-2">
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start text-white text-xs">
            <a href="#" className="hover:text-foreground">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="hover:text-foreground">
              Facebook
            </a>
            <a href="#" className="hover:text-foreground">
              Twitter (X)
            </a>
            <a href="#" className="hover:text-foreground">
              YouTube
            </a>
          </div>
          <div className="flex items-center gap-4 text-white text-xs mt-2 sm:mt-0">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
              <a href="mailto:admin@deepdataxperts.com">
                admin@deepdataxperts.com
              </a>
            </div>
            <div className="hidden sm:block">(833) 553-2700</div>
          </div>
        </div>
      </div>

      {/* Main teal content area */}
      <div className="w-full bg-[#0f4f47]">
        <div className="container px-6 py-10 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left - big CTA & newsletter */}
            <div className="md:col-span-2 text-white">
              <div className="flex items-start gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold leading-tight">
                  Deep Data — Your source for smart automations.
                </h2>
                <button
                  aria-label="Back to top"
                  title="Back to top"
                  className="ml-auto bg-black/20 rounded p-2 text-sm hidden md:inline-flex"
                >
                  ↑
                </button>
              </div>

              <p className="mt-4 text-gray-300 max-w-xl text-sm sm:text-base">
                Subscribe to our newsletter for Software and AI industry
                insights and company news!
              </p>

              <form onSubmit={handleSubscribe} className="mt-6 max-w-md">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Email address"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/5 border-border/30 text-white w-full sm:flex-1"
                  />
                  <Button
                    type="submit"
                    size="default"
                    className="bg-black/80 w-full sm:w-auto"
                    disabled={loading}
                  >
                    {loading ? "Joining..." : "Join newsletter"}
                  </Button>
                </div>
                <p className="mt-2 text-xs text-gray-300">
                  By submitting, you agree to our{" "}
                  <a className="underline">Terms</a> and{" "}
                  <a className="underline">Privacy Policy</a>.
                </p>
              </form>
            </div>

            {/* Right - links columns */}
            <div className="text-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading font-semibold mb-4">Company</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a className="hover:text-foreground">Privacy Policy</a>
                    </li>
                    <li>
                      <a className="hover:text-foreground">Terms of Service</a>
                    </li>
                    <li>
                      <Link to="/careers">Careers</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="w-full bg-[#030303]">
        <div className="container px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-300 gap-3">
          <div>
            © {new Date().getFullYear()} Deep Data Xperts. All rights reserved.
          </div>
          <div className="flex items-center gap-6 mt-3 md:mt-0">
            <a className="hover:text-foreground">Privacy Policy</a>
            <a className="hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
