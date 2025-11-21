import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // ADICIONE useLocation AQUI
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import AbrirEmpresa from "./pages/AbrirEmpresa";
import Solucoes from "./pages/Solucoes";
import Conteudos from "./pages/Conteudos";
import BlogPost from "./pages/BlogPost";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import AreaCliente from "./pages/AreaCliente";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import RedirectToWhatsApp from "./pages/RedirectToWhatsapp";
import Arquivos from "./pages/Arquivos";
import Agradecimento from "./pages/Agradecimento";
const queryClient = new QueryClient();

// --- NOVO COMPONENTE DE LAYOUT ---
// Ele serve para verificar a rota atual e decidir se mostra Nav/Footer
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Verifica se a rota atual é '/arquivos'
  const isArquivosPage = location.pathname === "/arquivos";

  return (
    <>
      {/* Só mostra Navbar se NÃO for a página de arquivos */}
      {!isArquivosPage && <Navbar />}

      {children}

      {/* Só mostra Footer e WhatsApp se NÃO for a página de arquivos */}
      {!isArquivosPage && <Footer />}
      {!isArquivosPage && <WhatsAppButton />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        {/* Envolvemos as Rotas com o nosso Layout condicional */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abrir-empresa" element={<AbrirEmpresa />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/conteudos" element={<Conteudos />} />
            <Route path="/conteudos/:slug" element={<BlogPost />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/area-cliente" element={<AreaCliente />} />
            <Route path="/arquivos" element={<Arquivos />} />
            <Route path="/agradecimento" element={<Agradecimento />} />

            <Route
              path="/zap"
              element={
                <RedirectToWhatsApp />
              }
            />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;