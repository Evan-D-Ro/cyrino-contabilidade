import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, FileText, Download, CreditCard, Calendar, HelpCircle } from "lucide-react";

const AreaCliente = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-orange-500 to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Lock className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Área do Cliente
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed">
              Acesse seus documentos, boletos e informações contábeis de forma rápida e segura.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary mb-12">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Portal do Cliente Cyrino Contabilidade
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nossa plataforma exclusiva permite que você acesse todos os documentos e serviços contábeis em um só lugar, com total segurança e praticidade.
                </p>
                <Button
                  size="lg"
                  className="font-semibold text-lg px-8 py-6"
                  asChild
                >
                  <a
                    href="https://drive.cyrinocontabilidade.com.br/index.php/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Acessar Portal do Cliente
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Se você ainda não possui credenciais de acesso, entre em contato conosco.
                </p>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="mb-12">
              <h3 className="font-heading text-2xl font-bold mb-8 text-center text-foreground">
                O Que Você Pode Fazer na Área do Cliente
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: FileText,
                    title: "Documentos Contábeis",
                    description: "Acesse balancetes, demonstrativos e relatórios"
                  },
                  {
                    icon: Download,
                    title: "Download de Arquivos",
                    description: "Baixe guias, certidões e comprovantes"
                  },
                  {
                    icon: CreditCard,
                    title: "Boletos e Pagamentos",
                    description: "Visualize e emita segunda via de boletos"
                  },
                  {
                    icon: Calendar,
                    title: "Agenda de Obrigações",
                    description: "Acompanhe prazos e vencimentos importantes"
                  },
                  {
                    icon: FileText,
                    title: "Declarações e Guias",
                    description: "Acesse suas declarações fiscais e tributárias"
                  },
                  {
                    icon: HelpCircle,
                    title: "Suporte Online",
                    description: "Tire dúvidas direto com nossa equipe"
                  }
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-heading font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <Card className="bg-muted">
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-bold mb-4 text-center text-foreground">
                  Precisa de Ajuda para Acessar?
                </h3>
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  Se você esqueceu sua senha, não consegue acessar o portal ou é um novo cliente, nossa equipe está pronta para ajudar.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="https://wa.me/5518999999999" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="tel:+551832657176">
                      Ligar: (18) 3265-7176
                    </a>
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href="mailto:contato@cyrinocontabilidade.com.br">
                      E-mail
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-12 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Lock className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="font-heading text-xl font-bold mb-3">
              Segurança e Privacidade
            </h3>
            <p className="opacity-90 leading-relaxed">
              Todos os dados são protegidos por criptografia SSL e armazenados em servidores seguros. Suas informações estão completamente protegidas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaCliente;
