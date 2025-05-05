import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

interface Category {
  id: string;
  name_fr: string;
  name_en: string;
}

interface Product {
  id: string;
  category_id: string;
  name_fr: string;
  name_en: string;
  description_fr: string;
  description_en: string;
  price: number;
  image_url: string;
}

const Products: React.FC = () => {
  const { language, t } = useLanguage();
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | 'all'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name_fr');

    if (error) {
      console.error('Error fetching categories:', error);
      return;
    }

    setCategories(data);
  };

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('active', true)
      .order('name_fr');

    if (error) {
      console.error('Error fetching products:', error);
      return;
    }

    setProducts(data);
    setLoading(false);
  };

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category_id === activeCategory);

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-bold text-gray-900 dark:text-white mb-4">
            {t('products.title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              activeCategory === 'all'
                ? 'bg-gold text-white'
                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {t('category.all')}
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category.id
                  ? 'bg-gold text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {language === 'fr' ? category.name_fr : category.name_en}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={{
                  id: parseInt(product.id),
                  nameFr: product.name_fr,
                  nameEn: product.name_en,
                  descriptionFr: product.description_fr,
                  descriptionEn: product.description_en,
                  price: product.price,
                  image: product.image_url,
                  category: product.category_id
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;