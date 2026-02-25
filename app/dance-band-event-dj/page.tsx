import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Music, Disc3, Mic2, Star, CheckCircle2, Waves } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Live Dance Band, Event DJ & Sax Duo in Santa Barbara | Radio Prophets",
    description:
        "Radio Prophets Events offers elite entertainment for luxury events. Choose from our dynamic Live Dance Band, professional Event DJs, or the highly sought-after DJ + Sax Duo.",
};

export default function DanceBandEventDjPage() {
    return (
        <>
            <Header />
            <main className="bg-background">
                {/* Hero Section */}
                <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-24 px-4 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/band-images/IMG_9378.webp"
                            alt="Live dance band performing an electrifying show at a luxury event"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="relative z-10 w-full mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center text-primary-foreground">
                        <p className="text-sm md:text-base uppercase tracking-[0.2em] font-medium mb-6 text-primary-foreground/90 flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Premium Event Entertainment
                            <Sparkles className="w-4 h-4" />
                        </p>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-balance mx-auto leading-tight">
                            Dance Band, Event DJ, <br className="hidden md:block" /> & DJ + Sax Duo
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            Whether you envision a soaring live concert from a 10-piece band, the flawless mixing of a world-class DJ, or our signature DJ and Saxophone hybrid, we engineer the perfect musical experience for your event.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="#contact"
                                className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase bg-accent text-white hover:bg-accent/90 transition-colors rounded-sm shadow-lg"
                            >
                                Get a Custom Quote
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Unified Overview / The Trinity of Party Entertainment */}
                <section className="py-24 bg-secondary/30">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                                Three Tiers of Unforgettable Energy
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light">
                                We are not a massive talent agency flipping hundreds of bands. Radio Prophets Events is a boutique, highly curated entertainment collective offering three distinct, elite performance styles.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="bg-card border border-border/50 p-8 rounded-sm text-center shadow-sm">
                                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                                    <Music className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-2xl mb-3 text-foreground">Live Dance Band</h3>
                                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                                    A full-scale concert experience featuring top-tier vocalists and musicians. From a tight 5-piece group to a 10-piece ensemble with horns, guaranteed to ignite any stage.
                                </p>
                                <Link href="#dance-band" className="text-accent text-sm font-medium uppercase tracking-wider hover:underline">
                                    Explore the Band
                                </Link>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-card border border-border/50 p-8 rounded-sm text-center shadow-sm">
                                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                                    <Disc3 className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-2xl mb-3 text-foreground">Premium Event DJ</h3>
                                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                                    Flawless club-style mixing and meticulous crowd reading. Our deeply experienced DJs blend generational hits with modern anthems, completely tailored to your vibe.
                                </p>
                                <Link href="#event-dj" className="text-accent text-sm font-medium uppercase tracking-wider hover:underline">
                                    Explore the DJ
                                </Link>
                            </div>
                            {/* Card 3 */}
                            <div className="bg-card border border-border/50 p-8 rounded-sm text-center shadow-sm">
                                <div className="mx-auto w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
                                    <Mic2 className="w-8 h-8" />
                                </div>
                                <h3 className="font-serif text-2xl mb-3 text-foreground">DJ + Saxophone</h3>
                                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                                    Our most popular hybrid offering. The limitless repertoire of a DJ seamlessly backed by the electrifying presence of a live, roaming saxophonist playing directly in the crowd.
                                </p>
                                <Link href="#dj-sax" className="text-accent text-sm font-medium uppercase tracking-wider hover:underline">
                                    Explore the Duo
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Sections */}

                {/* 1. Live Dance Band */}
                <section id="dance-band" className="py-24 bg-background border-b border-border/40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-2xl">
                                <Image
                                    src="/band-images/IMG_9385.webp"
                                    alt="Live dance band performing energetically on stage"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="space-y-8 text-center lg:text-left">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
                                        The Full Concert Experience
                                    </p>
                                    <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance leading-tight">
                                        The Live Dance Band
                                    </h2>
                                </div>
                                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                    <p>
                                        There is an undeniable, visceral energy that only a live band can produce. Our flagship Live Dance Band brings together internationally touring musicians, dynamic vocalists, and an expansive repertoire designed specifically to pack the dance floor.
                                    </p>
                                    <p>
                                        We cover everything from classic Motown and 80s rock anthems to today&apos;s chart-topping pop and hip-hop. Whether you are hosting a luxury wedding reception or a high-stakes corporate gala in Santa Barbara, our scalable configurations (ranging from an elegant 5-piece to a massive 10-piece powerhouse with a full horn section) guarantee an awe-inspiring performance.
                                    </p>
                                </div>
                                <ul className="space-y-3 pt-4 inline-block text-left">
                                    {["Scalable 5 to 10-piece ensembles", "Incredible vocal harmonies", "Deep repertoire spanning 6 decades", "Dedicated front-of-house sound engineer"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Event DJ */}
                <section id="event-dj" className="py-24 bg-foreground text-background">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">
                                        Flawless Mixing & Execution
                                    </p>
                                    <h2 className="font-serif text-3xl md:text-5xl text-background text-balance leading-tight">
                                        Premium Event DJ
                                    </h2>
                                </div>
                                <div className="space-y-6 text-lg text-background/80 font-light leading-relaxed">
                                    <p>
                                        For events that demand an immense variety of absolute original tracks mixed flawlessly without pause, our Premium Event DJ service is the gold standard.
                                    </p>
                                    <p>
                                        Our DJs eschew the typical "cheesy wedding" persona. Instead, we offer polished, professional emcee services combined with intense, club-tier mixing abilities. We read the room constantly, shifting genres and tempos intuitively to ensure the energy never drops. From your 'must-plays' to 'do-not-plays', your customized playlist is perfectly curated and mixed live.
                                    </p>
                                </div>
                                <ul className="space-y-3 pt-4 inline-block text-left text-background/90">
                                    {["Seamless transition mixing", "Polished, non-cheesy emceeing", "Completely customized setlists", "Intelligent dance floor lighting included"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-2xl order-1 lg:order-2 border border-border/20">
                                <Image
                                    src="/band-images/IMG_9411.webp"
                                    alt="Live DJ in action handling a massive party"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. DJ + Sax Duo */}
                <section id="dj-sax" className="py-24 bg-background border-b border-border/40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-2xl">
                                <Image
                                    src="/band-images/IMG_9418.webp"
                                    alt="Saxophonist roaming the crowd and playing alongside a DJ"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="space-y-8 text-center lg:text-left">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
                                        The Ultimate Hybrid
                                    </p>
                                    <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance leading-tight">
                                        DJ & Saxophone Duo
                                    </h2>
                                </div>
                                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                    <p>
                                        Can't decide between the original tracks of a DJ and the roaring stage presence of a live musician? The DJ & Sax Duo is our most rapidly booked service, perfectly bridging the gap between both worlds.
                                    </p>
                                    <p>
                                        Our world-class DJ spins the night away while our incredibly talented saxophonist takes the music to a completely different level. Improvizing over deep house, classic rock, and modern hip-hop alike, the sax player physically roams the dance floor, engaging directly with your guests for phenomenal photo opportunities and an unforgettable live concert sheen.
                                    </p>
                                </div>
                                <ul className="space-y-3 pt-4 inline-block text-left text-muted-foreground">
                                    {["The limitless song choice of a DJ", "The electrifying presence of live music", "Roaming, interactive saxophone performances", "Jaw-dropping cocktail hour jazz sets"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing Information */}
                <section className="py-24 bg-secondary/30">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground font-light text-base leading-relaxed space-y-6">
                        <h2 className="font-serif text-3xl text-foreground mb-8">Santa Barbara's Premier Entertainment</h2>
                        <p>
                            At Radio Prophets Events, we understand that entertainment is the heartbeat of your event. Whether you book our massive <strong>Live Dance Band</strong> for your corporate gala, our premium <strong>Event DJ</strong> for an intense private party, or our signature <strong>DJ & Sax Duo</strong> for your luxury wedding reception, you are securing top-tier talent backed by flawless execution.
                        </p>
                        <p>
                            We provide comprehensive production capabilities including concert-grade PA systems, state-of-the-art wireless microphones, and intelligent lighting packages tailored specifically to your venue. Contact us today to discuss your vision and discover which form of entertainment is the perfect match for your celebration.
                        </p>
                    </div>
                </section>

                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
