/**
 * Security & Input Sanitization Utilities for B-Unit Official Website
 * Enforces XSS prevention, form validation, rate limiting, and safe payload handling.
 */

// Memory rate-limiter store
const submissionTimestamps: number[] = [];
const RATE_LIMIT_MAX = 3; // Max 3 submissions per minute
const RATE_LIMIT_WINDOW_MS = 60000;

export const sanitizeString = (input: string): string => {
  if (!input) return '';
  return input
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

export const validatePhoneNumber = (phone: string): boolean => {
  // Accepts Mozambican (+258) and standard international formats
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  const phoneRegex = /^(\+?258)?8[2-7]\d{7}$|^(\+?\d{8,15})$/;
  return phoneRegex.test(cleanPhone);
};

export const checkRateLimit = (): { allowed: boolean; message?: string } => {
  const now = Date.now();
  // Filter out timestamps older than the window
  const validTimestamps = submissionTimestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );
  
  if (validTimestamps.length >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      message: 'Muitas tentativas num curto período. Por favor aguarde um momento antes de tentar novamente.'
    };
  }

  submissionTimestamps.push(now);
  return { allowed: true };
};

export const sanitizeProductInput = (data: {
  name: string;
  category: string;
  description: string;
  availability: string;
  image: string;
}) => {
  return {
    name: sanitizeString(data.name).substring(0, 120),
    category: sanitizeString(data.category),
    description: sanitizeString(data.description).substring(0, 500),
    availability: sanitizeString(data.availability),
    image: data.image.startsWith('data:image/') || data.image.startsWith('http') || data.image.startsWith('file://')
      ? data.image
      : '/images/placeholder-part.jpg'
  };
};
