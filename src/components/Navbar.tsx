import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Solo agregar el listener de scroll cuando estamos en la página de inicio
    if (isHomePage) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 bg-transparent`;
  const linkClasses = `transition-colors duration-300 text-white`;

  return (
      <nav className={navClasses}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Sección izquierda */}
            <Link to="/" className={`${linkClasses} font-bold text-xl`}>
              Inicio
            </Link>

            {/* Sección central: "Dinoverse" */}
            {/* Siempre mostrar "Dinoverse" si no estamos en la página de inicio */}
            {/* Mostrar "Dinoverse" al hacer scroll si estamos en la página de inicio */}
            {(isScrolled && isHomePage) || !isHomePage ? (
                <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-white font-bold text-4xl">
                Dinoverse
              </span>
                </div>
            ) : null}

            {/* Sección derecha */}
            <div className="flex items-center space-x-8">
              <Link to="/" className={`${linkClasses} text-lg`}>
                Habitat
              </Link>
              <Link to="/" className={`${linkClasses} text-lg`}>
                Dinosaurios
              </Link>
              <Link to="/" className={`${linkClasses} text-lg`}>
                Fósiles
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
};
