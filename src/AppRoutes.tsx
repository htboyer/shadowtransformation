import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import RouteHead from "@/components/site/RouteHead";
import { ARTICLES } from "@/content/articles";
import { SERVICES } from "@/content/services";
import ArticlePage from "./pages/ArticlePage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegardsPage from "./pages/RegardsPage";
import ServicePage from "./pages/ServicePage";
import ToolsPage from "./pages/ToolsPage";
import BidCrossCheckPage from "./pages/BidCrossCheckPage";
import BidCrossCheckTermsPage from "./pages/BidCrossCheckTermsPage";
import { BIDCROSSCHECK_CGV_PATH } from "@/content/bidcrosscheck-terms";
import { BIDCROSSCHECK_PATH, TOOLS_PATH } from "@/content/tools";

/** Arbre partagé par le rendu navigateur (BrowserRouter) et le pré-rendu (StaticRouter). */
const AppRoutes = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <RouteHead />
    <Routes>
      <Route path="/" element={<Index />} />
      {SERVICES.map((p) => (
        <Route key={p.path} path={p.path} element={<ServicePage page={p} />} />
      ))}
      <Route path="/regards/" element={<RegardsPage />} />
      <Route path={TOOLS_PATH} element={<ToolsPage />} />
      <Route path={BIDCROSSCHECK_PATH} element={<BidCrossCheckPage />} />
      <Route path={BIDCROSSCHECK_CGV_PATH} element={<BidCrossCheckTermsPage />} />
      {ARTICLES.map((a) => (
        <Route key={a.path} path={a.path} element={<ArticlePage article={a} />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </TooltipProvider>
);

export default AppRoutes;
