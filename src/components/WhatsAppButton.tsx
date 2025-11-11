import { MessageCircle } from "lucide-react";

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
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
