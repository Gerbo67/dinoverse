import { Link } from 'react-router-dom';
import type { Dinosaur } from '../data/dinosaurs';

interface DinoCardProps {
  dino: Dinosaur;
}

export const DinoCard = ({ dino }: DinoCardProps) => {
  return (
    <div className="relative">
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
        <img 
          src={dino.card.headerImage} 
          alt={dino.detailPage.title}
          className="w-32 h-32 object-cover rounded-full shadow-lg"
        />
      </div>
      
      <Link 
        to={`/detail/${dino.id}`}
        className="relative mt-8 group transform transition-transform duration-300 hover:scale-110 block"
      >
        <div className="relative h-[500px] w-[350px] rounded-lg overflow-hidden shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${dino.card.backgroundImage}')` }}
          />

          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <button className="px-6 py-3 bg-blue-500/70 backdrop-blur-sm text-white rounded-lg transition-colors hover:bg-blue-600/70">
              {dino.card.buttonText}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};