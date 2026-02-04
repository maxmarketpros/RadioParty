import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/20dd418c-3a49-4c8c-8a3c-9a96e5474e2e/IMG_9037.jpg"
                alt="Radio Prophets lead saxophonist performing"
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 flex flex-col items-center justify-center">
              <span className="text-4xl font-serif font-bold">20+</span>
              <span className="text-sm uppercase tracking-wider">Years Experience</span>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Who We Are
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
              Santa Barbara&apos;s Award-Winning Wedding Band
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Radio Prophets is an award-winning Santa Barbara wedding band led by top saxophonist
                Gerry Smith Jr. Recognized by The Knot and WeddingWire as one of the top wedding
                bands in the county, we bring unmatched energy and 5-star entertainment to weddings
                across California.
              </p>
              <p>
                What sets Radio Prophets apart is our exceptional musical versatility. Our
                world-class musicians seamlessly move between elegant jazz quartet sets for
                ceremonies and cocktail hours and high-impact party music for receptions, creating
                the perfect soundtrack for every moment of your wedding day.
              </p>
              <p>
                From timeless classics and Motown to Top 40, funk, pop, and dance hits, we
                effortlessly engage guests of all ages. Partnering with the best DJs in Southern
                California, Radio Prophets delivers an unforgettable soundtrack for your celebration.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <span className="text-3xl font-serif font-bold text-foreground">100+</span>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Years Combined Experience
                </p>
              </div>
              <div>
                <span className="text-3xl font-serif font-bold text-foreground">500+</span>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Events Performed
                </p>
              </div>
            </div>
            <Button asChild className="mt-8 font-medium tracking-wide" size="lg">
              <Link href="#contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
