import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "How quickly can I deploy a server?", a: "Most servers are deployed within 60 seconds of purchase. Our automated system handles everything from provisioning to configuration." },
  { q: "What payment methods do you accept?", a: "We use a coin-based system. You can top up your coin balance through various payment gateways including credit cards and cryptocurrency." },
  { q: "Do you offer DDoS protection?", a: "Yes! All our servers come with enterprise-grade DDoS protection at no extra cost. We use advanced traffic filtering to keep your services safe." },
  { q: "Can I upgrade my plan later?", a: "Absolutely. You can upgrade or change your plan at any time from your dashboard. Resources are scaled instantly with no downtime." },
  { q: "What games do you support?", a: "We support a wide range of games including Minecraft, Rust, ARK, Valheim, CS2, and many more. We also support custom game servers and Discord bots." },
  { q: "Is there a money-back guarantee?", a: "We offer a 48-hour money-back guarantee on all new purchases. If you're not satisfied, contact our support team for a full refund." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl font-bold">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Got questions? We've got answers.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border/50 bg-card/50 px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
