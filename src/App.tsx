import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abrir-empresa" element={<AbrirEmpresa />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/conteudos" element={<Conteudos />} />
          <Route path="/conteudos/:slug" element={<BlogPost />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/area-cliente" element={<AreaCliente />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
