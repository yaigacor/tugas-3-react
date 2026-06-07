

import { useState } from "react";
import Navbar    from "./components/Navbar.jsx";
import MovieCard from "./components/MovieCard.jsx";

const MOVIES = [
  { id: 1, title: "Dune: Part Two",genre: "Sci-Fi",    rating: 9.1, poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
  { id: 2, title: "Oppenheimer",genre: "Drama",     rating: 8.9, poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" },
  { id: 3, title: "The Batman", genre: "Action",    rating: 8.7, poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg" },
  { id: 4, title: "Interstellar",genre: "Sci-Fi",    rating: 9.3, poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: 5, title: "Parasite", genre: "Drama",     rating: 9.2, poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
  { id: 6, title: "Mad Max: Fury Road",genre: "Action",    rating: 8.8, poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },
  { id: 7, title: "Inception",genre: "Sci-Fi",   rating: 9.0, poster: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" },
  {  id: 8, title: "The Godfather", genre: "Drama", rating: 9.4, poster: "https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg"  },
  { id: 9, title: "John Wick" ,genre: "Action",   rating: 8.6, poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg" },
  { id: 10, title: "Get Out", genre: "Horror",   rating: 8.4, poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg" },
  { id: 11, title: "Spirited Away",  genre: "Animation", rating: 9.3, poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg" },
  { id: 12, title: "Joker",      genre: "Drama",    rating: 8.5, poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
];

export default function App() {
  
  const [simpan, setsimpan] = useState([]);

  
  function tombolsimpan(id) {
    setsimpan(daftar =>
      daftar.includes(id)
        ? daftar.filter(x => x !== id)  
        : [...daftar, id]               
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-indigo-800 text-white">

     
      <Navbar simpanCount={simpan.length} />

      <div className="px-6 py-10 border-b border-gray-800">
        <h1 className="text-3xl font-bold mb-1">
          Temukan Film <span className="text-red-600">Favoritmu</span>
        </h1>
        <p className="text-gray-400 text-sm">{MOVIES.length} film tersedia</p>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {MOVIES.map(movie => (
            
            <MovieCard
              key={movie.id}
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
              poster={movie.poster}
              isLiked={simpan.includes(movie.id)}
              onToggleLike={() => tombolsimpan(movie.id)}
            />
          ))}
        </div>
      </main>

    </div>
  );
}