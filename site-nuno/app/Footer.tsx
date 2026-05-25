import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    // Reduzi a altura com pt-12 e pb-8 e apliquei o gradient bg-gradient-to-b
    <footer className="bg-gradient-to-b from-[#4f5e38] to-[#6b7d52] text-white pt-12 pb-8 px-6 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Reduzi o mb-24 para mb-12 para encurtar a altura */}
        <div className="grid md:grid-cols-2 gap-10 mb-12 items-center">
          
          {/* Coluna 1: Logo Dr. Nuno */}
          <div className="space-y-4 text-center md:text-left">
            <img src="/logo-horizontal.svg" alt="Nuno Pires" className="h-16 md:h-20 w-auto brightness-0 invert mx-auto md:mx-0 opacity-90" />
            <p className="text-white/60 text-base font-serif italic max-w-xs mx-auto md:mx-0">
              Sentir, Agir e Transformar.
            </p>
          </div>

          {/* Coluna 2: Redes Sociais */}
          <div className="text-center md:text-right space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#d76d2d]">Redes Sociais</h4>
            <div className="flex justify-center md:justify-end gap-4">
            <a href="https://www.instagram.com/nunomcpires" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#d76d2d] transition-all border border-white/10 shadow-lg"> <Instagram size={20} /></a>
            </div>
          </div>
        </div>

        {/* Barra Final: Copyright e Teu Logo */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-[10px] tracking-[0.3em] uppercase font-medium text-white/40 text-center md:text-left">
            © 2026 Nuno Pires — Todos os direitos reservados
          </div>
          
          {/* Teu Logo Clicável */}
          <div className="flex items-center gap-3 group">
            <span className="text-[8px] tracking-[0.3em] uppercase text-white/30">Desenvolvido por</span>
            <a 
              href="https://linktr.ee/sarapombo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-all duration-500 hover:scale-110 hover:rotate-3"
            >
              <img 
                src="/sarapombo.png" 
                alt="Sara Pombo Logo" 
                className="h-12 w-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" 
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}