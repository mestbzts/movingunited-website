import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import BackToTopButton from "@/components/BackToTopButton";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    // Build payload for Formspree
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      currentAddress: formData.get("currentAddress"),
      newAddress: formData.get("newAddress"),
      moveDate: formData.get("moveDate"),
      serviceType: formData.get("serviceType"),
      additionalDetails: formData.get("additionalDetails"),
      _subject: "New Moving Quote from Website",
    };

    try {
      const res = await fetch("https://formspree.io/f/xdkpager", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // attempt to parse JSON; if parsing fails, data will be null
      let data: any = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }

      // Consider success if HTTP status is OK (2xx) OR server JSON indicates ok/success
      const success =
        res.ok ||
        (data && (data.ok === true || data.success === true || data.status === "success"));

      if (success) {
        toast({
          title: "Request sent ✅",
          description: "Thank you! We received your quote request and will reply soon.",
        });
        e.currentTarget.reset();
      } else {
        // Build a helpful error message from server response if available
        const serverMessage =
          data?.errors?.[0]?.message || data?.error || data?.message || (data && JSON.stringify(data));
        toast({
          title: "Error",
          description: serverMessage || `There was an error submitting the form (status ${res.status}).`,
          variant: "destructive",
        });
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      toast({
        title: "Network error",
        description: message || "Could not send your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["437-505-8275"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@movingunited.ca"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8am - 8pm", "Sat: 8am - 7pm"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get a free quote or reach out with any questions. We're here to help make your move seamless.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-6">Get Your Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input name="firstName" placeholder="EX:John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input name="lastName" placeholder="EX:Stone" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input name="phone" type="tel" placeholder="(xxx) xxx-xxxx" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Address</label>
                    <Input name="currentAddress" placeholder="123 church St" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">New Address</label>
                    <Input name="newAddress" placeholder="456 lawrence Ave" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Move Date</label>
                  <Input name="moveDate" type="date" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <select name="serviceType" className="w-full px-4 py-2 rounded-md border bg-background" required>
                    <option value="">Select a service</option>
                    <option value="Residential Moving">Residential Moving</option>
                    <option value="Commercial Moving">Commercial Moving</option>
                    <option value="Office Relocation">Office Relocation</option>
                    <option value="Staging">Staging</option>
                    <option value="Furniture Assembly">Furniture Assembly</option>
                    <option value="Disposal Services">Disposal Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Details</label>
                  <Textarea
                    name="additionalDetails"
                    placeholder="Tell us about your move (size of home/office, list of items, elevator availability, etc.)"
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Preparing Quote..." : "Get Free Quote"}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6">
                <info.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                {info.title === "Phone" ? (
                  info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      <a
                        href={`tel:${detail.replace(/\D/g, "")}`}
                        className="underline hover:text-primary"
                        aria-label={`Call ${detail}`}
                      >
                        {detail}
                      </a>
                    </p>
                  ))
                ) : info.title === "Email" ? (
                  info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      <a
                        href={`mailto:${detail}`}
                        className="underline hover:text-primary"
                        aria-label={`Email ${detail}`}
                      >
                        {detail}
                      </a>
                    </p>
                  ))
                ) : (
                  info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>
      <BackToTopButton />
    </div>
  );
};

export default Contact;
