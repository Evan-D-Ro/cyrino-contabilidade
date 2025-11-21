import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Agradecimento = () => {
    return (
        <div className="min-h-screen pt-20 bg-background">
            {/* Hero */}
            <section className="bg-gradient-to-br from-primary via-orange-500 to-secondary text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                            Obrigado!
                        </h1>
                        <p className="text-lg md:text-xl opacity-95 leading-relaxed">
                            Seu e-book está a caminho do seu whatsapp.
                        </p>
                    </div>
                </div>
            </section>

            {/* Conteúdo */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <Card className="max-w-2xl mx-auto border-2 border-primary shadow-2xl animate-fade-in">
                        <CardContent className="p-10 text-center">
                            <div className="flex justify-center mb-6">
                                <div className="bg-primary rounded-full p-6 shadow-lg">
                                    <CheckCircle className="h-16 w-16 text-primary-foreground" />
                                </div>
                            </div>

                            <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
                                Seu E-book Foi Enviado!
                            </h2>

                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Verifique por gentileza seu whatsapp.
                            </p>

                            <p className="text-sm text-muted-foreground">
                                Se não receber dentro de alguns minutos, entre em contato com
                                nossa equipe de suporte.
                            </p>

                            <Button
                                size="lg"
                                className="mt-8 bg-primary hover:bg-primary/90"
                                asChild
                            >
                                <Link to="/conteudos">
                                    Ver Mais Conteúdos
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

        </div>
    );
};

export default Agradecimento;
