import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="font-display text-4xl font-bold mb-8">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, and Discord username when you sign up for AxyteHost services. We also collect usage data and server logs to improve our services.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>We use collected information to provide and maintain our hosting services, process transactions, send service-related communications, and improve user experience.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">3. Data Security</h2>
            <p>We implement industry-standard security measures including encryption, DDoS protection, and secure data centers located in India to protect your data.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">4. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with service providers who assist in operating our platform, subject to confidentiality agreements.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. Contact us via our Discord server at <a href="https://discord.gg/axyte" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">discord.gg/axyte</a> for any privacy-related requests.</p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-semibold text-foreground">6. Contact Us</h2>
            <p>For questions about this Privacy Policy, join our Discord: <a href="https://discord.gg/axyte" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">discord.gg/axyte</a></p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
