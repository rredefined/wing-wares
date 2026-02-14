import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Zap, Shield, Clock, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const featureCards = [
  { icon: Zap, title: "Instant Setup", description: "Get your server running in under 60 seconds" },
  { icon: Shield, title: "DDoS Protection", description: "Enterprise-grade security for your servers" },
  { icon: Clock, title: "99.9% Uptime", description: "Reliable hosting with guaranteed availability" },
  { icon: Headphones, title: "24/7 Support", description: "Expert help whenever you need it" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/8 blur-[120px] animate-glow-pulse" />
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4 pt-16">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center pt-8 lg:pt-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl"
            >
              Host your own{" "}
              <br />
              <span className="text-primary">Minecraft Server</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-lg text-lg text-muted-foreground"
            >
              Experience lightning-fast performance, unbeatable reliability, and 24/7 support for all your favorite games and applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link to="/register">
                <Button size="lg" className="gap-2 rounded-full text-base font-semibold px-8">
                  Get Started <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="#features">
                <Button variant="outline" size="lg" className="gap-2 rounded-full text-base px-8">
                  Learn More <ExternalLink size={16} />
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              ··· Get started for free!
            </motion.p>
          </div>

          {/* Right: Feature cards grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {featureCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/30"
              >
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                  <card.icon size={20} />
                </div>
                <h3 className="font-display text-sm font-bold">{card.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
