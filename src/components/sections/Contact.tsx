import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Info */}
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something{" "}
                <span className="gradient-text">Intelligent</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Ready to transform your business with AI? Tell us about your project 
                and we'll show you what's possible.
              </p>
              
              {/* Contact info */}
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "ak@deepdataxperts.com" },
                  { icon: Phone, label: "+1 (555) 123-4567" },
                  { icon: MapPin, label: "Washington DC, United States" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="glass-card p-8 glow-box">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input 
                      placeholder="Your name" 
                      required 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email" 
                      placeholder="you@company.com" 
                      required 
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Company</label>
                  <Input 
                    placeholder="Your company" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={5}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="glow" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
