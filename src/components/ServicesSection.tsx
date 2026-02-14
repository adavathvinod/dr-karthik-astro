import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Knee & Hip Arthritis Treatment",
    description: "Comprehensive care for joint pain and arthritis using advanced treatment methods.",
    image: "/service-knee-hip.jpg",
    link: "/knee-replacement-manikonda",
  },
  {
    title: "Joint Replacement Surgery",
    description: "Expert knee and hip replacement surgeries using modern techniques.",
    image: "/service-joint-replacement.jpg",
    link: "/knee-replacement-manikonda",
  },
  {
    title: "Fracture Fixation",
    description: "Advanced treatment for all types of bone fractures.",
    image: "/service-fracture.jpg",
    link: "/fracture-treatment-manikonda",
  },
  {
    title: "Arthroscopy (Key-hole Surgery)",
    description: "Minimally invasive joint procedures with faster recovery.",
    image: "/service-arthroscopy.jpg",
    link: "/arthroscopy-manikonda",
  },
  {
    title: "Ligament Injuries",
    description: "Specialized treatment for ACL and ligament injuries.",
    image: "/service-ligament.jpg",
    link: "/sports-injury-treatment-manikonda",
  },
  {
    title: "Back Pain Management",
    description: "Comprehensive diagnosis and treatment of spine-related issues.",
    image: "/service-back-pain.jpg",
    link: null, // No SEO page exists
  },
];

const WHATSAPP_LINK = `https://wa.me/916281894631?text=${encodeURIComponent(
  "Hello, I would like to book an appointment with Dr. Karthik Manchala."
)}`;

interface ServicesSectionProps {
  showAll?: boolean;
}

export function ServicesSection({ showAll = false }: ServicesSectionProps) {
  const displayedServices = showAll ? services : services.slice(0, 6);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedServices.map((service, index) => {
            const CardContent = (
              <article className="service-card group h-full">
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} in Manikonda`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Book via WhatsApp
                    </Button>
                  </a>
                </div>
              </article>
            );

            return service.link ? (
              <a
                key={index}
                href={service.link}
                className="block hover:no-underline"
              >
                {CardContent}
              </a>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
