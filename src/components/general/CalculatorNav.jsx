import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Sigma, Menu } from 'lucide-react'

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

  const handleLinkClick = () => {
    setIsMenuOpen(false); 
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[var(--color-header)]/80 rounded-se-md border border-[var(--color-border)] shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre */}
          <div className="flex items-center">
            <Sigma className='w-15 h-15 text-[var(--color-text-secondary)]'/>
            <span className="text-lg text-[var(--color-text-secondary)] font-bold tracking-tight md:text-xl">
              Matrix
            </span>
          </div>

          {/* Botones de navegación - Desktop */}
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <BtnLink liName="Básicas" href="/" />
              <BtnLink liName="Cramer" href="/cramer" />
              <BtnLink liName="Operaciones " href="/operaciones" />
              <BtnLink liName="Vectores" href="/Vectores" />
              <BtnLink liName="Vectores3D" href="/Vectores3d" />
            </div>
          </div>

          {/* Botón de menú - Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--color-secondary)]"
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex flex-col gap-2">
            <BtnLink liName="Básicas" href="/" />
              <BtnLink liName="Cramer" href="/cramer" />
              <BtnLink liName="Operaciones " href="/operaciones" />
              <BtnLink liName="Vectores" href="/Vectores" />
              <BtnLink liName="Vectores3D" href="/Vectores3d" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CalculadoraNav;