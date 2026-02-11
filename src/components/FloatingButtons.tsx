import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "6281894631";
const WHATSAPP_MESSAGE = encodeURIComponent("Hello, I would like to book an appointment with Dr. Karthik Manchala.");

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button bottom-24 right-4 sm:right-6 w-14 h-14 flex items-center justify-center bg-[#25D366] hover:bg-[#20BA5A]"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:+91${PHONE_NUMBER}`}
        className="floating-button bottom-6 right-4 sm:right-6 w-14 h-14 flex items-center justify-center bg-primary hover:bg-primary/90"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </>
  );
}
