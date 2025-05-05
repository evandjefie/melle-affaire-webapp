import { CartItem } from '../context/CartContext';

export const formatWhatsAppMessage = (
  items: CartItem[], 
  total: number,
  language: 'fr' | 'en'
): string => {
  const translations = {
    fr: {
      greeting: 'Bonjour MELLE Affaire, je souhaite commander:',
      quantity: 'Quantité',
      price: 'Prix unitaire',
      subtotal: 'Sous-total',
      total: 'Total',
      thanks: 'Merci!'
    },
    en: {
      greeting: 'Hello MELLE Affaire, I would like to order:',
      quantity: 'Quantity',
      price: 'Unit price',
      subtotal: 'Subtotal',
      total: 'Total',
      thanks: 'Thank you!'
    }
  };
  
  const t = translations[language];
  
  // Start with greeting
  let message = `${t.greeting}\n\n`;
  
  // Add each item
  items.forEach((item, index) => {
    const productName = language === 'fr' ? item.nameFr : item.nameEn;
    const itemTotal = item.price * item.quantity;
    
    message += `${index + 1}. ${productName}\n`;
    message += `   - ${t.quantity}: ${item.quantity}\n`;
    message += `   - ${t.price}: ${item.price.toFixed(2)} €\n`;
    message += `   - ${t.subtotal}: ${itemTotal.toFixed(2)} €\n\n`;
  });
  
  // Add total
  message += `${t.total}: ${total.toFixed(2)} €\n\n`;
  
  // Add thanks
  message += `${t.thanks}`;
  
  return message;
};