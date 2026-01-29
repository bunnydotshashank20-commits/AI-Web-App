import { motion } from "framer-motion";

const companies = [
  { name: "TechFlow", icon: "◆", color: "text-accent-coral" },
  { name: "Nexus AI", icon: "◈", color: "text-accent-orange" },
  { name: "Prometheus Group", icon: "◇", color: "text-accent-amber" },
  { name: "DCN", icon: "▣", color: "text-accent-pink" },
  { name: "MindBoard", icon: "◎", color: "text-accent-rose" },
  { name: "Prisma Tech", icon: "◐", color: "text-accent-coral" },
  { name: "Axiom", icon: "◉", color: "text-accent-orange" },
  { name: "Synergy", icon: "◆", color: "text-accent-amber" },
];

const TrustedBy = () => {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest"
        >
          Trusted by industry leaders and developers worldwide
        </motion.p>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Double the items for seamless loop */}
          {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
            >
              <span className={`text-2xl ${company.color}`}>{company.icon}</span>
              <span className="text-xl font-heading font-medium tracking-wide">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
