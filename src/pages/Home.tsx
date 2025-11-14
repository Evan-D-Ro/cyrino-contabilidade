import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import CounterCard from "../components/CounterCard";

import {
  Building2,
  RefreshCw,
  FileText,
  TrendingUp,
  CheckCircle2,
  Clock,
  Shield,
  Lightbulb,
  ArrowRight,
  Star,
  Check,
  MessageCircle,
  Handshake,
  BarChart3,
  Heart
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import partnershipImage from "@/assets/partnership-new.jpg";
import googleBadge from "@/assets/google-review.webp";

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
      text: "A Cyrino transformou a contabilidade da minha empresa. Profissionalismo e atenção aos detalhes incomparáveis.",
      rating: 5,
      date: "há 1 mês"
    },
    {
      name: "Maria Santos",
      company: "Boutique Elegance",
      text: "Abrir minha empresa foi muito mais fácil do que imaginava. Suporte completo em todas as etapas.",
      rating: 5,
      date: "há 3 semanas"
    },
    {
      name: "Carlos Oliveira",
      company: "Oliveira Transportes",
      text: "A migração da contabilidade foi tranquila e rápida. Recomendo os serviços da Cyrino!",
      rating: 5,
      date: "há 2 semanas"
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
              Clareza que faz sua empresa crescer.
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 animate-fade-in leading-relaxed">
              Aqui, a contabilidade fala a sua língua.
              A gente explica, orienta e cuida dos seus números pra você ter tempo e paz pra focar no que realmente faz sua empresa avançar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
                asChild
              >
                <a
                  href="https://wa.me/551832657176"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <FaWhatsapp className="!w-6 !h-6" />
                  Falar com um contador Cyrino
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary font-semibold text-lg px-8 py-6"
                asChild
              >
                <Link to="/contato">
                  Quero entender meu negócio
                </Link>
              </Button>
            </div>
            <p className="text-white text-sm mt-4 opacity-90">
              Contabilidade sem enrolação, sem “contabilês” e com resultados reais.
            </p>
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
              O que faz a Cyrino ser diferente não é o que a gente faz.<br />
              <span className="text-accent">É como a gente explica o que faz.</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A gente sabe que contabilidade pode parecer complicada — mas não precisa ser.
              Aqui, cada número é explicado, cada decisão é transparente e cada cliente entende o que está acontecendo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {
                icon: MessageCircle,
                title: "Comunicação simples",
                desc: "A gente fala sem “contabilês”. Você entende tudo."
              },
              {
                icon: Handshake,
                title: "Parceria de verdade",
                desc: "Estamos do seu lado, acompanhando cada etapa."
              },
              {
                icon: BarChart3,
                title: "Planejamento com propósito",
                desc: "Cuidamos dos números para você focar no crescimento."
              },
              {
                icon: Heart,
                title: "Cuidado humano",
                desc: "Pessoas atendendo pessoas, com empatia e responsabilidade."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center animate-fade-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 text-primary rounded-xl flex items-center justify-center shadow-inner">
                  <item.icon className="h-8 w-8" />
                </div>

                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Como funciona na prática
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um passo a passo claro, transparente e sem complicação.
            </p>
          </div>

          <div className="relative">
            {/* Linha vertical */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-muted rounded-full"></div>

            <div className="space-y-14">
              {[
                {
                  title: "Primeiro contato",
                  desc: "Você fala sobre seu negócio, suas metas e suas preocupações. A gente escuta de verdade.",
                },
                {
                  title: "Diagnóstico claro",
                  desc: "Avaliamos sua situação e explicamos tudo de forma simples — sem termos técnicos.",
                },
                {
                  title: "Planejamento personalizado",
                  desc: "Criamos uma estratégia ideal para sua empresa pagar o justo, evitar riscos e crescer.",
                },
                {
                  title: "Acompanhamento contínuo",
                  desc: "Você entende cada número. Nós traduzimos tudo para você sem complicar.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className={`
              flex items-start md:items-center gap-6
              ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
            `}
                >
                  {/* Número (mobile fica à esquerda do card) */}
                  <div className="
              flex-shrink-0
              w-10 h-10 flex items-center justify-center
              bg-primary text-white font-bold rounded-lg shadow-md
              md:hidden
            ">
                    {i + 1}
                  </div>

                  {/* Conector + número central no desktop */}
                  <div className="hidden md:flex flex-col items-center w-1/2 relative">
                    <div className="
                flex items-center justify-center
                w-12 h-12 bg-primary text-white rounded-xl font-bold shadow-lg
              ">
                      {i + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="
                bg-muted p-6 rounded-2xl shadow-sm w-full md:w-1/2
                md:mt-0 md:mb-0
              "
                  >
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-10 py-6 text-lg shadow-md" asChild>
              <Link to="/contato">Quero começar com a Cyrino</Link>
            </Button>
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto h-full">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="h-full flex flex-col bg-gradient-to-br from-white to-secondary/5 backdrop-blur-sm border-0 hover-lift animate-slide-up shadow-strong border-t-4 border-secondary/30"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-6 flex flex-col flex-1">
                  {/* Ícone decorativo */}
                  <Check
                    className="h-8 w-8 text-secondary mb-4"
                  />

                  {/* Avaliação */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Texto do depoimento */}
                  <p className="text-foreground/80 mb-6 leading-relaxed flex-1 text-justify">
                    "{testimonial.text}"
                  </p>

                  {/* Autor e selo */}
                  <div className="pt-4 border-t border-secondary/10 mt-auto flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-navy-dark">{testimonial.name}</p>
                      <p className="text-sm text-foreground/60">{testimonial.date}</p>
                    </div>

                    {/* Selo Google Reviews */}
                    <img
                      src={googleBadge}
                      alt="Avaliação Google"
                      className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              A contabilidade só faz sentido quando você entende o que ela está dizendo.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Criamos conteúdos que traduzem o técnico pro prático — e o complicado pro simples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Card className="shadow-lg hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3">🎥 Vídeos rápidos</h3>
                <p className="text-muted-foreground">Explicações simples sobre temas que geram dúvida.</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3">📘 E-books gratuitos</h3>
                <p className="text-muted-foreground">Materiais diretos pra aplicar no dia a dia.</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3">📰 Artigos educativos</h3>
                <p className="text-muted-foreground">Entenda seus impostos, direitos e oportunidades.</p>
              </CardContent>
            </Card>

          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-10 py-6 text-lg shadow-md" asChild>
              <Link to="/conteudos">Aprender com a Cyrino</Link>
            </Button>
          </div>

        </div>
      </section>

      {/* Section - Clareza e Resultados - Fundo Escuro (Com Animação) */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center text-white">

          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Clareza também dá resultado.
          </h2>

          <p className="text-lg text-background/80 mb-12">
            Veja o que conquistamos junto com nossos clientes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <CounterCard end={800} suffix="+" text="empresas atendidas com clareza" />

            {/* Card 2 */}
            <CounterCard end={4} decimals={1} millions suffix=" milhões" text="em impostos economizados com segurança" />

            {/* Card 3 */}
            <CounterCard end={350} millions suffix=" milhões" text="de faturamento gerenciado com transparência" />

          </div>

          <p className="mt-12 text-background/80 max-w-2xl mx-auto leading-relaxed">
            Cada número aqui representa uma história de crescimento, confiança e tranquilidade contábil.
          </p>

        </div>
      </section>


      {/* National Coverage Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">

          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            A Cyrino está presente em todo o Brasil.
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Atendemos empresas de todos os tamanhos e regiões, com o mesmo cuidado, proximidade e clareza.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold text-primary">

            <span className="px-6 py-3 bg-primary/10 rounded-full">São Paulo</span>
            <span className="px-6 py-3 bg-primary/10 rounded-full">Brasília</span>
            <span className="px-6 py-3 bg-primary/10 rounded-full">Belo Horizonte</span>
            <span className="px-6 py-3 bg-primary/10 rounded-full">Campo Grande</span>
            <span className="px-6 py-3 bg-primary/10 rounded-full">E todo o Brasil</span>

          </div>

        </div>
      </section>


      {/* Final Call Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">

          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Entender seus números é o primeiro passo pra crescer com segurança.
          </h2>

          <p className="text-lg opacity-95 mb-10">
            Fale com a Cyrino Contabilidade e descubra como a clareza transforma a forma como você administra e prospera.
          </p>

          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold text-sm lg:text-lg shadow-xl hover:shadow-2xl transition-all"
            asChild
          >
            <a
              href="https://wa.me/551832657176"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors text-center whitespace-normal"            >
              <FaWhatsapp className="!w-6 !h-6 flex-shrink-0" /> {/* Garante que o ícone não encolha */}
              <span className="block">Quero clareza na minha contabilidade</span>
            </a>
          </Button>

        </div>
      </section>

    </div>
  );
};

export default Home;
