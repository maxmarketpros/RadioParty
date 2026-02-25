import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CalendarCheck, ClipboardList, PenTool, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Full Service Wedding Planning & Day-of Coordination | Radio Prophets",
    description:
        "Premium wedding planning and day-of coordination services in Santa Barbara. From meticulous timelines to stunning design, we ensure your wedding is flawlessly executed.",
};

export default function WeddingPlanningPage() {
    return (
        <>
            <Header />
            <main className="bg-background">
                {/* Hero Section */}
                <section className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-24 px-4 overflow-hidden">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/IMG_9354.webp"
                            alt="Beautiful and elegant luxury wedding styling setup"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/50" />
                    </div>

                    <div className="relative z-10 w-full mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center text-primary-foreground">
                        <p className="text-sm md:text-base uppercase tracking-[0.2em] font-medium mb-6 text-primary-foreground/90 flex items-center justify-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Expert Event Curation
                            <Sparkles className="w-4 h-4" />
                        </p>
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 text-balance mx-auto leading-tight">
                            Full Service Planning <br className="hidden md:block" /> & Day-of Coordination
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                            A truly luxurious wedding feels effortless because every detail is meticulously managed behind the scenes. From visionary design to flawless day-of execution, we bring your dream celebration to life.
                        </p>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-[0.15em] uppercase bg-accent text-white hover:bg-accent/90 transition-colors rounded-sm shadow-lg"
                        >
                            Inquire About Planning
                        </Link>
                    </div>
                </section>

                {/* Intro Section - The Art of Logistics */}
                <section className="py-24 bg-background border-b border-border/40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Text Content */}
                            <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.2em] text-accent font-semibold mb-4">
                                        Peace of Mind
                                    </p>
                                    <h2 className="font-serif text-3xl md:text-5xl text-foreground text-balance leading-tight">
                                        Flawless Execution <br /> From Start to Finish
                                    </h2>
                                </div>
                                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                                    <p>
                                        Your engagement should be a season of joy, not stress. At Radio Prophets, we extend our logistical expertise far beyond entertainment, offering comprehensive planning and coordination services designed to orchestrate perfection.
                                    </p>
                                    <p>
                                        We specialize in navigating complex timelines, orchestrating high-end vendor teams, and designing cohesive, breathtaking aesthetics. Whether you are building from the ground up at a private estate in Montecito or stepping into an iconic Santa Barbara venue, we act as your fierce advocates and visionary guides.
                                    </p>
                                    <p>
                                        By entrusting us with the logistics, you secure the ultimate luxury: the ability to be fully present and deeply immersed in every moment of your own wedding day.
                                    </p>
                                </div>
                                <div className="pt-4 flex justify-center lg:justify-start">
                                    <div className="w-24 h-px bg-accent/40" />
                                </div>
                            </div>

                            {/* Image Content */}
                            <div className="relative aspect-[4/3] w-full max-w-xl mx-auto lg:max-w-none rounded-sm overflow-hidden shadow-2xl order-1 lg:order-2">
                                <Image
                                    src="/images/IMG_9355.webp"
                                    alt="Detailed wedding tablescape and elegant event design"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Services Grid */}
                <section className="py-24 bg-secondary/30">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                                Coordination Tiers
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light">
                                From entire event architecture to the final month of polish, we offer tailored support for your unique needs.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: ClipboardList,
                                    title: "Full Service Planning",
                                    desc: "Comprehensive guidance from day one. Venue scouting, robust budget management, elite vendor curation, and complete logistical architecture for couples who want white-glove service."
                                },
                                {
                                    icon: PenTool,
                                    title: "Design & Styling",
                                    desc: "Perfect for couples who have the logistics down but need a visionary to build a cohesive aesthetic. We handle the visual narrative, floral direction, rentals, and spatial layout."
                                },
                                {
                                    icon: CalendarCheck,
                                    title: "Day-of Coordination",
                                    desc: "Stepping in 4-6 weeks out, we take the reins. We polish your timeline, coordinate with your booked vendors, and run the entire wedding day so you can just show up and celebrate."
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

                {/* What's Included / Value Prop */}
                <section className="py-24 bg-foreground text-background">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-5xl mb-6">
                                The Logistics of Luxury
                            </h2>
                            <p className="max-w-2xl mx-auto text-lg text-foreground/70 font-light">
                                We meticulously engineer every facet of your event so that serendipity and joy can take center stage.
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto bg-background text-foreground p-8 md:p-12 rounded-sm shadow-2xl">
                            <div className="grid sm:grid-cols-2 gap-8">
                                <ul className="space-y-4">
                                    {[
                                        "Master Timeline Creation",
                                        "Vendor Contract Review & Management",
                                        "Floorplan & Layout Architecture",
                                        "Rehearsal Direction"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="space-y-4">
                                    {[
                                        "Comprehensive Budget Tracking",
                                        "On-site Vendor Load-in & Strike",
                                        "Bridal Party & VIP Concierge",
                                        "Emergency Kit & Problem Mitigation"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-sm font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12 text-center">
                                <Link
                                    href="#contact"
                                    className="inline-block w-full sm:w-auto px-10 py-4 bg-accent text-white hover:bg-accent/90 transition-colors text-sm uppercase tracking-wider font-bold rounded-sm"
                                >
                                    Check Our Availability
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final SEO Text */}
                <section className="py-24 bg-background">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-muted-foreground font-light text-base leading-relaxed space-y-6">
                        <p>
                            Booking exceptional wedding planning in Santa Barbara, Ojai, and Southern California requires a team that understands not just the design, but the intense logistical demands of complex venues and private estates.
                        </p>
                        <p>
                            Because we are rooted in the live event and entertainment industry, our approach to coordination is incredibly timeline-driven. We know precisely how long it takes to flip a room, move 200 guests from cocktail hour to dinner, and execute flawless grand entrances alongside your <Link href="/wedding-band" className="text-accent underline hover:text-accent/80">wedding band</Link> or DJ.
                        </p>
                        <p>
                            Our combined entertainment and coordination packages offer our couples an unparalleled, unified vendor experience where the right hand always knows what the left hand is doing. Let us absorb the stress so you can simply revel in the magic of your wedding.
                        </p>
                    </div>
                </section>

                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
