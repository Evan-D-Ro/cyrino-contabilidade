import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Conteudos = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-orange-500 to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Conteúdos e Dicas Contábeis
            </h1>
            <p className="text-lg md:text-xl opacity-95 leading-relaxed">
              Informações valiosas para ajudar você a entender melhor o mundo da contabilidade e tomar decisões mais inteligentes.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto overflow-hidden border-2 border-primary shadow-2xl hover:shadow-glow transition-all">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              <div className={`md:col-span-2 bg-gradient-to-br ${blogPosts[0].color} p-12 flex items-center justify-center`}>
                {(() => {
                  const IconComponent = blogPosts[0].icon;
                  return <IconComponent className="h-32 w-32 text-white opacity-90" />;
                })()}
              </div>
              <CardContent className="md:col-span-3 p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Destaque
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-foreground">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} className="text-primary" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} className="text-primary" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Button className="w-fit group" asChild>
                  <Link to={`/conteudos/${blogPosts[0].slug}`}>
                    Ler Artigo Completo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post, index) => {
                const PostIcon = post.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 border hover:border-primary overflow-hidden animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className={`h-2 bg-gradient-to-r ${post.color}`}></div>
                    <CardContent className="p-6">
                      <div className={`mb-4 p-3 bg-gradient-to-br ${post.color} rounded-lg w-fit`}>
                        <PostIcon className="h-8 w-8 text-white" />
                      </div>
                      <div className="mb-3">
                        <span className="inline-block px-2 py-1 bg-muted text-xs font-medium rounded">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} className="text-primary" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} className="text-primary" />
                          {post.readTime}
                        </span>
                      </div>
                      <Button variant="ghost" className="w-full group/btn hover:bg-primary hover:text-primary-foreground" asChild>
                        <Link to={`/conteudos/${post.slug}`}>
                          Ler Mais
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-2 border-primary">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <FileText className="h-8 w-8 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-foreground">
                  Receba um E-book Exclusivo
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Preencha o formulário abaixo e receba gratuitamente em seu e-mail nosso e-book com dicas contábeis exclusivas para o seu negócio.
                </p>
              </div>

              <form className="flex flex-col gap-4 max-w-md mx-auto text-left">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 font-semibold text-lg mt-4"
                  type="submit"
                >
                  Receber E-book
                </Button>
              </form>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                Seus dados estão seguros. O e-book será enviado automaticamente para o e-mail informado.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground border-b-4 border-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Precisa de Ajuda Especializada?
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Nossos contadores estão prontos para oferecer soluções personalizadas para o seu negócio.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 font-semibold text-lg px-8 py-6"
              asChild
            >
              <Link to="/contato">
                Falar com um Contador
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conteudos;
