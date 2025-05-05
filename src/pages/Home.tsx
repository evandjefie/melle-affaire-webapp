import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Hero from '../components/Hero';
import { ChefHat, GlassWater, Cake, Users, Award, Clock } from 'lucide-react';
import { products } from '../data/products';

const Home: React.FC = () => {
  const { t, language } = useLanguage();

  const features = [
    { icon: <ChefHat size={24} />, title: t('home.features.quality') },
    { icon: <GlassWater size={24} />, title: t('home.features.service') },
    { icon: <Cake size={24} />, title: t('home.features.variety') },
    { icon: <Users size={24} />, title: t('home.features.events') },
    { icon: <Award size={24} />, title: t('home.features.expertise') },
    { icon: <Clock size={24} />, title: t('home.features.punctuality') },
  ];

  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
              {t('home.features.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="text-gold mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section id="featured" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
              {t('home.featured.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              {t('home.featured.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredProducts.map(product => (
                <div key={product.id} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={product.image} 
                    alt={language === 'fr' ? product.nameFr : product.nameEn}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {language === 'fr' ? product.nameFr : product.nameEn}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {language === 'fr' ? product.descriptionFr : product.descriptionEn}
                    </p>
                    <p className="text-gold font-semibold text-lg">
                      {product.price.toLocaleString()} FCFA
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/products"
              className="inline-block px-8 py-3 bg-gold hover:bg-gold/80 text-white rounded-lg transition-colors"
            >
              {t('home.featured.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-6">
                {t('about.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t('about.description')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {t('about.quality.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('about.quality.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {t('about.experience.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('about.experience.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg"
                alt="About MELLE Affaire"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-4xl font-playfair font-bold text-gold">10+</p>
                <p className="text-gray-600 dark:text-gray-300">{t('about.years')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.title')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {t('contact.description')}
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {t('contact.address')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Rue Principale<br />
                    Dakar, Sénégal
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {t('contact.email')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@melleaffaire.com
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {t('contact.phone')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +221 77 777 77 77
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-6">
                {t('contact.hours.title')}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">{t('contact.hours.weekdays')}</span>
                  <span className="text-gray-900 dark:text-white">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">{t('contact.hours.saturday')}</span>
                  <span className="text-gray-900 dark:text-white">10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">{t('contact.hours.sunday')}</span>
                  <span className="text-gray-900 dark:text-white">{t('contact.hours.closed')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;