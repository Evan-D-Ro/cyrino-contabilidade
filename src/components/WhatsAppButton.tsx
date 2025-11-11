import { MessageCircle } from "lucide-react";
import whatsapp from "@/assets/whatsapp.webp";

const WhatsAppButton = () => {
  const whatsappNumber = "5518999999999"; // Replace with actual number
  const message = encodeURIComponent("Olá! Gostaria de falar com um contador da Cyrino Contabilidade.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Falar no WhatsApp"
    >
      <img src={whatsapp} className="h-8 w-8" />
    </a>
  );
};

export default WhatsAppButton;
