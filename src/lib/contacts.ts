import raw from '../data/contacts.json';

export interface Contacts {
  whatsapp_e164: string;
  whatsapp_display: string;
  whatsapp_msg: string;
  email: string;
  instagram_handle: string;
  linkedin_url: string;
  hero_image_url: string;
  hero_image_url_mobile: string;
  about_photo_url: string;
  about_photo_url_mobile: string;
}

const data = raw as Partial<Contacts>;

export const contacts: Contacts = {
  whatsapp_e164: data.whatsapp_e164 || '',
  whatsapp_display: data.whatsapp_display || '',
  whatsapp_msg: data.whatsapp_msg || '',
  email: data.email || '',
  instagram_handle: data.instagram_handle || '',
  linkedin_url: data.linkedin_url || '',
  hero_image_url: data.hero_image_url || '',
  hero_image_url_mobile: data.hero_image_url_mobile || '',
  about_photo_url: data.about_photo_url || '',
  about_photo_url_mobile: data.about_photo_url_mobile || '',
};

/** Retorna par {desktop, mobile} com fallback no desktop quando mobile vazio. */
export function heroImages(c: Contacts = contacts) {
  if (!c.hero_image_url) return null;
  return { desktop: c.hero_image_url, mobile: c.hero_image_url_mobile || c.hero_image_url };
}

export function aboutPhotos(c: Contacts = contacts) {
  if (!c.about_photo_url) return null;
  return { desktop: c.about_photo_url, mobile: c.about_photo_url_mobile || c.about_photo_url };
}

export function whatsappUrl(c: Contacts = contacts): string | null {
  if (!c.whatsapp_e164) return null;
  const msg = c.whatsapp_msg ? `?text=${encodeURIComponent(c.whatsapp_msg)}` : '';
  return `https://wa.me/${c.whatsapp_e164}${msg}`;
}

export function instagramUrl(c: Contacts = contacts): string | null {
  if (!c.instagram_handle) return null;
  const handle = c.instagram_handle.replace(/^@/, '');
  return `https://www.instagram.com/${handle}`;
}

export function emailUrl(c: Contacts = contacts): string | null {
  if (!c.email) return null;
  return `mailto:${c.email}`;
}
