import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryCard } from './components/CategoryCard';
import { DetailView } from './components/DetailView';
import { categories } from './data/categories';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div 
                className="min-h-screen bg-cover bg-center py-32"
                style={{ backgroundImage: "url('https://i.ibb.co/cJbRKxZ/IMG-FONDO.jpg')" }}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-center gap-8 mt-16">
                    {categories.map((category) => (
                      <CategoryCard key={category.id} category={category} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          } />
          <Route path="/detail/:categoryId/:dinoId" element={<DetailView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;