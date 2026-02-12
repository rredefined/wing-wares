import { motion } from "framer-motion";
import { MapPin, Server, Cpu, HardDrive } from "lucide-react";

const locations = [
  { city: "New York", country: "USA", flag: "🇺🇸", latency: "12ms" },
  { city: "Frankfurt", country: "Germany", flag: "🇩🇪", latency: "18ms" },
  { city: "Singapore", country: "Singapore", flag: "🇸🇬", latency: "25ms" },
  { city: "London", country: "UK", flag: "🇬🇧", latency: "15ms" },
  { city: "Sydney", country: "Australia", flag: "🇦🇺", latency: "30ms" },
  { city: "Mumbai", country: "India", flag: "🇮🇳", latency: "22ms" },
];

const specs = [
  { icon: Cpu, label: "AMD EPYC 7003", detail: "Latest-gen processors" },
  { icon: HardDrive, label: "NVMe SSD", detail: "Ultra-fast storage" },
  { icon: Server, label: "10Gbps Network", detail: "Premium bandwidth" },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold">
            Global <span className="text-primary">Locations</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Deploy closer to your players for the lowest latency.</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-4 transition-colors hover:border-primary/30"
            >
              <span className="text-3xl">{loc.flag}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-primary" />
                  <span className="font-display font-semibold">{loc.city}</span>
                </div>
                <span className="text-sm text-muted-foreground">{loc.country}</span>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {loc.latency}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Specs */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-center gap-4 rounded-xl border border-border/50 bg-card/50 p-5"
            >
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <spec.icon size={22} />
              </div>
              <div>
                <div className="font-display font-semibold">{spec.label}</div>
                <div className="text-sm text-muted-foreground">{spec.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
