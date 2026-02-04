"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose mailto link with form data
    const subject = `Event Inquiry: ${formData.eventType} on ${formData.eventDate}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}
Event Type: ${formData.eventType}

Message:
${formData.message}`;

    window.location.href = `mailto:radioprophetsevents@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              Let&apos;s Make Your Event Unforgettable
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ready to book Santa Barbara&apos;s premier wedding band? Fill out the form or contact
              us directly. We&apos;d love to hear about your event and discuss how we can make it
              truly special.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <Phone className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:8055703117"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    (805) 570-3117
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <Mail className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:radioprophetsevents@gmail.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    radioprophetsevents@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-muted-foreground">
                    Santa Barbara, CA
                    <br />
                    Serving San Diego to Big Sur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary">
                  <Calendar className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium">Availability</p>
                  <p className="text-muted-foreground">24/7 - We book up fast!</p>
                </div>
              </div>
            </div>

            {/* Social proof image */}
            <div className="mt-8">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/4e25dc13-4154-4ba7-b575-a385750e63de/IMG_3100.jpg"
                alt="Award badges"
                width={180}
                height={80}
                className="h-16 w-auto"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10">
            <h3 className="font-serif text-2xl mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium block mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John & Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium block mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="text-sm font-medium block mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="eventDate" className="text-sm font-medium block mb-2">
                    Event Date
                  </label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="eventType" className="text-sm font-medium block mb-2">
                  Event Type
                </label>
                <select
                  id="eventType"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  required
                  className="w-full h-10 px-3 py-2 bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select event type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate Event">Corporate Event</option>
                  <option value="Private Party">Private Party</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-2">
                  Tell Us About Your Event
                </label>
                <Textarea
                  id="message"
                  placeholder="Share details about your event, venue, and any special requests..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background"
                />
              </div>

              <Button type="submit" size="lg" className="w-full font-medium tracking-wide">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
