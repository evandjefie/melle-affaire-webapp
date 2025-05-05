import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToFeatured = () => {
    const element = document.getElementById('featured');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg" 
          alt="African catering service" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold text-white mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-playfair text-white/90 mb-8 italic">
            {t('hero.subtitle')}
          </p>
          <button 
            onClick={scrollToFeatured}
            className="inline-block px-8 py-3 border-2 border-gold bg-transparent hover:bg-gold text-white font-medium transition-colors duration-300 rounded-sm"
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>
      
      {/* Overlay pattern */}
      <div className="absolute inset-0 z-10 opacity-10 bg-pattern"></div>
    </div>
  );
};

export default Hero;