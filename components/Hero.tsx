import React from "react";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center gap-36 h-[700px] hero p-4">
      <div className="flex flex-col items-center w-3/5 space-y-6 text-center">
        <p className="text-5xl font-extrabold leading-tight text-gray-800 tracking-wider">
          Trouvez <span className="text-red-600">la voiture parfaite</span> qui
          vous correspond
        </p>
        <p className="text-lg text-gray-600">
          Explorez notre sélection exclusive de voitures d'occasion et neuves,
          avec les meilleures offres disponibles.
        </p>
        <button className="flex items-center justify-center gap-2 bg-red-600 text-white text-lg font-semibold rounded-full px-6 py-3 hover:bg-red-700 transition-transform transform hover:scale-105">
          Voir les offres
          <MoveRight />
        </button>
      </div>

      <div className="hero-image w-1/2"></div>
    </div>
  );
};

export default Hero;
