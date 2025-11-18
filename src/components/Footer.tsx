import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import logoImage from "@/assets/office-image.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logoImage} 
              alt="Cyrino Contabilidade" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm opacity-90">
              A Cyrino Contabilidade nasceu pra simplificar o que é técnico e aproximar o que é humano.
Aqui, contabilidade é explicada com clareza, feita com cuidado e guiada por propósito.

            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              
              <li>
                <Link to="/#" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/solucoes" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/conteudos" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">
                  Conteúdos
                </Link>
              </li>
              
              <li>
                <Link to="/contato" className="text-sm hover:text-primary transition-colors opacity-90 hover:opacity-100">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Abertura de Empresa</li>
              <li>Migração de Contabilidade</li>
              <li>Declaração IRPF</li>
              <li>Migrar de MEI para ME</li>
              <li>Assessoria Fiscal</li>
              <li>Consultoria Financeira</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <span className="opacity-90">
                  Rua Expedicionário Brasileiro, 350<br />
                  Sala 6, Centro<br />
                  Rancharia - SP, CEP 19600-007
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <a href="tel:+551832657176" className="opacity-90 hover:text-primary transition-colors">
                  (18) 3265-7176
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <a href="mailto:contato@cyrinocontabilidade.com.br" className="opacity-90 hover:text-primary transition-colors">
                  contato@cyrinocontabilidade.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="flex-shrink-0 mt-0.5 text-primary" />
                <span className="opacity-90">
                  Segunda-Feira a Sexta-Feira<br />
                  Manhã: 8h às 11h<br />
                  Tarde: 13h às 17h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
            <p>
              © {currentYear} Cyrino Contabilidade. Todos os direitos reservados.
            </p>
            <p>
              CNPJ: 26.700.412/0001-28 | CRC 1SP 289664 | CRC 2SP038081
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
