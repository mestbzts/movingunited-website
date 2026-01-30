import { Link } from "react-router-dom";
import BackToTopButton from "@/components/BackToTopButton";
import { CheckCircle } from "lucide-react";

const ContactThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-8">
      <div className="max-w-2xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank you for reaching Moving United</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We will get back to you within 24 hours. If your inquiry is urgent, you can always call us directly at{" "}
          <a href="tel:4375058275" className="underline hover:text-primary">(437) 505-8275</a>.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/contact" className="text-primary underline">Back to Contact</Link>
          <span className="text-muted-foreground">|</span>
          <Link to="/" className="text-primary underline">Return Home</Link>
        </div>
      </div>

      <BackToTopButton />
    </div>
  );
};

export default ContactThankYou;
