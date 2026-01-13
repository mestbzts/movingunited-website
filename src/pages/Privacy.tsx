import { useEffect } from "react";
import { Link } from "react-router-dom";
import BackToTopButton from "@/components/BackToTopButton";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <div className="mt-4">
            <Link to="/" className="text-primary underline">Home</Link>
            <span className="mx-2">/</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-3xl prose prose-lg">
        <p>
          Moving United ("we", "us", or "our") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information
          when you visit our website or contact us for services.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect information you provide directly to us (for example, when requesting quotes or contacting us),
          such as your name, email address, phone number, and move details. We may also collect usage information
          automatically through cookies and similar technologies.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information to respond to inquiries, provide services, process quotes, improve our website,
          and communicate updates or promotional offers when you opt in.
        </p>

        <h2>Sharing & Disclosure</h2>
        <p>
          We do not sell your personal information. We may share information with service providers who help us
          operate our business (e.g., email providers) and when required by law.
        </p>

        <h2>Cookies & Tracking</h2>
        <p>
          Our site may use cookies to enhance user experience. You can manage cookie preferences in your browser settings.
        </p>

        <h2>Your Choices</h2>
        <p>
          You can opt out of promotional communications by following the unsubscribe instructions in emails or contacting us directly.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this policy, contact us at{" "}
          <a href="mailto:info@movingunited.ca" className="underline hover:text-primary">info@movingunited.ca</a> or call{" "}
          <a href="tel:4375058275" className="underline hover:text-primary">(437) 505-8275</a>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the updated date at the top of this page.
        </p>

        <div className="mt-8">
          <Link to="/contact" className="text-primary underline">Contact Us</Link>
        </div>
      </article>

      <BackToTopButton />
    </div>
  );
};

export default Privacy;
