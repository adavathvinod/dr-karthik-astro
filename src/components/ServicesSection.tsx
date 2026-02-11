import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Knee & Hip Arthritis Treatment",
    description: "Comprehensive care for joint pain and arthritis using advanced treatment methods to restore mobility and reduce discomfort.",
    image: "/service-knee-hip.jpg",
  },
  {
    title: "Joint Replacement Surgery",
    description: "Expert knee and hip replacement surgeries using modern techniques for faster recovery and lasting results.",
    image: "/service-joint-replacement.jpg",
  },
  {
    title: "Fracture Fixation",
    description: "Advanced surgical and non-surgical treatment for all types of bone fractures with precision and care.",
    image: "/service-fracture.jpg",
  },
  {
    title: "Arthroscopy (Key-hole Surgery)",
    description: "Minimally invasive procedures for joint problems with smaller incisions, less pain, and quicker recovery.",
    image: "/service-arthroscopy.jpg",
  },
  {
    title: "Ligament Injuries",
    description: "Specialized treatment for ACL, PCL, and other ligament injuries to restore joint stability and function.",
    image: "/service-ligament.jpg",
  },
  {
    title: "Back Pain Management",
    description: "Comprehensive diagnosis and treatment of spine-related issues including disc problems and chronic back pain.",
    image: "/service-back-pain.jpg",
  },
  // {
  //   title: "Shoulder & Sports Injuries",
  //   description: "Expert care for rotator cuff injuries, dislocations, and sports-related shoulder problems.",
  //   image: "/service-shoulder.jpg",
  // },
];

const WHATSAPP_LINK = `https://wa.me/916281894631?text=${encodeURIComponent("Hello, I would like to book an appointment with Dr. Karthik Manchala.")}`;

interface ServicesSectionProps {
  showAll?: boolean;
}

export function ServicesSection({ showAll = false }: ServicesSectionProps) {
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        {/* <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Specializations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Treatments & Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive orthopaedic care using advanced techniques for effective treatment and faster recovery.
          </p>
        </div> */}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedServices.map((service, index) => (
            <article
              key={index}
              className="service-card group"
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    Book via WhatsApp
                  </Button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
