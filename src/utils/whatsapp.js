import { schoolInfo } from "../data";

/** wa.me link for the school's WhatsApp number, optionally with a pre-filled message. */
export const whatsappUrl = (text) =>
  text
    ? `https://wa.me/${schoolInfo.whatsappNumber}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${schoolInfo.whatsappNumber}`;

/** Open WhatsApp in a new tab with a pre-filled message. */
export const openWhatsApp = (text) => window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
