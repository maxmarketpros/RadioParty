import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const publications = [
    {
        title: "Vogue Feature",
        caption: "Real Wedding: Janni & Travis",
        image: "/images/A.webp",
        link: "https://thewed.com/magazine/real-wedding-janni-travis",
        publisher: "The Wed",
        delay: "0",
    },
    {
        title: "California Wedding Day",
        caption: "European Style Wedding at Ritz-Carlton Bacara",
        image: "/images/C.webp",
        link: "https://californiaweddingday.com/european-style-wedding-ritz-carlton-bacara-santa-barbara",
        publisher: "California Wedding Day",
        delay: "100",
    },
];

export function PublicationsSection() {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm uppercase tracking-[0.2em] text-accent mb-3">
                        Press & Media
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                        Featured Publications
                    </h2>
                    <div className="w-20 h-px bg-accent mx-auto" />
                </div>

                {/* Publications Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {publications.map((pub) => (
                        <Link
                            key={pub.title}
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div
                                className="relative overflow-hidden aspect-[9/16] mb-6 bg-secondary/50 border border-border/50"
                            >
                                <Image
                                    src={pub.image}
                                    alt={pub.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="bg-background/90 text-foreground px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        <span className="text-sm font-medium tracking-wide uppercase">Read Article</span>
                                        <ArrowUpRight className="w-4 h-4 text-accent" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
                                        {pub.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-accent opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                </div>
                                <p className="text-foreground/70 leading-relaxed font-light">
                                    {pub.caption}
                                </p>
                                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/30 text-sm text-foreground/50 uppercase tracking-wider">
                                    <span>{pub.publisher}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
