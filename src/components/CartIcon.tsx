import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { useCart, CartItem } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { formatWhatsAppMessage } from '../utils/formatWhatsAppMessage';

const CartIcon: React.FC = () => {
  const { items, count, total, removeFromCart, updateQuantity } = useCart();
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  
  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [cartRef]);
  
  const toggleCart = () => {
    setIsOpen(!isOpen);
  };
  
  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    
    const whatsappMessage = formatWhatsAppMessage(items, total, language);
    const whatsappURL = `https://wa.me/+221777777777?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };
  
  return (
    <div className="relative" ref={cartRef}>
      <button 
        onClick={toggleCart} 
        className="relative"
        aria-label="Toggle cart"
      >
        <ShoppingBag size={24} />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-gold text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {count}
          </span>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 className="font-medium text-gray-900 dark:text-white">
              {t('cart.title')}
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white"
              aria-label="Close cart"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {items.length === 0 ? (
              <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                {t('cart.empty')}
              </div>
            ) : (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {items.map((item) => (
                  <CartItemRow key={item.id} item={item} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
                ))}
              </ul>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between mb-4">
                <span className="font-medium text-gray-900 dark:text-white">
                  {t('cart.total')}
                </span>
                <span className="font-bold text-gold">
                  {total.toFixed(2)} €
                </span>
              </div>
              
              <button 
                onClick={handleWhatsAppOrder}
                className="w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center justify-center"
              >
                <span>{t('cart.order')}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Individual cart item component
const CartItemRow: React.FC<{ 
  item: CartItem; 
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}> = ({ item, removeFromCart, updateQuantity }) => {
  const { language, t } = useLanguage();
  
  const productName = language === 'fr' ? item.nameFr : item.nameEn;
  
  const incrementQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  
  const decrementQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };
  
  return (
    <li className="py-3 px-4">
      <div className="flex items-start">
        <img 
          src={item.image} 
          alt={productName} 
          className="w-16 h-16 rounded object-cover mr-3"
        />
        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
            {productName}
          </h4>
          <div className="flex items-center mt-1">
            <button 
              onClick={decrementQuantity}
              className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-5 h-5 rounded flex items-center justify-center"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="mx-2 text-sm text-gray-600 dark:text-gray-300">
              {item.quantity}
            </span>
            <button 
              onClick={incrementQuantity}
              className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-5 h-5 rounded flex items-center justify-center"
              aria-label="Increase quantity"
            >
              +
            </button>
            <span className="ml-auto text-sm font-medium text-gray-900 dark:text-white">
              {(item.price * item.quantity).toFixed(2)} €
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartIcon;