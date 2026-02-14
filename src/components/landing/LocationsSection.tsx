import { motion } from "framer-motion";

const locations = [
  {
    country: "India",
    flag: "🇮🇳",
    specs: "AMD Ryzen™ 9 7900X / Intel® Xeon®",
  },
];

const LocationsSection = () => {
  return (
    <section id="locations" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Global Infrastructure
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="font-display text-4xl font-bold">
            Global <span className="text-primary">Locations</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl text-muted-foreground"
        >
          Strategically positioned servers for optimal performance and minimal latency
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{loc.flag}</span>
                <h3 className="font-display text-xl font-bold">{loc.country}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{loc.specs}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
