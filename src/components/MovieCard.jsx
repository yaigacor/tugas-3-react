// props: ganti emoji → poster
export default function MovieCard({ title, genre, rating, poster, isLiked, onToggleLike }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50">

      
      <div className="h-56 overflow-hidden">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
\
      <div className="p-4">
        <p className="text-white font-bold text-base truncate mb-1">{title}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded-full">{genre}</span>
          <span className="text-yellow-400 text-sm font-bold">★ {rating}</span>
        </div>
        <button
          onClick={() => onToggleLike()}
          className={`w-full py-2 rounded-lg text-sm font-semibold transition-all duration-200
            ${isLiked
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 text-gray-300"
            }`}
        >
          {isLiked ? "✔️ Tersimpan" : "Simpan"}
        </button>
      </div>
    </div>
  );
}