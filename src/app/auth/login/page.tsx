import { Metadata } from 'next';
import LoginForm from './LoginForm';

export const metadata: Metadata = {
  title: 'Admin Girişi | Yönel Oto Yedek Parça',
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Admin Girişi</h1>
          <p className="text-gray-600 mt-2">Yönel Oto Yedek Parça</p>
        </div>
        
        <LoginForm />
      </div>
    </main>
  );
}

