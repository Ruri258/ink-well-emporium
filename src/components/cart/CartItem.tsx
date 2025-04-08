
import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
  };
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  item, 
  onRemove,
  onUpdateQuantity
}) => {
  const handleIncrease = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <div className="flex py-6 border-b">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between">
            <h3 className="text-base font-medium text-gray-900">
              <Link to={`/products/${item.category}/${item.id}`}>
                {item.name}
              </Link>
            </h3>
            <p className="text-base font-medium text-gray-900">
              {item.price * item.quantity} ₽
            </p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {item.price} ₽ за шт.
          </p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={handleDecrease}
              disabled={item.quantity <= 1}
            >
              <Minus size={16} />
            </Button>
            
            <span className="px-2 py-1 min-w-[40px] text-center">
              {item.quantity}
            </span>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={handleIncrease}
            >
              <Plus size={16} />
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="sm"
            className="text-red-500 hover:text-red-700 hover:bg-red-50" 
            onClick={handleRemove}
          >
            <Trash2 size={16} className="mr-1" />
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
