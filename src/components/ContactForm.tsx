
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Contact Us</h2>
            <p className="text-xl text-muted-foreground">
              Have questions or ready to start your digital transformation journey? 
              Get in touch with our team of experts.
            </p>
          </div>

          <div className="mb-8 text-center">
            <p className="text-lg">
              Send us an Email at{" "}
              <a
                href="mailto:zensyslabs@gmail.com"
                className="text-zen-purple font-medium hover:text-zen-indigo transition-colors"
              >
                zensyslabs@gmail.com
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium">
                  First Name *
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name *
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Please include the Country Code"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                Comment or Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-zen-purple hover:bg-zen-indigo"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
