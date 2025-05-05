import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext';
import { formatWhatsAppMessage } from '../utils/formatWhatsAppMessage';

const WhatsAppButton: React.FC = () => {
  const { items, total } = useCart();
  const { language, t } = useLanguage();
  
  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;
    
    const whatsappMessage = formatWhatsAppMessage(items, total, language);
    const whatsappURL = `https://wa.me/+221777777777?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };
  
  return items.length > 0 ? (
    <button 
      onClick={handleWhatsAppOrder}
      className="fixed bottom-8 right-8 lg:bottom-10 lg:right-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg z-30 transition-transform hover:scale-105"
      aria-label={t('cart.order')}
    >
      <MessageCircle size={24} />
    </button>
  ) : null;
};

export default WhatsAppButton;