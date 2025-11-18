import logowhatsapp from "@/assets/WhatsApp.png";

const WhatsAppButton = () => {
  const whatsappNumber = "551832657176";
  const message = encodeURIComponent("Olá! Gostaria de falar com um contador da Cyrino Contabilidade.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-transform duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <img
        src={logowhatsapp}
        alt="WhatsApp"
        className="w-16 h-16 object-contain drop-shadow-lg"
      />
    </a>
  );
};

export default WhatsAppButton;
