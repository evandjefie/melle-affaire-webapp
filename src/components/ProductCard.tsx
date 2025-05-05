import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useCart, Product } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, items, updateQuantity } = useCart();
  const { language, t } = useLanguage();
  const [quantity, setQuantity] = useState(0);
  
  // Find if product is already in cart
  const cartItem = items.find(item => item.id === product.id);
  
  // If product is in cart, use its quantity
  React.useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);
  
  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (cartItem) {
      updateQuantity(product.id, newQuantity);
    } else {
      addToCart(product, 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(product.id, newQuantity);
    }
  };
  
  const productName = language === 'fr' ? product.nameFr : product.nameEn;
  const productDescription = language === 'fr' ? product.descriptionFr : product.descriptionEn;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={productName} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{productName}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{productDescription}</p>
        <div className="flex justify-between items-center">
          <span className="text-gold text-lg font-semibold">{product.price.toFixed(2)} €</span>
          
          <div className="flex items-center">
            <button 
              onClick={decrementQuantity} 
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                quantity > 0 
                  ? 'bg-gold hover:bg-gold/80 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
              }`}
              disabled={quantity === 0}
              aria-label={t('cart.remove')}
            >
              <Minus size={16} />
            </button>
            
            <span className="mx-3 min-w-[20px] text-center">
              {quantity}
            </span>
            
            <button 
              onClick={incrementQuantity} 
              className="w-8 h-8 rounded-full bg-gold hover:bg-gold/80 text-white flex items-center justify-center transition-colors"
              aria-label={t('cart.add')}
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;