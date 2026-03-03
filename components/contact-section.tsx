"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Calendar, Loader2, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // @ts-ignore
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
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

            {/* Social proof images */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="https://www.theknot.com/marketplace/radio-prophets-santa-barbara-ca-2047418" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/AWARD1.png"
                  alt="The Knot Best of Weddings"
                  width={90}
                  height={80}
                  className="h-16 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
              <Link href="https://www.weddingwire.com/biz/radio-prophets-santa-barbara/d9ecce3deee27ac3.html" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/award2.png"
                  alt="WeddingWire Couples' Choice Awards"
                  width={90}
                  height={80}
                  className="h-16 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 shadow-sm border border-border/50 rounded-sm">
            {status === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif text-balance">Thank you for reaching out!</h3>
                <p className="text-muted-foreground">
                  We&apos;ve received your inquiry and will get back to you as soon as possible to discuss your event.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl mb-6">Request a Quote</h3>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabIndex={-1} />
                    </label>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium block mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John & Jane Doe"
                        required
                        className="bg-background focus-visible:ring-1 focus-visible:ring-primary rounded-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium block mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        required
                        className="bg-background focus-visible:ring-1 focus-visible:ring-primary rounded-none"
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
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="bg-background focus-visible:ring-1 focus-visible:ring-primary rounded-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="text-sm font-medium block mb-2">
                        Event Date
                      </label>
                      <Input
                        id="eventDate"
                        name="date"
                        type="date"
                        required
                        className="bg-background focus-visible:ring-1 focus-visible:ring-primary rounded-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eventType" className="text-sm font-medium block mb-2">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      className="w-full h-10 px-3 py-2 bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary"
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
                      name="message"
                      placeholder="Share details about your event, venue, and any special requests..."
                      rows={4}
                      className="bg-background focus-visible:ring-1 focus-visible:ring-primary rounded-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again or contact us directly at our email or phone above.
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "submitting"}
                    className="w-full font-medium tracking-wide uppercase disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
