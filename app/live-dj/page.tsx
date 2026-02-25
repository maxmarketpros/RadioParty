import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Disc3, Mic2, Settings2, CheckCircle2, Music } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premium Live Wedding DJ Services in Santa Barbara | Radio Prophets",
    description:
        "Expert Live DJ services for weddings, corporate events, and private parties. We provide seamless mixing, packed dance floors, and unforgettable musical experiences.",
};

export default function LiveDjPage() {
    return (
        <>
            <Header />
            <main className="bg-background">
                {/* Hero Section */}
                <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-24 px-4 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/IMG_9359.webp"
                            alt="Exciting live DJ and party atmosphere"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="relative z-10 w-full mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center text-primary-foreground">
                        <p className="text-sm md:text-base uppercase tracking-[0.2em] font-medium mb-6 text-primary-foreground/90 flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Premium Live DJ Services
                            <Sparkles className="w-4 h-4" />
                        </p>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-balance mx-auto leading-tight">
                            The Ultimate <br className="hidden md:block" /> Soundtrack to Your Night
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            A legendary reception requires more than just a playlist. Our expert wedding DJs provide flawless, high-energy mixing tailored entirely to your personal taste, keeping the dance floor packed from start to finish.
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase bg-accent text-white hover:bg-accent/90 transition-colors rounded-sm shadow-lg"
                        >
                            Request Pricing & Availability
                        </Link>
                    </div>
                </section>

                {/* Intro Section - The Art of DJing */}
                <section className="py-24 bg-background border-b border-border/40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Text Content */}
                            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
                                        Reading the Room
                                    </p>
                                    <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance leading-tight">
                                        Flawless Mixing for <br /> Unforgettable Parties
                                    </h2>
                                </div>
                                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                    <p>
                                        The difference between an average wedding and an unforgettable celebration is the entertainment. A skilled DJ does much more than press play—they read the crowd, anticipate the mood, and build energy throughout the night.
                                    </p>
                                    <p>
                                        At Radio Prophets, our professional DJs are true masters of their craft. With years of experience performing at high-end weddings and elite private events across Southern California, we know exactly how to blend classic generational hits with modern bangers smoothly, ensuring there are absolutely no dead air moments.
                                    </p>
                                    <p>
                                        We work with you well before the big day to meticulously map out the musical journey of your event. From the exact vibe of your cocktail hour to the energetic peaks of your dance floor sets, nothing is left to chance.
                                    </p>
                                </div>
                                <div className="pt-4 flex justify-center lg:justify-start">
                                    <div className="w-24 h-px bg-accent/40" />
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-2xl order-1 lg:order-2">
                                <Image
                                    src="/images/IMG_9361.webp"
                                    alt="Packed dance floor with high energy lighting at a corporate event or wedding"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-24 bg-secondary/30">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                                The DJ Experience
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light">
                                Elevating your celebration through technical precision, premium equipment, and deep musical knowledge.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Disc3,
                                    title: "Seamless Club-Style Mixing",
                                    desc: "No sudden stops or awkward fades. We mix songs live, matching beats and keys to create a continuous, energetic flow of music that keeps guests dancing."
                                },
                                {
                                    icon: Mic2,
                                    title: "Professional Emcee",
                                    desc: "We confidently handle all announcements, introductions, and timeline transitions with polished professionalism—never cheesy, just smooth and engaging."
                                },
                                {
                                    icon: Settings2,
                                    title: "Premium Sound & Lighting",
                                    desc: "Every DJ package includes state-of-the-art concert-grade PA systems, crisp subwoofers, and intelligent dance floor lighting tailored to your venue."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="bg-card border border-border/50 p-8 rounded-sm text-center shadow-sm">
                                    <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-serif text-xl mb-3 text-foreground">{feature.title}</h3>
                                    <p className="text-muted-foreground font-light leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Package Card */}
                <section className="py-24 bg-foreground text-background">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-5xl mb-6">
                                The DJ Package
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-foreground/70 font-light">
                                A comprehensive entertainment solution meticulously designed for flawless weddings and luxury events.
                            </p>
                        </div>

                        <div className="max-w-lg mx-auto">
                            {/* Solo DJ Card */}
                            <div className="bg-background text-foreground p-8 md:p-10 rounded-sm shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="font-serif text-3xl mb-2">Premium Solo DJ</h3>
                                <p className="text-accent text-sm font-medium tracking-[0.1em] uppercase mb-6">
                                    Masterful Mixing
                                </p>
                                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                                    A professional, deeply experienced wedding DJ focused heavily on crowd reading, seamless transitions, and flawless event execution. Perfect for those who want a phenomenal dance party without the live instrumental element.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {[
                                        "Professional DJ and Emcee",
                                        "State-of-the-Art PA & Subwoofers",
                                        "Intelligent Dance Floor Lighting",
                                        "Wireless Microphones for Toasts",
                                        "Unlimited Musical Consultations",
                                        "Custom Timeline Creation",
                                        "Ceremony Audio Support Option"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="#contact"
                                    className="block text-center w-full px-6 py-3 bg-accent text-white hover:bg-accent/90 transition-colors text-sm uppercase tracking-wider font-bold rounded-sm"
                                >
                                    Check Availability
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final SEO Text */}
                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground font-light text-base leading-relaxed space-y-6">
                        <p>
                            Secure the best boutique Live DJ service in Santa Barbara for your luxury wedding, private party, or corporate event. Radio Prophets Events does not operate like a massive agency where you get assigned a random DJ at the last minute—our roster is exclusively curated, meaning you only get deeply experienced talent who treat DJing as a true art form.
                        </p>
                        <p>
                            We pride ourselves on an extensive knowledge spanning decades of music, able to seamlessly flow from elegant jazz during your upscale cocktail hour, to the perfect background R&B during dinner, and finally exploding into high-energy dance anthems for the culmination of the evening.
                        </p>
                        <p>
                            If you decide you want to add a unique visual and performative flair, you can always upgrade to our incredible <Link href="/wedding-dj" className="text-accent underline hover:text-accent/80">DJ & Sax Duo</Link> package, which combines the DJ&apos;s mixing prowess with a live roaming musician.
                        </p>
                    </div>
                </section>

                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
