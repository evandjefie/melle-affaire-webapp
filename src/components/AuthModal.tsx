import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-6">
          {t('auth.title')}
        </h2>
        
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#D4AF37',
                  brandAccent: '#C4A137',
                }
              }
            }
          }}
          localization={{
            variables: {
              sign_in: {
                email_label: language === 'fr' ? 'Adresse email' : 'Email address',
                password_label: language === 'fr' ? 'Mot de passe' : 'Password',
                button_label: language === 'fr' ? 'Se connecter' : 'Sign in',
              }
            }
          }}
          theme="default"
        />
      </div>
    </div>
  );
};

export default AuthModal;