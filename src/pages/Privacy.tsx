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
         Effective Date: 2024-10-12 <br />
         Last Updated: 2026-01-12 <br />
         Moving United (“we,” “our,” or “us”) is committed to protecting the privacy and confidentiality of personal information. This Privacy Policy explains how we collect, use, disclose, store, and safeguard personal information in accordance with Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Ontario laws.
         By accessing our website or using our services, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
        </p>
<br />
        <h2>Personal Information We Collect</h2>
        <p>
        We may collect personal information including, but not limited to:
        Full name
        Phone number
        Email address
        Pickup and delivery addresses
        Service details related to moving, furniture assembly, and furniture removal
        Billing and payment information
        Communications and correspondence with us
        We may also collect non-personal information such as IP address, browser type, device information, and website usage data through cookies and analytics tools.
        </p>

        <h2>Purpose of Collection</h2>
        <p>
        Personal information is collected and used for the following purposes:
        Providing and managing our services
        Preparing quotes and scheduling services
        Communicating service-related information
        Processing payments and invoices
        Improving operational efficiency and customer experience
        Meeting legal, regulatory, and contractual obligations
        Personal information will not be used for purposes beyond those identified without obtaining additional consent, unless permitted or required by law.
        </p>

        <h2>Consent Under PIPEDA</h2>
        <p>
        In accordance with PIPEDA, consent may be express or implied depending on the circumstances. By providing personal information to Moving United, you consent to its collection, use, and disclosure for the purposes identified in this Privacy Policy. You may withdraw consent at any time, subject to legal or contractual restrictions, by contacting us.
        </p>

        <h2>Disclosure of Personal Information</h2>
        <p>
        Moving United does not sell, rent, or trade personal information.
        Personal information may be disclosed only to:
        Employees or contractors who require the information to perform services
        Third-party service providers such as payment processors
        Legal or regulatory authorities when required by law
        All third parties are contractually required to protect personal information in a manner consistent with PIPEDA.
        </p>

        <h2>Safeguards</h2>
        <p>
        We use reasonable administrative, technical, and physical safeguards to protect personal information against unauthorized access, loss, misuse, or disclosure, as required under PIPEDA.
        </p>
        
        <h2>Retention of Information</h2>
        <p>
        Personal information is retained only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal or regulatory requirements. When no longer required, information is securely destroyed or anonymized.
        </p>
        
        <h2>Access and Accuracy</h2>
        <p>
        Under PIPEDA, individuals have the right to access their personal information and request corrections if it is inaccurate or incomplete. Requests must be made in writing using the contact information below.
        </p>

        <h2>Cookies and Website Analyticss</h2>
        <p>
        Our website may use cookies to enhance functionality and analyze website usage. You may disable cookies through your browser settings, though this may affect website performance.        
        </p>

        <h2>Third-Party Websites</h2>
        <p>
        Our website may contain links to third-party websites. Moving United is not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party websites you visit.
        </p>

        <h2>Children’s Privacy</h2>
        <p>
        Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
        This Privacy Policy may be updated from time to time. Any changes will be posted on this page with a revised effective date.
        </p>

        <h2>Contact Us</h2>
        <p>
        For privacy inquiries, access requests, or complaints under PIPEDA, please contact:{" "}
        <a href="mailto:info@movingunited.ca" className="underline hover:text-primary">info@movingunited.ca</a> or call{" "}
        <a href="tel:4375058275" className="underline hover:text-primary">(437) 505-8275</a>.
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
