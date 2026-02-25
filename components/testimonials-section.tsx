"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Radio Prophets made our wedding absolutely magical! They read the crowd perfectly and had everyone dancing all night long. Gerry's saxophone solos were the highlight of the evening.",
    author: "Marina & Trent",
    role: "Wedding at La Cumbre Country Club",
    rating: 5,
  },
  {
    quote:
      "From the ceremony to the last dance, Radio Prophets exceeded every expectation. Their professionalism, talent, and ability to engage guests of all ages made our day unforgettable.",
    author: "Sarah & Michael",
    role: "Wedding in Paso Robles",
    rating: 5,
  },
  {
    quote:
      "We hired Radio Prophets for our corporate gala and they were phenomenal. The jazz quartet during dinner was elegant, and the band brought incredible energy to the dance floor.",
    author: "Jennifer Thompson",
    role: "Corporate Event Planner",
    rating: 5,
  },
  {
    quote:
      "Gerry and his team are true professionals. They worked closely with us to customize the playlist and made our daughter's quinceañera a night to remember.",
    author: "The Rodriguez Family",
    role: "Private Celebration",
    rating: 5,
  },
];

const reviewImages = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/db718b8a-7959-48cf-9a1f-9f6d6f4f4d70/74AF57E3-0A31-41B4-ACBF-0FB9DEAFA1EA.jpg",
    alt: "Five-star wedding band review",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/2604c0a0-8b41-46df-a0e7-1a4f46dd9e31/IMG_3030.jpg",
    alt: "Customer review praising professionalism",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/6232e5faff349d7ad50b41cd/9dfa264c-ec63-410e-b532-0ec7787614e4/IMG_3029.jpg",
    alt: "Social media comments praising music",
  },
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70 mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 text-balance">
            &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div>
            <p className="font-medium text-lg">{testimonials[currentTestimonial].author}</p>
            <p className="text-primary-foreground/70">{testimonials[currentTestimonial].role}</p>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              type="button"
              onClick={prevTestimonial}
              className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${index === currentTestimonial
                    ? "w-8 bg-primary-foreground"
                    : "w-2 bg-primary-foreground/30"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={nextTestimonial}
              className="p-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Awards & Review Screenshots */}
        <div className="col-span-2 md:col-span-1 flex justify-center items-center gap-4 w-full md:col-start-2">
          <Link href="https://www.theknot.com/marketplace/radio-prophets-santa-barbara-ca-2047418" target="_blank" rel="noopener noreferrer">
            <Image
              src="/AWARD1.png"
              alt="The Knot Best of Weddings"
              width={100}
              height={100}
              className="h-20 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
          <Link href="https://www.weddingwire.com/biz/radio-prophets-santa-barbara/d9ecce3deee27ac3.html" target="_blank" rel="noopener noreferrer">
            <Image
              src="/award2.png"
              alt="WeddingWire Couples' Choice Awards"
              width={100}
              height={100}
              className="h-20 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
