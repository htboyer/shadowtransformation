/** Constantes publiques du site vitrine (aucune donnée privée). */
export const SITE_URL = "https://www.shadowtransformation.fr";
export const CONTACT_EMAIL = "contact@shadowtransformation.fr";
export const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Premier échange confidentiel — Shadow Transformation")}&body=${encodeURIComponent("Bonjour, je souhaite échanger au sujet d’une transformation à sécuriser, structurer ou accompagner.")}`;
export const LINKEDIN_COMPANY = "https://www.linkedin.com/company/shadow-transformation/";
export const LINKEDIN_HUGUES = "https://www.linkedin.com/in/hugues-temple-boyer-b44b1926/";
export const AUTHOR_NAME = "Hugues Temple-Boyer";
export const SHARE_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/f52b5a4d-88bd-4406-b518-868d35e8c4c9";
export const LOGO_URL = `${SITE_URL}/logo-shadow-transformation.png`;

export const absoluteUrl = (path: string) => `${SITE_URL}${path}`;
