import { clsx } from 'clsx';
import { RESORT, WHATSAPP_MESSAGES } from './constants';

export function cn(...inputs) {
  return clsx(inputs);
}

export function getWhatsAppURL(type = 'general', customMessage) {
  const message = customMessage || WHATSAPP_MESSAGES[type] || WHATSAPP_MESSAGES.general;
  return `https://wa.me/${RESORT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(amount, currency = 'INR') {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function generateStars(rating) {
  return Array.from({ length: 5 }, (_, i) => i < rating);
}
