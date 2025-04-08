
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
    color: "bg-blue-50",
    link: "/promotions/school-sale",
  },
  {
    id: 2,
    title: "2 по цене 1 на все ручки Pilot",
    description: "Покупайте две ручки известного бренда по цене одной. Предложение ограничено по времени!",
    image: "https://images.unsplash.com/photo-1568205612837-017257d2310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    color: "bg-amber-50",
    link: "/promotions/pilot-sale",
  }
];

const Promotions = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Акции и спецпредложения
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {promotions.map((promo) => (
            <div 
              key={promo.id} 
              className={`${promo.color} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
            >
              <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {promo.description}
                  </p>
                  <Button asChild variant="outline" className="group">
                    <Link to={promo.link}>
                      Подробнее
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                
                <div className="aspect-square max-w-[200px] mx-auto">
                  <img 
                    src={promo.image} 
                    alt={promo.title} 
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
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
