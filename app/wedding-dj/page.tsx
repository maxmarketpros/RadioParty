import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import Image from "next/image";
import Link from "next/link";
import { Disc3, Music, Sparkles, Clock, CheckCircle2, ChevronRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premium Wedding DJ & Sax Duo in Santa Barbara | Radio Prophets",
    description:
        "Elevate your Santa Barbara wedding with our exclusive Wedding DJ and live Saxophone duo. Experience the perfect blend of high-energy mixing and live instrumental performance for an unforgettable reception.",
};

export default function WeddingDjPage() {
    return (
        <>
            <Header />
            <main className="bg-background">
                {/* Hero Section */}
                <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-24 px-4 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/IMG_9247.webp"
                            alt="Luxury Wedding DJ and Saxophone Duo performing live"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <div className="relative z-10 w-full mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center text-primary-foreground">
                        <p className="text-sm md:text-base uppercase tracking-[0.2em] font-medium mb-6 text-primary-foreground/90 flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Santa Barbara&apos;s Premier Entertainment
                            <Sparkles className="w-4 h-4" />
                        </p>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-balance max-w-4xl mx-auto leading-tight">
                            The Ultimate Wedding DJ <br className="hidden md:block" /> & Saxophone Experience
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            Fusing the boundless energy and limitless repertoire of a world-class club DJ with the electrifying presence of a live, roaming saxophonist. It’s not just a playlist; it’s an interactive performance tailored exactly to your vibe.
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase bg-accent text-white hover:bg-accent/90 transition-colors rounded-sm"
                        >
                            Inquire for Availability
                        </Link>
                    </div>
                </section>

                {/* Intro Section - The Hybrid Experience */}
                <section className="py-24 bg-background border-b border-border/40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Image Content */}
                            <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-2xl">
                                <Image
                                    src="/band-images/IMG_9393.webp"
                                    alt="Live saxophonist playing alongside a wedding DJ on the dance floor"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-foreground/5 mix-blend-multiply" />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-8 text-center lg:text-left">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
                                        Why Choose Both?
                                    </p>
                                    <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance leading-tight">
                                        A Modern Twist on <br /> Traditional Entertainment
                                    </h2>
                                </div>
                                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                    <p>
                                        When planning the perfect Santa Barbara wedding, choosing between a live band and a DJ is often the hardest decision. A live band brings undeniable stage presence and raw emotional energy, while a DJ offers the original tracks you love seamlessly mixed together with no breaks.
                                    </p>
                                    <p>
                                        Our <strong>DJ + Sax Duo</strong> bridges that gap perfectly. You get the flawless, non-stop mixing of a professional DJ who knows exactly how to read the room, augmented by a highly skilled saxophonist who brings the music to life. The saxophonist roams the dance floor, interacting directly with you and your guests, improvising over your favorite anthems, and elevating the energy of the room to absolute euphoria.
                                    </p>
                                    <p>
                                        From Ibiza-style house music to classic Motown and modern Top 40, the addition of a live horn transforms a standard DJ set into an explosive, concert-like experience that your guests will talk about for years.
                                    </p>
                                </div>
                                <div className="pt-4 flex justify-center lg:justify-start">
                                    <div className="w-24 h-px bg-accent/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits / Features Grid */}
                <section className="py-24 bg-secondary/30">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                                The Anatomy of an Unforgettable Party
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light">
                                We meticulously curate every detail of your sonic experience, ensuring your dance floor is never empty and your vision is flawlessly executed.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Disc3,
                                    title: "Flawless Mixing",
                                    desc: "No awkward pauses. No dead air. Our DJs blend tracks seamlessly, maintaining momentum and keeping the energy exactly where it needs to be."
                                },
                                {
                                    icon: Music,
                                    title: "Interactive Live Element",
                                    desc: "Our saxophonist steps off the stage and into the crowd, creating unbelievable photo opportunities and hyping up your guests firsthand."
                                },
                                {
                                    icon: Sparkles,
                                    title: "Completely Customizable",
                                    desc: "You control the vibe. From your absolute 'must-plays' to your 'do-not-plays', we build our performance exclusively around your musical tastes."
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

                {/* Timeline / Event Flow */}
                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
                                Seamless Coverage
                            </p>
                            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                                From Ceremony to Last Dance
                            </h2>
                        </div>

                        <div className="space-y-12">
                            {[
                                {
                                    title: "1. The Ceremony",
                                    time: "Setting the Scene",
                                    desc: "While your guests arrive, our DJ provides elegant prelude music. We flawlessly execute your chosen processional and recessional tracks with pinpoint timing, ensuring crystal-clear audio with our wireless mic setup for your officiant."
                                },
                                {
                                    title: "2. Cocktail Hour",
                                    time: "The Jazz Lounge",
                                    desc: "The saxophonist takes the spotlight! As guests mingle and sip signature cocktails, our saxophonist plays smooth, lounge-style covers of modern hits and jazz standards over custom backing tracks, setting an effortlessly cool and sophisticated mood."
                                },
                                {
                                    title: "3. The Reception",
                                    time: "The Main Event",
                                    desc: "We kick things off with high-energy grand entrances and curate the perfect dinner playlist. Once the formalities are over, the DJ opens the dance floor. The saxophonist joins in, jamming dynamically to everything from 80s throwbacks to current club anthems until the lights go up."
                                }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
                                    <div className="md:w-1/3 text-left md:text-right pt-1">
                                        <p className="text-accent font-medium tracking-[0.1em] text-sm uppercase mb-2">
                                            {step.time}
                                        </p>
                                        <h3 className="font-serif text-2xl text-foreground">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <div className="hidden md:flex flex-col items-center justify-center relative">
                                        <div className="w-3 h-3 rounded-full bg-accent z-10" />
                                        {i !== 2 && (
                                            <div className="w-px h-full bg-border absolute top-3" />
                                        )}
                                    </div>
                                    <div className="md:w-2/3 max-w-lg">
                                        <p className="text-lg text-muted-foreground font-light leading-relaxed group-hover:text-foreground/80 transition-colors">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Options / Pricing Cards */}
                <section className="py-24 bg-foreground text-background">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-5xl mb-6">
                                Package Options
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-foreground/70 font-light">
                                Choose the level of entertainment that perfectly fits your event structure and budget.
                            </p>
                        </div>

                        <div className="max-w-lg mx-auto">
                            {/* DJ + SAX Card */}
                            <div className="bg-accent text-white p-8 md:p-10 rounded-sm relative overflow-hidden shadow-2xl">
                                <h3 className="font-serif text-3xl mb-2">DJ & Sax Duo</h3>
                                <p className="text-white/80 text-sm font-medium tracking-[0.1em] uppercase mb-6">
                                    The Ultimate Hybrid
                                </p>
                                <p className="text-white/90 font-light leading-relaxed mb-8">
                                    Our flagship DJ package. Complete with a professional wedding DJ focused heavily on crowd reading and seamless transitions, elevated by a saxophonist who performs live alongside the tracks and directly in the crowd.
                                </p>
                                <ul className="space-y-4 mb-10">
                                    {[
                                        "Professional DJ and Emcee",
                                        "Live Roaming Saxophonist",
                                        "Cocktail Hour Solo Sax Sets",
                                        "Interactive Dance Floor Performance",
                                        "State-of-the-Art PA & Subwoofers",
                                        "Intelligent Dance Floor Lighting",
                                        "Custom Timeline Creation"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-white/90 shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="#contact"
                                    className="block text-center w-full px-6 py-3 bg-white text-accent hover:bg-white/90 transition-colors text-sm uppercase tracking-wider font-bold rounded-sm"
                                >
                                    Check Availability
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Closing SEO Information Block */}
                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground font-light text-base leading-relaxed space-y-6">
                        <p>
                            At Radio Prophets Events, we pride ourselves on being the most sought-after wedding entertainment group in Santa Barbara and the surrounding regions. While our full <Link href="/wedding-band" className="text-accent underline hover:text-accent/80">wedding bands</Link> are phenomenal for large-scale luxury events, our DJ and Sax Duo offers an incredibly versatile, footprint-friendly, and highly modern alternative that sacrifices absolutely none of the luxury or excitement.
                        </p>
                        <p>
                            Our team of DJs possess an encyclopedic knowledge of music across all eras. We work closely with our couples during the planning phase to ensure that your specific tastes—whether you love deep house, 90s R&B, classic rock anthems, or traditional cultural dances—are represented perfectly. The saxophonist performs by ear and by intense rehearsing, able to seamlessly improvise melodies and harmonies over literally any track the DJ drops, bringing a visceral, live concert feel straight to your venue.
                        </p>
                        <p>
                            From private estates in Montecito to beachfront resorts in San Diego, we provide the soundtrack to the finest celebrations. Secure your date early, as our boutique roster of talented DJs and musicians books out quickly year-round.
                        </p>
                    </div>
                </section>

                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
