import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowLeftCircle, Info, Leaf, Volume2, Search, Star } from 'lucide-react';
import { categories } from '../data/categories';

export const DetailView = () => {
  const { categoryId, dinoId } = useParams();
  const navigate = useNavigate();
  const [activeContent, setActiveContent] = useState<'general' | 'fossil'>('general');
  const [activeInfo, setActiveInfo] = useState<'general' | 'diet' | 'discovery'>('general');

  const category = categories.find(c => c.id === categoryId);
  if (!category) return null;

  const currentIndex = category.dinosaurs.findIndex(d => d.id === dinoId);
  if (currentIndex === -1) return null;

  const currentDino = category.dinosaurs[currentIndex];

  // Función para navegar entre dinosaurios
  const navigateToDino = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
        ? (currentIndex - 1 + category.dinosaurs.length) % category.dinosaurs.length
        : (currentIndex + 1) % category.dinosaurs.length;

    // Navegar al dinosaurio siguiente o anterior
    navigate(`/detail/${categoryId}/${category.dinosaurs[newIndex].id}`);
  };

  useEffect(() => {
    // Cambio de contenido: si "Discovery" está activo, mostrar contenido "fossil"
    if (activeInfo === 'discovery') {
      setActiveContent('fossil');
    } else {
      // Para cualquier otro caso (general o diet), asegurarse de mostrar el contenido "general"
      setActiveContent('general');
    }
  }, [activeInfo]);

  const buttons = [
    { icon: Info, label: 'General', onClick: () => setActiveInfo('general') },
    { icon: Leaf, label: 'Diet', onClick: () => setActiveInfo('diet') },
    { icon: Volume2, label: 'Sound', onClick: () => {/* lógica de sonido aquí */} },
    { icon: Search, label: 'Discovery', onClick: () => setActiveInfo('discovery') },
    { icon: Star, label: 'More', onClick: () => {/* lógica para más información aquí */} }
  ];

  // Obtener el contenido correcto en base a la sección activa
  const getInfoContent = () => {
    switch (activeInfo) {
      case 'general': return currentDino.generalInfo;
      case 'diet': return currentDino.dietInfo;
      case 'discovery': return currentDino.discoveryInfo;
      default: return '';
    }
  };

  return (
      <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center pt-16"
          style={{ backgroundImage: "url('https://i.ibb.co/cJbRKxZ/IMG-FONDO.jpg')" }}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-8 flex items-center gap-8">
          {/* Botón de navegación izquierda */}
          <button
              onClick={() => navigateToDino('prev')}
              className="text-white hover:text-gray-200 transition-colors"
          >
            <ArrowLeftCircle size={40} />
          </button>

          {/* Contenedor centralizado de iframe e información */}
          <div className="flex items-start gap-8">
            {/* Sección del iframe con tamaño ajustado */}
            <div className="w-[80%] max-w-3xl">
              <div className="bg-black aspect-video rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <div
                    className="w-full h-full p-4 text-white"
                    dangerouslySetInnerHTML={{
                      __html: activeContent === 'general'
                          ? currentDino.generalIframeContent
                          : currentDino.fossilIframeContent
                    }}
                />
              </div>
              <button
                  onClick={() => navigate('/')}
                  className="mt-4 flex items-center gap-2 text-white hover:text-gray-200"
              >
                <ArrowLeft size={20} />
                Back to Home
              </button>
            </div>

            {/* Sección de información y controles a la derecha */}
            <div className="w-[30%] text-white text-left">
              <h1 className="text-3xl font-bold mb-4">{currentDino.title}</h1>
              <hr className="my-4 opacity-20" />

              <div className="min-h-[200px] mb-4">
                <p>{getInfoContent()}</p>
              </div>

              <hr className="my-4 opacity-20" />

              <div className="grid grid-cols-3 gap-4">
                {buttons.map((btn, idx) => (
                    <React.Fragment key={idx}>
                      <button
                          onClick={btn.onClick}
                          className="flex flex-col items-center justify-center p-4 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <btn.icon size={24} />
                        <span className="mt-2 text-sm">{btn.label}</span>
                      </button>
                      {idx !== buttons.length - 1 && idx % 3 === 2 && (
                          <hr className="col-span-3 my-2 opacity-20" />
                      )}
                    </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Botón de navegación derecha */}
          <button
              onClick={() => navigateToDino('next')}
              className="text-white hover:text-gray-200 transition-colors"
          >
            <ArrowRight size={40} />
          </button>
        </div>
      </div>
  );
};
