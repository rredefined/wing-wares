import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    category: "Bot Hosting",
    price: 100,
    unit: "coins/mo",
    features: ["1 vCPU Core", "1 GB RAM", "5 GB NVMe SSD", "Unmetered Bandwidth", "DDoS Protection", "24/7 Support"],
    popular: false,
  },
  {
    name: "Performance",
    category: "Game Servers",
    price: 300,
    unit: "coins/mo",
    features: ["2 vCPU Cores", "4 GB RAM", "20 GB NVMe SSD", "Unmetered Bandwidth", "DDoS Protection", "Priority Support", "Auto Backups"],
    popular: true,
  },
  {
    name: "Enterprise",
    category: "Dedicated",
    price: 750,
    unit: "coins/mo",
    features: ["4 vCPU Cores", "8 GB RAM", "50 GB NVMe SSD", "Unmetered Bandwidth", "DDoS Protection", "Dedicated Support", "Auto Backups", "Custom Domain"],
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
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Transparent pricing with no hidden fees. Pay with coins.</p>
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
              <div className="text-sm font-medium text-primary">{plan.category}</div>
              <h3 className="mt-1 font-display text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4">
                <span className="font-display text-4xl font-bold text-primary">{plan.price}</span>
                <span className="ml-2 text-sm text-muted-foreground">{plan.unit}</span>
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
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
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
