
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/Cart";
import Login from "./pages/Login";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Additional pages for new navigation links
const AboutPage = () => (
  <div className="min-h-screen flex flex-col">
    <div className="flex-grow p-8">
      <h1 className="text-3xl font-bold mb-4">О компании</h1>
      <p>Страница в разработке</p>
    </div>
  </div>
);

const EmptyPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex flex-col">
    <div className="flex-grow p-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p>Страница в разработке</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products/:category/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/promotions" element={<EmptyPage title="Акции и скидки" />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* New routes for additional pages */}
          <Route path="/about" element={<EmptyPage title="О компании" />} />
          <Route path="/guarantees" element={<EmptyPage title="Гарантии" />} />
          <Route path="/privacy" element={<EmptyPage title="Политика конфиденциальности" />} />
          <Route path="/careers" element={<EmptyPage title="Вакансии" />} />
          <Route path="/how-to-order" element={<EmptyPage title="Как заказать" />} />
          <Route path="/payment" element={<EmptyPage title="Оплата" />} />
          <Route path="/delivery" element={<EmptyPage title="Доставка" />} />
          <Route path="/returns" element={<EmptyPage title="Обмен и возврат" />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
