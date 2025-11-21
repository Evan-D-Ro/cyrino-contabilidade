import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar, PlayCircle, Youtube } from "lucide-react";
import Preloader from "@/components/Preloader"; // Mantendo seu preloader
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const YoutubeVideos = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    // 👇 SUBSTITUA PELO ID DO CANAL DA CYRINO CONTABILIDADE
    const CHANNEL_ID = "UCSlgpIEgDUoe8g6EvRfyc1Q";

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);

            try {
                // URL mágica do RSS do YouTube
                const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

                // Usando o mesmo conversor que você já usa (rss2json)
                const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
                const data = await res.json();

                if (data.items) {
                    const formattedVideos = data.items.slice(0, 6).map((item) => {
                        // O RSS do Youtube não manda a thumbnail limpa, mas manda o link do video.
                        // Extraímos o ID do video pelo link para gerar a URL da imagem.
                        const videoId = item.guid.split(":")[2];

                        return {
                            title: item.title,
                            link: item.link,
                            date: new Date(item.pubDate).toLocaleDateString("pt-BR"),
                            // Capa de alta qualidade do youtube
                            thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
                        };
                    });
                    setVideos(formattedVideos);
                }

                setTimeout(() => setLoading(false), 500);
            } catch (err) {
                console.error("Erro ao buscar vídeos:", err);
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    if (loading) {
        return (
            <section className="pt-24 pb-12 bg-background">
                <div className="flex justify-center items-center">
                    <Preloader />
                </div>
            </section>
        );
    }

    if (!loading && videos.length === 0) return null;

    return (
        <section id="videos" className=" pb-12 bg-slate-50"> {/* Mudei levemente o fundo para destacar */}
            <div className="container mx-auto px-4">

                <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wide mb-4">
                        <Youtube size={14} />
                        Youtube
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">Acompanhe a Cyrino no Instagram e fique por dentro de dicas para empresas e<br /> outras novidades</h3>
                </div>

                {/* Grid de Vídeos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {videos.map((video, index) => (
                        <Card
                            key={index}
                            className={`
    group cursor-pointer overflow-hidden border-0 shadow-medium hover:shadow-strong
    bg-white
    animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards
  `}
                            style={{ animationDelay: `${index * 0.15}s` }}
                            onClick={() => window.open(video.link, "_blank")}
                        >
                            {/* Área da Thumbnail com Overlay de Play */}
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                    <PlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                                </div>
                            </div>

                            <CardHeader className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center text-sm text-foreground/60">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        {video.date}
                                    </div>
                                    <ExternalLink className="h-4 w-4 text-foreground/40 group-hover:text-[#FF0000] transition-colors" />
                                </div>

                                <CardTitle className="text-lg font-bold text-navy-dark group-hover:text-[#FF0000] transition-colors line-clamp-2 leading-tight">
                                    {video.title}
                                </CardTitle>
                            </CardHeader>

                            {/* Se quiser exibir descrição curta, use CardContent aqui, 
                  mas para vídeos geralmente só o título e thumb bastam */}
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button size="lg" className="px-10 py-6 text-lg shadow-md" asChild>
                        <Link to={`https://www.youtube.com/channel/${CHANNEL_ID}`} className="flex items-center gap-2">
                            Ver canal completo
                            <ArrowRight size={20} />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default YoutubeVideos;