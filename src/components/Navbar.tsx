import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe, LayoutDashboard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import CartIcon from './CartIcon';
import AuthModal from './AuthModal';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const navLinkClass = `${
    isScrolled 
      ? 'text-gray-900 dark:text-white' 
      : 'text-white'
  } hover:text-gold transition-colors`;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              to="/"
              className={`text-xl font-playfair font-bold ${
                isScrolled 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-white'
              }`}
            >
              MELLE Affaire
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={navLinkClass}>
                {t('home')}
              </Link>
              <Link to="/products" className={navLinkClass}>
                {t('products')}
              </Link>
              <a href="#about" className={navLinkClass}>
                {t('about')}
              </a>
              <a href="#contact" className={navLinkClass}>
                {t('contact')}
              </a>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <button 
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className={navLinkClass}
                aria-label={t('language')}
              >
                <div className="flex items-center space-x-1">
                  <Globe size={20} />
                  <span className="text-sm hidden sm:inline">
                    {language === 'fr' ? 'FR' : 'EN'}
                  </span>
                </div>
              </button>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={navLinkClass}
                aria-label={t('theme')}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              {/* Cart */}
              <div className={navLinkClass}>
                <CartIcon />
              </div>

              {/* Admin Controls */}
              {isAdmin ? (
                <>
                  <Link to="/dashboard" className={navLinkClass}>
                    <LayoutDashboard size={20} />
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`${navLinkClass} text-sm`}
                  >
                    {t('auth.logout')}
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className={`${navLinkClass} text-sm`}
                >
                  {t('auth.login')}
                </button>
              )}

              {/* Mobile Menu Button */}
              <button 
                className={`md:hidden ${navLinkClass}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-900 dark:text-white hover:text-gold transition-colors py-2"
                onClick={toggleMenu}
              >
                {t('home')}
              </Link>
              <Link
                to="/products"
                className="text-gray-900 dark:text-white hover:text-gold transition-colors py-2"
                onClick={toggleMenu}
              >
                {t('products')}
              </Link>
              <a 
                href="#about" 
                className="text-gray-900 dark:text-white hover:text-gold transition-colors py-2"
                onClick={toggleMenu}
              >
                {t('about')}
              </a>
              <a 
                href="#contact" 
                className="text-gray-900 dark:text-white hover:text-gold transition-colors py-2"
                onClick={toggleMenu}
              >
                {t('contact')}
              </a>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Navbar;