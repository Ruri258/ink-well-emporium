
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const newsItems = [
  {
    id: 1,
    title: "Новая коллекция канцелярии для школьников",
    date: "05.04.2025",
    excerpt: "Мы рады представить вам новую коллекцию школьных принадлежностей. Яркие тетради, удобные ручки и карандаши, практичные рюкзаки - всё, что нужно для успешной учёбы!",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80",
    slug: "new-school-collection",
  },
  {
    id: 2,
    title: "Скидки 20% на всю офисную канцелярию",
    date: "01.04.2025",
    excerpt: "Только до конца месяца действует специальное предложение на всю офисную канцелярию. Спешите пополнить запасы необходимых принадлежностей по выгодным ценам!",
    image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    slug: "office-supplies-sale",
  },
  {
    id: 3,
    title: "Мастер-класс по скетчингу для начинающих",
    date: "30.03.2025",
    excerpt: "Приглашаем всех желающих на мастер-класс по скетчингу. Профессиональный художник расскажет о базовых техниках и поможет сделать первые шаги в этом увлекательном хобби.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    slug: "sketching-workshop",
  },
  {
    id: 4,
    title: "Расширение ассортимента товаров для творчества",
    date: "25.03.2025",
    excerpt: "Спешим сообщить о значительном расширении ассортимента товаров для творчества и хобби. Теперь в нашем магазине вы найдёте ещё больше материалов для воплощения ваших творческих идей!",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    slug: "new-creative-supplies",
  },
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-stationery-50 py-8">
          <div className="container-custom">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Новости и события
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Узнавайте о новых поступлениях, специальных предложениях и событиях нашего магазина
            </p>
          </div>
        </div>
        
        <div className="container-custom py-10">
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <span className="text-sm text-gray-500 mb-2 block">
                    {item.date}
                  </span>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-900">
                    {item.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {item.excerpt}
                  </p>
                  
                  <Button asChild variant="outline">
                    <Link to={`/news/${item.slug}`}>
                      Читать далее
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 flex justify-center">
            <Button variant="outline">
              Загрузить ещё
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
