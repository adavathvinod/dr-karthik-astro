import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Cases", path: "/cases" },
  { name: "Blog", path: "/blog/"},
  { name: "Contact", path: "/contact" },
];

const serviceSubLinks = [
  { name: "Knee Replacement in Manikonda", path: "/knee-replacement-manikonda" },
  { name: "Hip Replacement in Manikonda", path: "/hip-replacement-manikonda" },
  { name: "Arthroscopy in Manikonda", path: "/arthroscopy-manikonda" },
  { name: "Fracture Treatment in Manikonda", path: "/fracture-treatment-manikonda" },
  { name: "Ligament Injuries", path: "/sports-injury-treatment-manikonda" },
  { name: "ACL Surgery in Hyderabad", path: "/acl-surgery-hyderabad" },
];

interface HeaderProps {
  currentPath?: string;
}

export function Header({ currentPath = "/" }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(
    currentPath === "/services" || serviceSubLinks.some((link) => link.path === currentPath)
  );

  const isServicesActive =
    currentPath === "/services" || serviceSubLinks.some((link) => link.path === currentPath);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="KM Ortho Clinic" className="h-10 md:h-12 w-auto" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-foreground leading-tight">Dr. Karthik Manchala</p>
              <p className="text-xs text-muted-foreground">Orthopaedic, Joint Replacement & Arthroscopic Surgeon</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.path === "/services") {
                return (
                  <div key={link.path} className="relative group">
                    <a
                      href={link.path}
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                        isServicesActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </a>

                    <div className="absolute left-0 top-full hidden min-w-72 pt-2 group-hover:block group-focus-within:block z-50">
                      <div className="rounded-xl border border-border bg-card p-2 shadow-lg">
                        <a
                          href="/services"
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            currentPath === "/services"
                              ? "bg-secondary text-primary"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          All Services
                        </a>
                        {serviceSubLinks.map((service) => (
                          <a
                            key={service.path}
                            href={service.path}
                            className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                              currentPath === service.path
                                ? "bg-secondary text-primary"
                                : "text-foreground hover:bg-muted"
                            }`}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.path}
                  href={link.path}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    !link.external && currentPath === link.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+916281894631">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a
              href={`https://wa.me/916281894631?text=${encodeURIComponent("Hello, I would like to book an appointment with Dr. Karthik Manchala.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Book Appointment
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                if (link.path === "/services") {
                  return (
                    <div key={link.path} className="px-2">
                      <button
                        type="button"
                        onClick={() => setIsServicesOpen((prev) => !prev)}
                        className={`w-full flex items-center justify-between px-2 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isServicesActive
                            ? "bg-secondary text-primary"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                        aria-expanded={isServicesOpen}
                        aria-controls="mobile-services-submenu"
                      >
                        <span>Services</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isServicesOpen && (
                        <div id="mobile-services-submenu" className="ml-3 mt-1 flex flex-col gap-1">
                          <a
                            href="/services"
                            onClick={() => setIsOpen(false)}
                            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                              currentPath === "/services"
                                ? "bg-secondary text-primary"
                                : "text-muted-foreground hover:bg-muted"
                            }`}
                          >
                            All Services
                          </a>
                          {serviceSubLinks.map((service) => (
                            <a
                              key={service.path}
                              href={service.path}
                              onClick={() => setIsOpen(false)}
                              className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                                currentPath === service.path
                                  ? "bg-secondary text-primary"
                                  : "text-muted-foreground hover:bg-muted"
                              }`}
                            >
                              {service.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      !link.external && currentPath === link.path
                        ? "bg-secondary text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="flex gap-2 mt-4 px-4">
                <a href="tel:+916281894631" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    <Phone className="w-4 h-4" />
                    Call
                  </Button>
                </a>
                <a
                  href={`https://wa.me/916281894631?text=${encodeURIComponent("Hello, I would like to book an appointment with Dr. Karthik Manchala.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                    Book Now
                  </Button>
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
