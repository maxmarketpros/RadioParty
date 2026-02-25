import Link from "next/link";
import Image from "next/image";

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
  {
    href: "https://music.apple.com/us/playlist/radio-prophets-ep-playlist/pl.u-xlyNjoXuoMYdr0",
    label: "Apple Music",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.401-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.49-2.09-1.335-.304-.846-.04-1.8.638-2.333.396-.31.863-.466 1.358-.525.438-.052.88-.074 1.316-.142.242-.038.395-.15.438-.39.015-.087.018-.177.018-.265V7.698c0-.088-.02-.177-.04-.263-.04-.19-.17-.293-.35-.27-.144.023-.287.06-.43.094l-3.86.94c-.02.006-.04.015-.06.02-.28.1-.39.227-.42.52v7.59c.005.417-.035.833-.222 1.22-.277.575-.746.95-1.362 1.137-.345.105-.698.167-1.058.193-.95.07-1.82-.432-2.155-1.282-.334-.85-.083-1.82.62-2.376.39-.31.854-.478 1.346-.54.452-.06.905-.08 1.35-.16.298-.053.435-.2.47-.5.01-.065.007-.13.007-.196V6.016c0-.104.012-.208.038-.308.064-.252.225-.383.48-.42.158-.023.318-.042.476-.068l4.99-1.18c.36-.088.72-.18 1.085-.257.23-.05.466-.06.7-.055.38.01.69.2.81.563.05.14.08.29.08.43v5.39z" />
      </svg>
    ),
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/NEWLOGO-WHITE-TRANSPARENT-BG.png"
                alt="Radio Prophets Events"
                width={200}
                height={200}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Santa Barbara&apos;s premier wedding band providing unforgettable live entertainment
              for weddings, corporate events, and luxury celebrations across California.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Home</Link>
              <Link href="/wedding-band" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Wedding Band</Link>
              <Link href="/wedding-dj" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Wedding DJ & Sax</Link>
              <Link href="/wedding-planning" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Wedding Planning & Coordination</Link>
              <Link href="/events-band" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Events & Party Band</Link>
              <Link href="/live-dj" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Live DJ Service</Link>
              <Link href="/dance-band-event-dj" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Dance Band & Event DJ</Link>
              <Link href="/gallery" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Gallery</Link>
              <Link href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">Contact Us</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium uppercase tracking-wider text-sm mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>
                <a href="tel:8055703117" className="hover:text-primary-foreground transition-colors">
                  (805) 570-3117
                </a>
              </p>
              <p>
                <a
                  href="mailto:radioprophetsevents@gmail.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  radioprophetsevents@gmail.com
                </a>
              </p>
              <p>Santa Barbara, CA</p>
              <p>Serving San Diego to Big Sur</p>
            </div>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Radio Prophets Events. All rights reserved.</p>
          <p>
            Keywords: Wedding Band, Wedding DJ, Jazz Quartet, DJ Sax Duo, Live Music Santa Barbara
          </p>
        </div>
      </div>
    </footer>
  );
}
