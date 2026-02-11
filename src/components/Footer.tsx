import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Map Section */}
      <div className="w-full h-64 md:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4652070688667!2d78.36527617591044!3d17.389448302744295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb951072577dc3%3A0x960fb115d604964a!2sDr.%20Karthik%20Manchala%20Ortho%20Clinic!5e0!3m2!1sen!2sin!4v1770570653779!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dr. Karthik Manchala Ortho Clinic Location"
        />
      </div>

      {/* Footer Content */}
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="KM Ortho Clinic" className="h-12 w-auto" />
              <div>
                <p className="font-semibold text-lg">Dr. Karthik Manchala</p>
                <p className="text-sm text-background/70">Orthopaedic, Joint Replacement & Arthroscopic Surgeon</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Trusted orthopaedic care with 12+ years of experience. Specializing in joint replacements, 
              fracture fixation, and sports injuries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Doctor", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Cases & Results", path: "/cases" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Timings */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Clinic Timings</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Monday - Saturday</p>
                  <p className="text-background/70">10:00 AM - 2:00 PM</p>
                  <p className="text-background/70">5:00 PM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-background/70">11:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70">
                  Rd Number 25, Alkapur Township,<br />
                  Manikonda, Hyderabad,<br />
                  Telangana 500089
                </span>
              </li>
              <li>
                <a href="tel:+916281894631" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  +91 62818 94631
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/916281894631`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Dr. Karthik Manchala Ortho Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

