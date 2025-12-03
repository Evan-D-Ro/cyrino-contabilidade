import { Facebook, Instagram, Youtube, Phone } from "lucide-react";
import cyrinoProfile from "@/assets/rodrigo-cyrino.jpg";

const ProfileHeader = () => {
    return (
        <div className=" px-4 text-center relative z-10">
            <div className="inline-block mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/30 shadow-card-hover mx-auto">
                    <img
                        src={cyrinoProfile}
                        alt="Cyrino Contabilidade"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Cyrino Contabilidade
            </h1>

            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto px-4">
                Ajudamos empreendedores a alcançarem os melhores resultados de forma estratégica.
            </p>

            <div className="flex justify-center gap-4 mb-8">
                <a
                    href="https://www.facebook.com/cyrinocontabilidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                    aria-label="Facebook"
                >
                    <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                    href="https://www.instagram.com/cyrinocontabilidade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                    aria-label="Instagram"
                >
                    <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                    href="https://www.youtube.com/@CyrinoContabilidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                    aria-label="YouTube"
                >
                    <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                    href="https://wa.me/551832657176"
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                    aria-label="Telefone"
                >
                    <Phone className="w-5 h-5 text-white" />
                </a>
            </div>
        </div>
    );
};

export default ProfileHeader;
