import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import Home from "@/pages/Home";
import About from "@/pages/About";
import OurCompanies from "@/pages/OurCompanies";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import CompanyPage from "@/pages/CompanyPage";
import { useAnimations } from "@/hooks/useAnimations";

const queryClient = new QueryClient();

// Inner component so hooks can access router context
const AppInner = () => {
  const location = useLocation();
  useAnimations();

  return (
    <>
      {/* Scroll progress bar */}
      <div id="scroll-progress" aria-hidden="true" />

      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/companies" element={<OurCompanies />} />
            <Route path="/companies/:id" element={<CompanyPage />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
        <BackToTop />
        <CookieBanner />
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
