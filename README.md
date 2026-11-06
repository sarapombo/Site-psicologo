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

## Onde mudar o quê

| Quero mudar…                                   | Ficheiro                               |
| ---------------------------------------------- | -------------------------------------- |
| Textos do site (menu, topo, "A Minha Prática", formação, footer…) | `site-nuno/app/content/site.ts` |
| Morada, telemóvel, email, WhatsApp, Instagram  | `site-nuno/app/content/site.ts` (`contactos`) |
| Intervenções (cartão, página, fotos, etiquetas) | `site-nuno/app/content/intervencoes.ts` |
| Aspeto de uma secção                           | `site-nuno/app/components/...`         |

Cada texto tem a versão portuguesa (`pt`) e inglesa (`en`) lado a lado. Se faltar uma delas, o build dá erro.

**Para acrescentar uma intervenção:** basta acrescentar uma entrada em `content/intervencoes.ts`. O cartão na página principal, as páginas PT e EN, o sitemap e a imagem de partilha são gerados automaticamente.

## Estrutura

```
site-nuno/
├── app/
│   ├── (pt)/                          # Versão portuguesa (/, /intervencoes/...)
│   │   ├── layout.tsx                 #   <html lang="pt-PT">
│   │   ├── page.tsx                   #   /
│   │   ├── opengraph-image.tsx        #   imagem de partilha da página principal
│   │   └── intervencoes/[id]/         #   /intervencoes/psicodrama, ... (+ imagem de partilha)
│   ├── (en)/                          # Versão inglesa (/en, /en/intervencoes/...)
│   │   ├── layout.tsx                 #   <html lang="en">
│   │   └── en/...                     #   mesma estrutura que (pt)
│   ├── content/
│   │   ├── site.ts                    # Todos os textos PT/EN e dados de contacto
│   │   └── intervencoes.ts            # Lista das intervenções (textos PT/EN, ícone, fotos)
│   ├── components/
│   │   ├── Header.tsx                 # Menu (igual em todas as páginas)
│   │   ├── Footer.tsx                 # Footer (igual em todas as páginas)
│   │   ├── ContactInfo.tsx            # Cartões de morada, telemóvel e email
│   │   ├── HomePage.tsx               # Página principal (junta as secções)
│   │   ├── home/                      # Secções: Hero, About, Training, Approaches
│   │   └── InterventionPage.tsx       # Página de cada intervenção
│   ├── lib/
│   │   ├── i18n.ts                    # Idiomas, endereços /en e links hreflang
│   │   ├── metadata.ts                # Título, descrição e partilha (Open Graph)
│   │   ├── og.tsx                     # Desenho das imagens de partilha
│   │   ├── structuredData.ts          # Dados para o Google (morada, telefone…)
│   │   └── routes.tsx                 # Código comum às páginas PT e EN
│   ├── sitemap.ts                     # /sitemap.xml
│   ├── robots.ts                      # /robots.txt
│   └── globals.css
├── assets/fonts/                      # Tipos de letra das imagens de partilha (Lora, Geist — licença OFL)
└── public/                            # Imagens, vídeo e logos
    ├── hero-1080.mp4 / hero-720.mp4     # Vídeo do topo (computador / telemóvel), comprimido
    ├── hero-poster.jpg                  # Imagem que aparece enquanto o vídeo carrega
    ├── logo-nuno-pires.svg              # Logo a cores (menu)
    ├── logo-nuno-pires-branco.svg       # Logo branco (footer)
    ├── logo-nuno-pires-simbolo.svg      # Símbolo NP (favicon)
    └── icon-192.png / apple-icon.png    # Ícone para o Google e para o iPhone
```

**Fotos:** usar sempre o componente `Image` do Next.js (já usado em todo o site), que serve cada foto em formato leve (AVIF/WebP) e no tamanho certo para cada ecrã. **Vídeo:** se for trocado, deve ser comprimido (ver `hero-*.mp4`); o original em 4K tinha 24 MB.

As pastas `(pt)` e `(en)` não aparecem no endereço: servem só para cada idioma ter o seu próprio layout. As páginas são geradas como HTML estático no build, já com os textos, para o Google as conseguir ler.

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
