export const Footer = () => {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="text-sm text-muted-foreground leading-relaxed">
          <p className="mb-4">
            A Comunidade Pandeirando com Carlos Café não é uma empresa associada ao WhatsApp INC, Facebook INC, META ou qualquer uma de suas empresas, e não possui relação comercial ou consentimento para uso.
          </p>
          <p className="mb-4">
            Copyright © 2025. Desenvolvido por Edilson Morais. Ao fazer seu cadastro em nosso site, você concorda com os nossos Termos de Uso e Política de Privacidade.
          </p>
        </div>
        
        <div className="border-t border-border pt-6">
          <h3 className="text-lg font-semibold text-primary mb-3">
            Pandeirando com Carlos Café
          </h3>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
            <a 
              href="https://docs.google.com/document/d/1cujd9EZd4IPvh9SKiMm_WxlPLaWreXOLGpfdPqt5B5U/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Termos de Uso
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a 
              href="https://docs.google.com/document/d/1VfeN-on1or9DW6V9qcRpAqKLE3LOjLdIB6YttO9hhAw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-2">
            <p>Todos os direitos reservados – Edilson Morais 2025</p>
            <p>Contato: 
              <a 
                href="mailto:edilsomdil@gmail.com" 
                className="text-primary hover:text-primary/80 transition-colors ml-1"
              >
                edilsomdil@gmail.com
              </a>
            </p>
            <p>Desenvolvido por Edilson Morais</p>
          </div>
        </div>
      </div>
    </footer>
  );
};