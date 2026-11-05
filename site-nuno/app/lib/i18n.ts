export type Language = 'pt' | 'en';

export const SITE_URL = 'https://www.nuno-pires.com';

// Português fica na raiz (/), inglês em /en
export function localePath(lang: Language, path: string = '/'): string {
  if (lang === 'pt') return path;
  return path === '/' ? '/en' : `/en${path}`;
}

// Links hreflang entre as versões PT e EN da mesma página (para o Google)
export function alternates(lang: Language, path: string = '/') {
  return {
    canonical: localePath(lang, path),
    languages: {
      'pt-PT': localePath('pt', path),
      en: localePath('en', path),
      'x-default': localePath('pt', path),
    },
  };
}
