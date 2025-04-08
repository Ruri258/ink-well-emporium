import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart, Check, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ProductCard from '@/components/products/ProductCard';

// Sample products data (same as in Products.tsx)
const allProducts = [
  {
    id: 1,
    name: "Ручка шариковая Premium",
    price: 120,
    oldPrice: 150,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    category: "pens",
    isNew: false,
    isSale: true,
    description: "Шариковая ручка с удобным корпусом и плавным письмом. Толщина линии 0.7 мм. Цвет чернил: синий. Подходит для ежедневного использования в офисе и дома.",
  },
  {
    id: 2,
    name: "Блокнот в твердой обложке",
    price: 350,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "notebooks",
    isNew: true,
    isSale: false,
    description: "Стильный блокнот формата A5 с твердой обложкой. 120 листов белой бумаги плотностью 80 г/м². Есть закладка-ляссе и резинка для закрывания.",
  },
  {
    id: 3,
    name: "Набор карандашей цветных",
    price: 280,
    oldPrice: 320,
    image: "https://images.unsplash.com/photo-1522111608460-7a466dbef58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "creative",
    isNew: false,
    isSale: true,
    description: "Набор цветных карандашей из 24 штук. Мягкий грифель, яркие цвета. Подходят для рисования и раскрашивания.",
  },
  {
    id: 4,
    name: "Органайзер настольный",
    price: 750,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "office",
    isNew: true,
    isSale: false,
    description: "Удобный настольный органайзер для хранения канцелярских принадлежностей. Изготовлен из прочного пластика. Размеры: 25x15x10 см.",
  },
  {
    id: 5,
    name: "Тетрадь в клетку, 48 л.",
    price: 60,
    oldPrice: 75,
    image: "https://images.unsplash.com/photo-1595231776515-ddffb1f4eb73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    category: "notebooks",
    isNew: false,
    isSale: true,
    description: "Тетрадь в клетку, 48 листов. Белая бумага плотностью 60 г/м². Подходит для школьников и студентов.",
  },
  {
    id: 6,
    name: "Калькулятор инженерный",
    price: 890,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    category: "office",
    isNew: false,
    isSale: false,
    description: "Инженерный калькулятор с широким набором функций. Подходит для решения сложных математических задач.",
  },
  {
    id: 7,
    name: "Набор маркеров для доски",
    price: 420,
    oldPrice: 500,
    image: "https://images.unsplash.com/photo-1568205612837-017257d2310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1012&q=80",
    category: "office",
    isNew: false,
    isSale: true,
    description: "Набор маркеров для доски, 4 цвета. Легко стираются, не оставляют следов. Подходят для использования в офисе и школе.",
  },
  {
    id: 8,
    name: "Планер недатированный",
    price: 650,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    category: "notebooks",
    isNew: true,
    isSale: false,
    description: "Недатированный планер в твердой обложке. 100 листов белой бумаги плотностью 100 г/м². Удобен для планирования задач и встреч.",
  },
  {
    id: 9,
    name: "Ручка гелевая, синяя",
    price: 85,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
    category: "pens",
    isNew: false,
    isSale: false,
    description: "Гелевая ручка с синими чернилами. Толщина линии 0.5 мм. Обеспечивает мягкое и плавное письмо.",
  },
  {
    id: 10,
    name: "Карандаш чернографитный HB",
    price: 30,
    oldPrice: 40,
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
    category: "pens",
    isNew: false,
    isSale: true,
    description: "Чернографитный карандаш HB. Подходит для письма и рисования. Легко затачивается.",
  },
  {
    id: 11,
    name: "Краски акварельные, 24 цвета",
    price: 350,
    oldPrice: 420,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80",
    category: "creative",
    isNew: false,
    isSale: true,
    description: "Акварельные краски, 24 цвета. Яркие и насыщенные цвета. Подходят для рисования на бумаге и картоне.",
  },
  {
    id: 12,
    name: "Бумага для заметок цветная",
    price: 180,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "office",
    isNew: true,
    isSale: false,
    description: "Цветная бумага для заметок, 100 листов. Разные цвета в упаковке. Удобны для записи важной информации.",
  },
];

const ProductDetail = () => {
  const { id, category } = useParams<{ id?: string, category?: string }>();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { toast } = useToast();
  
  const product = allProducts.find(
    p => p.id === Number(id) && p.category === category
  );
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container-custom py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
          <p className="mb-6">Запрашиваемый товар не существует или был удален.</p>
          <Button asChild>
            <Link to="/products">Вернуться к каталогу</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    console.log('Adding to cart:', { product, quantity });
    setAddedToCart(true);
    
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} (${quantity} шт.)`,
    });
    
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };
  
  const similarProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  const discountPercentage = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container-custom py-8">
        <div className="mb-8">
          <Link
            to={`/products${category ? `/${category}` : ''}`}
            className="inline-flex items-center text-gray-600 hover:text-stationery-600"
          >
            <ArrowLeft size={16} className="mr-1" />
            Назад к каталогу
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-3 mb-4">
                {product.isNew && (
                  <span className="badge badge-new">Новинка</span>
                )}
                {product.isSale && (
                  <span className="badge badge-sale">-{discountPercentage}%</span>
                )}
              </div>
              
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
            </div>
            
            <div className="flex items-center gap-3 mb-2">
              <div className="text-2xl font-bold text-gray-900">
                {product.price} ₽
              </div>
              
              {product.oldPrice && (
                <div className="text-gray-500 text-lg line-through">
                  {product.oldPrice} ₽
                </div>
              )}
            </div>
            
            <div className="border-t border-b py-6 my-6 space-y-4">
              <div className="flex items-center">
                <div className="flex items-center border rounded-md mr-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-10 w-10 p-0" 
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </Button>
                  
                  <span className="px-4 py-2 min-w-[50px] text-center">
                    {quantity}
                  </span>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-10 w-10 p-0" 
                    onClick={handleIncrease}
                  >
                    <Plus size={16} />
                  </Button>
                </div>
                
                <Button
                  className="flex items-center w-full text-base h-10"
                  onClick={handleAddToCart}
                  disabled={addedToCart}
                >
                  {addedToCart ? (
                    <>
                      <Check size={18} className="mr-2" />
                      Добавлено
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} className="mr-2" />
                      Добавить в корзину
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium">Характеристики</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-2 py-2 border-b">
                  <span className="text-gray-600">Категория</span>
                  <span className="font-medium">
                    {product.category === 'pens' && 'Ручки и карандаши'}
                    {product.category === 'notebooks' && 'Тетради и блокноты'}
                    {product.category === 'office' && 'Офисные принадлежности'}
                    {product.category === 'creative' && 'Творчество'}
                    {product.category === 'school' && 'Школьные товары'}
                  </span>
                </div>
                <div className="grid grid-cols-2 py-2 border-b">
                  <span className="text-gray-600">Артикул</span>
                  <span className="font-medium">ST-{product.id}0{product.id}42</span>
                </div>
                <div className="grid grid-cols-2 py-2 border-b">
                  <span className="text-gray-600">Наличие</span>
                  <span className="font-medium text-green-600">В наличии</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {similarProducts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-6">Похожие товары</h2>
            <div className="product-grid">
              {similarProducts.map(similarProduct => (
                <ProductCard key={similarProduct.id} product={similarProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
