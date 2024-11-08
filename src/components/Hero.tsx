
export const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/72QwbSL/inicio.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4" style={{fontSize: "100px", letterSpacing: "40px"}}>Dinoverse</h1>
        </div>
      </div>
    </div>
  );
};