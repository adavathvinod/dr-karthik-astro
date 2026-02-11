import { Clock, MapPin, Phone } from "lucide-react";

export function ClinicTimings() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Timings */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 mb-5">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Clinic Timings</h3>
            <div className="space-y-2 text-primary-foreground/90">
              <div>
                <p className="font-medium">Monday - Saturday</p>
                <p className="text-sm">10:00 AM - 2:00 PM</p>
                <p className="text-sm">5:00 PM - 9:00 PM</p>
              </div>
              <div className="pt-2">
                <p className="font-medium">Sunday</p>
                <p className="text-sm">11:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 mb-5">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Clinic Location</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Rd Number 25, Alkapur Township,<br />
              Manikonda, Hyderabad,<br />
              Telangana 500089
            </p>
            <a
              href="https://maps.app.goo.gl/LmtV59fiUvQGa57n7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-medium underline underline-offset-4 hover:no-underline"
            >
              Get Directions →
            </a>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-foreground/10 mb-5">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+916281894631"
                className="block text-2xl font-bold hover:underline"
              >
                062818 94631
              </a>
              <p className="text-primary-foreground/90 text-sm">
                Call or WhatsApp for appointments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
