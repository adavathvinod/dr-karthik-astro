import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  { image: "/hero-slide-1.jpg", alt: "Doctor consulting patient" },
  { image: "/hero-slide-2.jpg", alt: "Modern clinic interior" },
  { image: "/hero-slide-3.jpg", alt: "Orthopaedic examination" },
  { image: "/hero-slide-4.jpg", alt: "Professional medical team" },
];

const WHATSAPP_LINK = `https://wa.me/916281894631?text=${encodeURIComponent("Hello, I would like to book an appointment with Dr. Karthik Manchala.")}`;

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="section-container">
          <div className="max-w-2xl text-white">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in-up">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9+ Google Rated Clinic in Hyderabad</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Dr. Karthik Manchala
            </h1>
            <p className="text-xl md:text-2xl font-medium text-primary mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Orthopaedic, Joint Replacement & Arthroscopic Surgeon
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Trusted Orthopaedic Care with 12+ Years of Experience
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 text-base">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Button>
              </a>
              <a href="tel:+916281894631">
                <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 text-base">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <a
                href="https://maps.app.goo.gl/LmtV59fiUvQGa57n7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2 text-base">
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
