
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const promotions = [
  {
    id: 1,
    title: "Скидка 25% на школьные принадлежности",
    description: "Подготовьтесь к учебному году заранее - специальные цены на тетради, дневники и другие школьные товары",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1022&q=80",
    bgColor: "from-blue-50 to-blue-100",
    textColor: "text-blue-800",
    buttonColor: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    link: "/promotions/school-sale",
    badge: "До 31 августа",
  },
  {
    id: 2,
    title: "2 по цене 1 на все ручки Pilot",
    description: "Покупайте две ручки известного бренда по цене одной. Предложение ограничено по времени!",
    image: "https://images.unsplash.com/photo-1568205612837-017257d2310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    bgColor: "from-amber-50 to-amber-100",
    textColor: "text-amber-800",
    buttonColor: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    link: "/promotions/pilot-sale",
    badge: "Осталось 7 дней",
  },
  {
    id: 3,
    title: "Скидка 30% на товары для творчества",
    description: "Специальное предложение на все товары для рисования и творчества. Краски, карандаши, кисти и многое другое!",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80",
    bgColor: "from-green-50 to-green-100",
    textColor: "text-green-800",
    buttonColor: "bg-green-100 text-green-800 hover:bg-green-200",
    link: "/promotions/creative-sale",
    badge: "Новая акция",
  },
];

const Promotions = () => {
  return (
    <section className="section bg-gray-50 border-y border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Акции и спецпредложения
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Не упустите возможность приобрести качественные канцтовары по выгодным ценам
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <div 
              key={promo.id} 
              className={`bg-gradient-to-br ${promo.bgColor} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative`}
            >
              {promo.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium">
                  {promo.badge}
                </div>
              )}
              
              <div className="p-6">
                <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4">
                  <img 
                    src={promo.image} 
                    alt={promo.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className={`text-xl font-bold ${promo.textColor} mb-3`}>
                  {promo.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {promo.description}
                </p>
                
                <Button asChild variant="outline" className={`${promo.buttonColor} group border-0`}>
                  <Link to={promo.link}>
                    Подробнее
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/promotions">
              Все акции и спецпредложения
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
