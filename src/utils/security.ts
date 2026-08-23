/**
 * Security & Input Sanitization Utilities for B-Unit Official Website
 * Comprehensive Web Security, DOM XSS prevention, strict validation, safe URI handling, and rate limiting.
 */

// Memory rate-limiter store
const submissionTimestamps: number[] = [];
const RATE_LIMIT_MAX = 5; // Max 5 submissions per minute
const RATE_LIMIT_WINDOW_MS = 60000;

/**
 * Escapes HTML characters to prevent XSS and HTML Injection
 */
export const sanitizeString = (input: unknown): string => {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/[&<>"'/`]/g, (match) => {
      const escapeMap: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '`': '&#x60;',
      };
      return escapeMap[match] || match;
    });
};

/**
 * Validates Mozambican (+258) and standard international phone numbers
 */
export const validatePhoneNumber = (phone: string): boolean => {
  if (!phone || typeof phone !== 'string') return false;
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
  // Accepts +258 8x xxx xxxx or international 8-15 digits
  const phoneRegex = /^(\+?258)?8[2-7]\d{7}$|^(\+?\d{8,15})$/;
  return phoneRegex.test(cleanPhone);
};

/**
 * Strict Image URL / URI validator to prevent javascript: / data: script XSS vectors
 */
export const isValidImageUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();

  // Block dangerous schemes
  if (/^(javascript|vbscript|data(?!\:image\/))/i.test(trimmed)) {
    return false;
  }

  // Allow safe HTTPS URLs
  if (/^https:\/\/[a-zA-Z0-9\-\._~:\/\?#\[\]@!$&'()*+,;=]+$/i.test(trimmed)) {
    return true;
  }

  // Allow relative asset paths
  if (/^(\.\/|\/|assets\/)?[a-zA-Z0-9_\-\/ \.\%]+\.(png|jpg|jpeg|webp|svg|gif)$/i.test(trimmed)) {
    return true;
  }

  // Allow safe base64 image data URIs
  if (/^data:image\/(png|jpeg|jpg|webp|gif|svg\+xml);base64,[A-Za-z0-9+/=]+$/i.test(trimmed)) {
    return true;
  }

  return false;
};

/**
 * In-memory client rate limiter to prevent spam and flooding
 */
export const checkRateLimit = (): { allowed: boolean; message?: string } => {
  const now = Date.now();
  // Filter out timestamps older than the window
  const validTimestamps = submissionTimestamps.filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (validTimestamps.length >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      message: 'Muitas tentativas num curto período. Por favor aguarde um momento antes de tentar novamente.',
    };
  }

  submissionTimestamps.push(now);
  return { allowed: true };
};

/**
 * Sanitizes and validates product creation input
 */
export const sanitizeProductInput = (data: {
  name: string;
  category: string;
  description: string;
  availability: string;
  image: string;
}) => {
  const cleanName = sanitizeString(data.name).substring(0, 120);
  const cleanCategory = sanitizeString(data.category).substring(0, 50);
  const cleanDescription = sanitizeString(data.description).substring(0, 500);
  const cleanAvailability = sanitizeString(data.availability).substring(0, 30);

  const safeImage = isValidImageUrl(data.image)
    ? data.image.trim()
    : '';

  return {
    name: cleanName,
    category: cleanCategory,
    description: cleanDescription,
    availability: cleanAvailability,
    image: safeImage,
  };
};
