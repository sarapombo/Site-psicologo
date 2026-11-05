# Nuno Pires — Psicólogo Clínico & Psicoterapeuta

Site profissional de Nuno Pires, psicólogo clínico e psicoterapeuta no Porto.

🌐 **Site:** [www.nuno-pires.com](https://www.nuno-pires.com/)

O site está disponível em **português** (`/`) e **inglês** (`/en`), com o botão PT/EN no menu.

## Tecnologias

- [Next.js](https://nextjs.org) 16 (App Router) e React 19
- [Tailwind CSS](https://tailwindcss.com) 4
- [Framer Motion](https://www.framer.com/motion/) para as animações
- [Lucide](https://lucide.dev) para os ícones
- Alojamento na [Vercel](https://vercel.com)

## Estrutura

```
site-nuno/
├── app/
│   ├── (pt)/                         # Versão portuguesa
│   │   ├── layout.tsx                #   <html lang="pt-PT">, título e descrição PT
│   │   ├── page.tsx                  #   /
│   │   └── intervencoes/[id]/page.tsx #  /intervencoes/psicodrama, ...
│   ├── (en)/                         # Versão inglesa
│   │   ├── layout.tsx                #   <html lang="en">, título e descrição EN
│   │   └── en/
│   │       ├── page.tsx              #   /en
│   │       └── intervencoes/[id]/page.tsx # /en/intervencoes/psicodrama, ...
│   ├── components/
│   │   ├── HomePage.tsx              # Página principal (textos PT/EN incluídos)
│   │   ├── InterventionPage.tsx      # Página de detalhe de cada intervenção
│   │   ├── Footer.tsx                # Footer das páginas de intervenções
│   │   └── ContactInfo.tsx           # Morada, telemóvel e email (usado nos footers)
│   ├── content/intervencoes.ts       # Textos e imagens de cada intervenção (PT/EN)
│   ├── lib/i18n.ts                   # Idiomas, endereços /en e links hreflang
│   ├── sitemap.ts                    # /sitemap.xml
│   ├── robots.ts                     # /robots.txt
│   └── globals.css
└── public/                           # Imagens, vídeo e logos
    ├── logo-nuno-pires.svg             # Logo a cores (menu)
    ├── logo-nuno-pires-branco.svg      # Logo branco (footers)
    └── logo-nuno-pires-simbolo.svg     # Símbolo NP (favicon)
```

As pastas `(pt)` e `(en)` não aparecem no endereço: servem só para cada idioma ter o seu próprio layout. As páginas são geradas como HTML estático no build, já com os textos, para o Google as conseguir ler.

**Para adicionar uma intervenção:** acrescentar uma entrada em `content/intervencoes.ts` e o cartão correspondente em `components/HomePage.tsx`. As páginas PT e EN e o sitemap são gerados automaticamente.

## Desenvolvimento local

```bash
cd site-nuno
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) no browser.

## Publicação

Cada `push` para a branch `main` publica automaticamente o site em produção na Vercel.

---

Desenvolvido por [Sara Pombo](https://linktr.ee/sarapombo).
