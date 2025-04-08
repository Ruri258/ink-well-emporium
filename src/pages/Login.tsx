
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LoginForm from '@/components/auth/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-center mb-8">
              Личный кабинет
            </h1>
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
