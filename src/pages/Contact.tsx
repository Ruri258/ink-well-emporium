
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', { name, email, message });
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше обращение! Мы свяжемся с вами в ближайшее время.",
      });
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-stationery-50 py-8">
          <div className="container-custom">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Контактная информация
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Мы всегда рады помочь вам с выбором товаров или ответить на ваши вопросы
            </p>
          </div>
        </div>
        
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold mb-6">Наши контакты</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-stationery-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Адрес</h3>
                    <p className="text-gray-600">
                      123456, г. Москва, <br />
                      ул. Канцелярская, д. 123, офис 45
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-stationery-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Телефон</h3>
                    <p className="text-gray-600">
                      <a href="tel:+78001234567" className="hover:text-stationery-600 transition-colors">
                        8 (800) 123-45-67
                      </a>
                      <br />
                      <a href="tel:+74951234567" className="hover:text-stationery-600 transition-colors">
                        8 (495) 123-45-67
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-stationery-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@stationery.ru" className="hover:text-stationery-600 transition-colors">
                        info@stationery.ru
                      </a>
                      <br />
                      <a href="mailto:sales@stationery.ru" className="hover:text-stationery-600 transition-colors">
                        sales@stationery.ru
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-stationery-600 mr-3 mt-1" size={20} />
                  <div>
                    <h3 className="font-medium mb-1">Режим работы</h3>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00 - 20:00 <br />
                      Сб-Вс: 10:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.347442290538!2d37.62147761592996!3d55.755245980551126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sThe%20Kremlin!5e0!3m2!1sen!2sru!4v1649685124581!5m2!1sen!2sru" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-6">Напишите нам</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
