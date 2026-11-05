# Nuno Pires — Psicólogo Clínico & Psicoterapeuta

Site profissional de Nuno Pires, psicólogo clínico e psicoterapeuta no Porto.

🌐 **Site:** [www.nuno-pires.com](https://www.nuno-pires.com/)

O site está disponível em **português** e **inglês** (botão PT/EN no menu).

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
│   ├── page.tsx                   # Página principal (textos PT/EN incluídos)
│   ├── intervencoes/[id]/page.tsx # Página de detalhe de cada intervenção
│   ├── Footer.tsx                 # Footer das páginas de intervenções
│   ├── ContactInfo.tsx            # Morada, telemóvel e email (usado nos footers)
│   ├── layout.tsx                 # Título, descrição e favicon do site
│   └── globals.css
└── public/                        # Imagens, vídeo e logos
    ├── logo-nuno-pires.svg          # Logo a cores (menu)
    ├── logo-nuno-pires-branco.svg   # Logo branco (footers)
    └── logo-nuno-pires-simbolo.svg  # Símbolo NP (favicon)
```

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
