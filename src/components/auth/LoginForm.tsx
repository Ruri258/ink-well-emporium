
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

const LoginForm = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating auth request
    setTimeout(() => {
      console.log('Logging in with:', { loginEmail, loginPassword });
      toast({
        title: "Успешная авторизация",
        description: "Вы успешно вошли в аккаунт",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating registration request
    setTimeout(() => {
      console.log('Registering with:', { registerName, registerEmail, registerPassword });
      toast({
        title: "Регистрация выполнена",
        description: "Вы успешно зарегистрировались",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="mx-auto w-full max-w-md p-6 bg-white rounded-lg shadow-sm">
      <Tabs defaultValue="login">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Вход</TabsTrigger>
          <TabsTrigger value="register">Регистрация</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Пароль
                </label>
                <Link to="/forgot-password" className="text-sm text-stationery-600 hover:text-stationery-700">
                  Забыли пароль?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Вход...' : 'Войти'}
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="register">
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Имя
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Ваше имя"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="register-email"
                type="email"
                placeholder="your@email.com"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">
                Пароль
              </label>
              <Input
                id="register-password"
                type="password"
                placeholder="••••••••"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500">
                Минимум 8 символов, включая буквы и цифры
              </p>
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Регистрируясь, вы соглашаетесь с 
              <a href="#" className="text-stationery-600 hover:underline ml-1">
                условиями использования
              </a>
            </p>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginForm;
