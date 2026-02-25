"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    href: "https://www.instagram.com/radioprophets/",
    label: "Instagram",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/Radio-Prophets-2052277338320249",
    label: "Facebook",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/watch?v=dzXxIw75PeY",
    label: "YouTube",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: "https://open.spotify.com/playlist/3d3y8eQ9mDXqR6siKiBOn5",
    label: "Spotify",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldShowSolid = isScrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldShowSolid ? "bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between gap-4">
          {/* Left Section: Logo + Socials */}
          <div className="flex items-center gap-6 lg:gap-8">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={shouldShowSolid ? "/NEWLOGO-BLACK-TRANSPARENT-BG.png" : "/NEWLOGO-WHITE-TRANSPARENT-BG.png"}
                alt="Radio Prophets Events"
                width={320}
                height={320}
                className="h-20 w-auto md:h-24 transition-all duration-300"
                priority
              />
            </Link>

            {/* Social Links - Desktop */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${shouldShowSolid
                    ? "text-foreground/70 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                    }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Middle Section: Main Navigation (Centered) */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <nav className="flex items-center justify-center gap-1 lg:gap-2">
              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-black/5 focus:outline-none ${isServicesOpen ? "bg-black/5" : ""
                    } ${shouldShowSolid ? "text-foreground" : "text-white hover:text-white/80"
                    }`}
                >
                  Services
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[60]">
                    <div className="grid w-[400px] gap-4 p-5 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white text-black shadow-2xl border border-slate-200 rounded-md animate-in fade-in zoom-in duration-200 origin-top">
                      <div className="space-y-3">
                        <h4 className="font-medium leading-none text-gray-500 uppercase tracking-wider text-xs mb-2">DJs & Hybrids</h4>
                        <Link href="/wedding-dj" className="block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 group">
                          <div className="text-sm font-medium leading-none group-hover:text-primary font-serif transition-colors text-black">Wedding DJ & Sax</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-600">Club mixing backed by live roaming horn.</p>
                        </Link>
                        <Link href="/live-dj" className="block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 group">
                          <div className="text-sm font-medium leading-none group-hover:text-primary font-serif transition-colors text-black">Live DJ Service</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-600">Flawless club mixing without the cheese.</p>
                        </Link>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium leading-none text-gray-500 uppercase tracking-wider text-xs mb-2">Bands & Coordination</h4>
                        <Link href="/events-band" className="block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 group">
                          <div className="text-sm font-medium leading-none group-hover:text-primary font-serif transition-colors text-black">Events & Party Band</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-600">Explosive entertainment for luxury galas.</p>
                        </Link>
                        <Link href="/wedding-planning" className="block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 group">
                          <div className="text-sm font-medium leading-none group-hover:text-primary font-serif transition-colors text-black">Planning & Coordination</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-600">Logistics expertly handled top to bottom.</p>
                        </Link>
                        <Link href="/dance-band-event-dj" className="block select-none space-y-1 rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100 group">
                          <div className="text-sm font-medium leading-none group-hover:text-primary font-serif transition-colors text-black">Dance Band & Event DJ</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-600">The ultimate live band and DJ fusion for your dance floor.</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Packages Link */}
              <Link
                href="/wedding-band"
                className={`inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 ${shouldShowSolid ? "text-foreground" : "text-white hover:text-white/80"
                  }`}
              >
                Packages
              </Link>

              {/* Videos Link */}
              <Link
                href="/videos"
                className={`inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 ${shouldShowSolid ? "text-foreground" : "text-white hover:text-white/80"
                  }`}
              >
                Videos
              </Link>

              {/* Photo Gallery Link */}
              <Link
                href="/gallery"
                className={`inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-black/5 ${shouldShowSolid ? "text-foreground" : "text-white hover:text-white/80"
                  }`}
              >
                Photo Gallery
              </Link>
            </nav>
          </div>

          {/* Right Section: CTA Contact Button */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Button asChild className="font-medium tracking-wide text-xs lg:text-sm">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`md:hidden p-2 ml-auto ${shouldShowSolid ? "text-foreground" : "text-white"
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Expanded Area */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border overflow-y-auto max-h-[calc(100vh-6rem)]">
          <nav className="flex flex-col px-6 py-8 gap-8">
            {/* Services Links Mobile */}
            <div className="space-y-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Services</p>
              <div className="flex flex-col gap-4 pl-4 border-l border-border/50">
                <Link href="/wedding-dj" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Wedding DJ & Sax</Link>
                <Link href="/live-dj" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Live DJ Service</Link>
                <Link href="/events-band" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Events & Party Band</Link>
                <Link href="/wedding-planning" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Planning & Coordination</Link>
                <Link href="/dance-band-event-dj" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-serif">Dance Band & Event DJ</Link>
              </div>
            </div>

            {/* Other Links Mobile */}
            <div className="space-y-4 pt-6 border-t border-border/50">
              <Link href="/wedding-band" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-serif">Packages</Link>
              <Link href="/videos" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-serif">Videos</Link>
              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="block text-xl font-serif">Photo Gallery</Link>
            </div>

            <div className="flex items-center gap-4 py-4 mt-4 border-t border-border/50">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                  aria-label={social.label}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Phone className="h-4 w-4" />
              <a href="tel:8055703117" className="text-sm font-medium hover:text-accent transition-colors">
                (805) 570-3117
              </a>
            </div>
            <Button asChild className="w-full h-12 mt-2 font-bold tracking-widest text-xs">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
