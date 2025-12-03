import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/office-image.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "A Cyrino", path: "/sobre" },
    { name: "Abrir Empresa", path: "/abrir-empresa" },
    { name: "Serviços", path: "/solucoes" },
    { name: "Conteúdos", path: "/conteudos" },
    { name: "Atendimento", path: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logoImage}
              alt="Cyrino Contabilidade"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - MUDANÇA AQUI: trocado lg:flex para xl:flex */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${isActive(link.path)
                    ? "text-primary"
                    : "text-foreground"
                  } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${isActive(link.path) ? "after:scale-x-100" : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - MUDANÇA AQUI: trocado lg:flex para xl:flex */}
          <div className="hidden xl:flex items-center gap-3">
            <Button
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href="https://wa.me/551832657176"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultoria Gratuita
              </a>
            </Button>
            <Button asChild>
              <Link to="/area-cliente">Portal do Cliente</Link>
            </Button>
          </div>

          {/* Mobile Menu Button - MUDANÇA AQUI: trocado lg:hidden para xl:hidden */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - MUDANÇA AQUI: trocado lg:hidden para xl:hidden */}
        {isOpen && (
          <div className="xl:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2 rounded-md transition-colors ${isActive(link.path)
                      ? "bg-primary text-primary-foreground font-medium"
                      : "hover:bg-muted"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-2">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a
                    href="https://wa.me/551832657176"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultoria Gratuita
                  </a>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/area-cliente" onClick={() => setIsOpen(false)}>
                    Portal do Cliente
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;