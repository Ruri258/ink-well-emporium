
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Канцелярский центр</h3>
            <p className="text-gray-600 mb-4">
              Качественные канцтовары для офиса, школы и творчества
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-stationery-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-stationery-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-stationery-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/paper" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Бумага и бумажная продукция
                </Link>
              </li>
              <li>
                <Link to="/products/furniture" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Мебель
                </Link>
              </li>
              <li>
                <Link to="/products/kitchen" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Офисная кухня
                </Link>
              </li>
              <li>
                <Link to="/products/tech" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Техника и расходные материалы
                </Link>
              </li>
              <li>
                <Link to="/products/office" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Товары для офиса
                </Link>
              </li>
              <li>
                <Link to="/products/school" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Товары для школы
                </Link>
              </li>
              <li>
                <Link to="/products/chemicals" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Хозтовары и бытовая химия
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/news" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  Оплата
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-stationery-600 mr-2 mt-1" />
                <span className="text-gray-600">
                  г. Москва, ул. Канцелярская, д. 123
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-stationery-600 mr-2" />
                <a href="tel:+78001234567" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  8 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-stationery-600 mr-2" />
                <a href="mailto:info@stationery.ru" className="text-gray-600 hover:text-stationery-600 transition-colors">
                  info@stationery.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>© 2024 Канцелярский центр. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
