
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartItem from './CartItem';

// Sample cart items
const initialCartItems = [
  {
    id: 1,
    name: "Ручка шариковая Premium",
    price: 120,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    category: "pens",
    quantity: 2,
  },
  {
    id: 4,
    name: "Органайзер настольный",
    price: 750,
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "office",
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = cartItems.reduce((total, item) => 
    total + (item.price * item.quantity), 0
  );
  
  const deliveryCost = subtotal > 3000 ? 0 : 300;
  const total = subtotal + deliveryCost;

  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-12 text-center">
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingCart size={64} className="text-gray-300 mb-4" />
          <h2 className="text-2xl font-medium text-gray-900 mb-2">
            Ваша корзина пуста
          </h2>
          <p className="text-gray-600 mb-6">
            Добавьте товары в корзину, чтобы оформить заказ
          </p>
          <Button asChild>
            <Link to="/products">
              Перейти к товарам
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">
              Корзина <span className="text-gray-500">({totalItems} товаров)</span>
            </h1>
            <Button asChild variant="ghost" size="sm">
              <Link to="/products" className="flex items-center">
                <ArrowLeft size={16} className="mr-1" />
                Продолжить покупки
              </Link>
            </Button>
          </div>
          
          <div className="space-y-0">
            {cartItems.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                onRemove={handleRemoveItem}
                onUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </div>
        </div>
        
        <div>
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            <h2 className="text-lg font-semibold mb-4">
              Сумма заказа
            </h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Товары ({totalItems}):</span>
                <span>{subtotal} ₽</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Доставка:</span>
                <span>{deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost} ₽`}</span>
              </div>
              
              {deliveryCost > 0 && (
                <div className="text-xs text-gray-500 pt-1">
                  До бесплатной доставки не хватает {3000 - subtotal} ₽
                </div>
              )}
              
              <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
                <span>Итого:</span>
                <span>{total} ₽</span>
              </div>
            </div>
            
            <Button className="w-full mt-6">
              Оформить заказ
            </Button>
            
            <div className="mt-4 text-xs text-gray-500 text-center">
              Оформляя заказ, вы соглашаетесь с условиями 
              <a href="#" className="text-stationery-600 hover:underline ml-1">
                пользовательского соглашения
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
