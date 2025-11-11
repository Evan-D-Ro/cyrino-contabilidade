import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Building2,
  RefreshCw,
  FileText,
  TrendingUp,
  CheckCircle2,
  Clock,
  Shield,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import partnershipImage from "@/assets/partnership-new.jpg";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Abertura de Empresa",
      description: "Processo completo e personalizado para iniciar seu negócio com segurança e agilidade.",
      link: "/abrir-empresa"
    },
    {
      icon: RefreshCw,
      title: "Migração de Contabilidade",
      description: "Transição rápida e sem complicações. Economize tempo e dinheiro no processo.",
      link: "/solucoes"
    },
    {
      icon: FileText,
      title: "Declaração IRPF",
      description: "Da coleta de documentos à entrega, com maximização de deduções.",
      link: "/solucoes"
    },
    {
      icon: TrendingUp,
      title: "Assessoria Fiscal",
      description: "Planejamento tributário estratégico para reduzir custos e aumentar competitividade.",
      link: "/solucoes"
    }
  ];

  const differentials = [
    {
      icon: CheckCircle2,
      title: "Atendimento Personalizado",
      description: "Cada cliente tem necessidades únicas. Oferecemos soluções sob medida."
    },
    {
      icon: Clock,
      title: "Agilidade e Eficiência",
      description: "Processos digitalizados para respostas rápidas e serviços ágeis."
    },
    {
      icon: Shield,
      title: "Segurança e Conformidade",
      description: "Mantenha sua empresa em dia com todas as obrigações fiscais."
    },
    {
      icon: Lightbulb,
      title: "Consultoria Estratégica",
      description: "Transforme contabilidade em vantagem competitiva para seu negócio."
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      company: "Tech Solutions",
      text: "A Cyrino transformou a contabilidade da minha empresa. Profissionalismo e atenção aos detalhes incomparáveis."
    },
    {
      name: "Maria Santos",
      company: "Boutique Elegance",
      text: "Abrir minha empresa foi muito mais fácil do que imaginava. Suporte completo em todas as etapas."
    },
    {
      name: "Carlos Oliveira",
      company: "Oliveira Transportes",
      text: "A migração da contabilidade foi tranquila e rápida. Recomendo os serviços da Cyrino!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(255, 96, 55, 0.95), rgba(13, 39, 80, 0.95)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up leading-tight">
              Transforme sua contabilidade em vantagem competitiva
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 animate-fade-in leading-relaxed">
              Descubra por que empresas em todo o Brasil confiam na Cyrino Contabilidade para aumentar sua lucratividade e competitividade no mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <a href="https://wa.me/5518999999999" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold text-lg px-8 py-6"
                asChild
              >
                <Link to="/abrir-empresa">
                  Abrir Empresa Agora
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Nossos Principais Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções contábeis completas para o crescimento do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Saiba mais <ArrowRight size={16} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Por Que Escolher a Cyrino?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diferenciais que fazem a diferença no seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-4 bg-primary rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-lg">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={partnershipImage}
                alt="Parceria de confiança"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground text-center">
                Conte com quem entende do seu negócio
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-justify">
                Com anos de experiência no mercado, a Cyrino Contabilidade oferece serviços personalizados que atendem às necessidades específicas de cada cliente.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-justify">
                Nossa missão é simplificar a gestão contábil e fiscal do seu negócio, permitindo que você foque no que realmente importa: o crescimento da sua empresa.
              </p>
              <Button size="lg" asChild>
                <Link to="/sobre">
                  Conheça Nossa História
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              O Que Dizem Nossos Clientes
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Depoimentos de quem confia na Cyrino Contabilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Toda grande jornada começa com o primeiro passo
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Entre em contato agora e descubra como podemos ajudar seu negócio a crescer
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-xl"
            asChild
          >
            <Link to="/contato">
              Fale Conosco Agora
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
