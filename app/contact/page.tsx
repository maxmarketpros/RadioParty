"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Facebook, Youtube, Music } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-40 pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                            Contact Us
                        </p>
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance mb-6">
                            Let&apos;s Create Something Extraordinary
                        </h1>
                        <p className="max-w-2xl mx-auto text-muted-foreground">
                            Ready to take your event to the next level? Contact us today to check availability and request a custom quote for your special day.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="font-serif text-2xl mb-8">Get In Touch</h2>
                                <div className="space-y-6">
                                    <a
                                        href="tel:8055703117"
                                        className="flex items-center gap-4 group text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider font-semibold text-foreground/50">Phone</p>
                                            <p className="text-lg font-medium">(805) 570-3117</p>
                                        </div>
                                    </a>

                                    <a
                                        href="mailto:radioprophetsevents@gmail.com"
                                        className="flex items-center gap-4 group text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        <div className="h-12 w-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-wider font-semibold text-foreground/50">Email</p>
                                            <p className="text-lg font-medium">radioprophetsevents@gmail.com</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h2 className="font-serif text-2xl mb-8">Follow Our Journey</h2>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://www.instagram.com/radioprophets/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:scale-110"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/Radio-Prophets-2052277338320249"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:scale-110"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://www.youtube.com/watch?v=dzXxIw75PeY"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:scale-110"
                                        aria-label="YouTube"
                                    >
                                        <Youtube className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://open.spotify.com/playlist/3d3y8eQ9mDXqR6siKiBOn5"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all hover:scale-110"
                                        aria-label="Spotify"
                                    >
                                        <Music className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card p-8 md:p-12 shadow-sm rounded-sm border border-border/50">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium tracking-wide uppercase opacity-70">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            className="w-full bg-background border-border border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                            placeholder="John Smith"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium tracking-wide uppercase opacity-70">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full bg-background border-border border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="date" className="text-sm font-medium tracking-wide uppercase opacity-70">
                                        Event Date
                                    </label>
                                    <input
                                        id="date"
                                        type="date"
                                        className="w-full bg-background border-border border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium tracking-wide uppercase opacity-70">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full bg-background border-border border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Tell us about your event..."
                                    />
                                </div>
                                <Button className="w-full py-6 text-sm font-semibold uppercase tracking-widest">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
