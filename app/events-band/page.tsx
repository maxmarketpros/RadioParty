import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Music, Star, Briefcase, Mic2, Users, Waves } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premier Corporate Event & Party Band in Santa Barbara | Radio Prophets",
    description:
        "Radio Prophets Events provides world-class live band entertainment for corporate galas, private parties, and luxury events in Santa Barbara and beyond. High-energy, professional, and unforgettable.",
};

export default function EventsBandPage() {
    return (
        <>
            <Header />
            <main className="bg-background">
                {/* Hero Section */}
                <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-24 px-4 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/IMG_9247.webp"
                            alt="High energy live party band performing on stage"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="relative z-10 w-full mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center text-primary-foreground">
                        <p className="text-sm md:text-base uppercase tracking-[0.2em] font-medium mb-6 text-primary-foreground/90 flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Next-Level Live Entertainment
                            <Sparkles className="w-4 h-4" />
                        </p>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-balance mx-auto leading-tight">
                            The Premier Events <br className="hidden md:block" /> & Corporate Party Band
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            From high-stakes corporate galas to exclusive private celebrations, Radio Prophets delivers an explosive, stadium-level concert experience designed specifically to pack the dance floor and elevate your event.
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase bg-accent text-white hover:bg-accent/90 transition-colors rounded-sm shadow-lg"
                        >
                            Request an Event Quote
                        </Link>
                    </div>
                </section>

                {/* Intro Section - The Impact */}
                <section className="py-24 bg-background border-b border-border/40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Text Content */}
                            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
                                        More Than Just Music
                                    </p>
                                    <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance leading-tight">
                                        Transforming Gatherings <br /> Into Legendary Experiences
                                    </h2>
                                </div>
                                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                    <p>
                                        When you are hosting a high-profile corporate event, an awards gala, or a milestone private party, background music simply isn&apos;t enough. The success of the night hinges on the energy of the room.
                                    </p>
                                    <p>
                                        Our party bands do not just play songs; we engineer experiences. Featuring a collective of top-tier, internationally touring musicians and fiercely engaging vocalists, we know exactly how to read a diverse crowd and scale the energy of the performance from elegant dinner ambiance to an explosive, hands-in-the-air dance party.
                                    </p>
                                    <p>
                                        With an incredibly deep repertoire spanning from Motown classics and 80s rock anthems to today&apos;s chart-topping pop and hip-hop, we ensure every single guest—regardless of age or taste—spends the night on the dance floor.
                                    </p>
                                </div>
                                <div className="pt-4 flex justify-center lg:justify-start">
                                    <div className="w-24 h-px bg-accent/40" />
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-2xl order-1 lg:order-2">
                                <Image
                                    src="/images/IMG_9363.webp"
                                    alt="Lead singer engaging with a massive crowd during a live corporate event performance"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Versatility / Feature Grid */}
                <section className="py-24 bg-secondary/30">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                                The Corporate Standard
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light">
                                We combine raw musical talent with strict professional execution so event planners and coordinators can breathe easy.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Briefcase,
                                    title: "White-Glove Professionalism",
                                    desc: "From the first email to the final encore, our logistical execution is flawless. We arrive early, soundcheck efficiently, dress sharply, and coordinate seamlessly with your production team."
                                },
                                {
                                    icon: Mic2,
                                    title: "Scalable Band Sizes",
                                    desc: "Whether you need an elegant 5-piece band for a boutique company retreat or our explosive 10-piece ensemble with a full horn section for a 1,000+ guest gala, we scale perfectly to your venue."
                                },
                                {
                                    icon: Waves,
                                    title: "Dedicated Sound Engineering",
                                    desc: "Every large-scale performance includes an independent front-of-house sound engineer to guarantee pristine, concert-quality audio that fills the room without overpowering your guests' conversations."
                                }
                            ].map((feature, i) => (
                                <div key={i} className="bg-card border border-border/50 p-8 rounded-sm text-center">
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

                {/* Event Types / Impact List Section */}
                <section className="py-24 bg-foreground text-background">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Graphic/List */}
                            <div>
                                <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center lg:text-left">
                                    Tailored To Your Event
                                </h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Corporate Galas & Awards Reviews",
                                            desc: "Sophisticated dinner sets followed by high-impact dance sets to celebrate company achievements."
                                        },
                                        {
                                            title: "Holiday Parties",
                                            desc: "Injecting massive energy into annual gatherings, complete with themed music and interactive crowd work."
                                        },
                                        {
                                            title: "Charity Fundraisers",
                                            desc: "Keeping donors engaged and spirits high to maximize the impact and enjoyment of the evening."
                                        },
                                        {
                                            title: "Milestone Private Parties",
                                            desc: "Birthdays, anniversaries, and VIP celebrations demanding nothing but the best live entertainment available."
                                        }
                                    ].map((type, i) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <div className="w-12 h-12 rounded-sm bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                                                <Star className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-serif mb-1">{type.title}</h3>
                                                <p className="text-background/70 font-light text-sm">{type.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Accompanying Action Image */}
                            <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-2xl">
                                <Image
                                    src="/band-images/IMG_9401.webp"
                                    alt="Live band members in action with vibrant stage lighting"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-accent/10 mix-blend-color" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SEO & Booking Info */}
                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground font-light text-base leading-relaxed space-y-6">
                        <p>
                            Booking a top-tier live party band in Santa Barbara, Los Angeles, or Orange County has never been easier. Radio Prophets Events acts as your direct, frictionless partner for premium event entertainment. Whether you are a corporate event planner seeking rock-solid reliability or a private client wanting to throw the party of a lifetime, we provide completely customized musical solutions.
                        </p>
                        <p>
                            We provide full production (Sound and Lighting), take care of the heavy logistical lifting, and ensure that from the moment your guests enter the room until the venue turns the lights on, the atmosphere is utterly electric.
                        </p>
                        <p>
                            From our tightly run 5-piece foundational band to our show-stopping 10-piece ensemble, we are ready to perform. Contact our booking team today to secure your date and start building the perfect setlist.
                        </p>
                        <div className="pt-8">
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold tracking-[0.2em] uppercase border-2 border-accent text-accent hover:bg-accent hover:text-white transition-all rounded-sm"
                            >
                                Secure Your Date Today
                            </Link>
                        </div>
                    </div>
                </section>

                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
