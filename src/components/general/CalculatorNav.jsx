import { Link } from 'react-router-dom';
import { useState } from 'react';

const BtnLink = ({ liName, href }) => {
  return (
    <Link 
      to={href}
      className="px-4 py-2 text-center text-sm font-medium
        text-[var(--color-text-primary)] 
        bg-[var(--color-secondary)] 
        border border-[var(--color-border)]
        rounded-lg
        transition-all duration-200
        hover:bg-[var(--color-secondary-hover)]
        hover:shadow-md
        active:transform active:scale-95
        md:text-base"
    >
      {liName}
    </Link>
  );
}

export function CalculadoraNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[var(--color-header)]/80 rounded-md border border-[var(--color-border)] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre */}
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-lg font-bold tracking-tight md:text-xl">
              Matrix
            </span>
          </div>

          {/* Botones de navegación - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <BtnLink liName="Básicas" href="/" />
              <BtnLink liName="Cramer" href="/cramer" />
              <BtnLink liName="Operaciones " href="/Operaciones" />
              <BtnLink liName="Vectores" href="/Vectores" />
              <BtnLink liName="Vectores3D" href="/Vectores3d" />
            </div>
          </div>

          {/* Botón de menú - Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--color-secondary)]"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex flex-col gap-2">
            <BtnLink liName="Básicas" href="/" />
            <BtnLink liName="Cramer" href="/cramer" />
            <BtnLink liName="Determinantes" href="/determinantes" />
            <BtnLink liName="Inversas" href="/inversas" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CalculadoraNav;