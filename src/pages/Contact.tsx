import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
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
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Address</label>
                    <Input placeholder="123 Current St" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">New Address</label>
                    <Input placeholder="456 New Ave" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Move Date</label>
                  <Input type="date" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Service Type</label>
                  <select className="w-full px-4 py-2 rounded-md border bg-background">
                    <option>Residential Moving</option>
                    <option>Commercial Moving</option>
                    <option>Office Relocation</option>
                    <option>Staging</option>
                    <option>Furniture Assembly</option>
                    <option>Disposal Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Details</label>
                  <Textarea 
                    placeholder="Tell us about your move (size of home/office, special items, etc.)" 
                    rows={5}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Get Free Quote
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
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
