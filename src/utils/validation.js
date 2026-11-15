/** Phone with spaces and dashes removed. */
export const cleanPhone = (raw) => raw.replace(/[\s-]/g, "");

/** Accepts any phone number of at least 10 characters once spaces and dashes are removed. */
export const isValidPhone = (raw) => cleanPhone(raw).length >= 10;

export const isValidEmail = (raw) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.trim());
