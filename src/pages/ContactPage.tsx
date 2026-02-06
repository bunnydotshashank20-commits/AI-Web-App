import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ak@deepdataxperts.com" },
    { icon: Phone, label: "Phone", value: "+1 833-553-2700" },
    { icon: MapPin, label: "Location", value: "Sterling, VA, United States" },
    { icon: Clock, label: "Hours", value: "Mon-Fri 9AM-6PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-black">
          <div className="container px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-[#0f4f47]/30 border border-[#1F514C] rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#1F514C]"></div>
                <span className="text-sm text-[#eefffd] font-medium">
                  Contact Us
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                Ready to transform your business with AI? Let's start a
                conversation about how we can help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Left - Info */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                    Let's Build Something Intelligent
                  </h2>
                  <p className="text-muted-foreground mb-10 leading-relaxed">
                    Whether you have a specific project in mind or just want to
                    explore possibilities, we're here to help. Our team responds
                    within 24 hours.
                  </p>

                  <div className="space-y-6">
                    {contactInfo.map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {label}
                          </p>
                          <p className="font-medium">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Right - Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="glass-card p-8"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Name
                        </label>
                        <Input
                          placeholder="Your name"
                          required
                          className="bg-background border-border focus:border-foreground"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          required
                          className="bg-background border-border focus:border-foreground"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Company
                      </label>
                      <Input
                        placeholder="Your company"
                        className="bg-background border-border focus:border-foreground"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        className="bg-background border-border focus:border-foreground resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
