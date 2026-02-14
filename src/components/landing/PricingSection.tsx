import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Bot Hosting",
    price: "Free",
    unit: "",
    features: ["ECC Memory", "Fast Performance", "Low Latency", "Advanced Security", "Managed Services"],
    popular: true,
  },
  {
    name: "Game Servers",
    price: "Free",
    unit: "",
    features: ["Instant Deployment", "DDoS Protection", "24/7 Support", "Custom Configurations", "Mod Support"],
    popular: false,
  },
  {
    name: "Lavalink",
    price: "Free",
    unit: "",
    features: ["Full Root Access", "SSD Storage", "99.9% Uptime", "Multiple Node Options", "Backup Included"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center"
        >
          <h2 className="font-display text-4xl font-bold">
            Pricing <span className="text-primary">Plans</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-muted-foreground"
        >
          Choose the perfect plan for your needs. All plans include our core features with no hidden fees.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 text-sm text-muted-foreground">
            ₹ INR - Indian Rupee
          </span>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 transition-colors ${
                plan.popular
                  ? "border-primary bg-card shadow-lg shadow-primary/10"
                  : "border-border/50 bg-card/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-2xl font-bold">{plan.name}</h3>
              <div className="mt-2 text-sm text-muted-foreground">Starting at</div>
              <div className="mt-2">
                <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/register" className="mt-8 block">
                <Button
                  className="w-full rounded-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Start Now
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
