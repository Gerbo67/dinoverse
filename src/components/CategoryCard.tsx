import { Link } from 'react-router-dom';
import type { Category } from '../data/categories';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="relative">
      <div className="absolute -top-16 left-1/3 transform -translate-x-1/4 z-10">
        <img 
          src={category.card.headerImage} 
          alt={category.card.buttonText}
          className="w-64 h-56 object-cover rounded-full shadow-lg"
        />
      </div>
      
      <Link 
        to={`/detail/${category.id}/${category.dinosaurs[0].id}`}
        className="relative mt-8 group transform transition-transform duration-300 hover:scale-110 block"
      >
        <div className="relative h-[600px] w-[350px] rounded-lg overflow-hidden shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${category.card.backgroundImage}')` }}
          />

          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <button className="px-6  backdrop-blur-sm text-white transition-colors" style={{ backgroundColor: `${category.card.bgColorButton}`, width: '80%', height: '50px', fontSize: "20px" }}>
              {category.card.buttonText}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};