// src/components/Navbar.jsx
// Component navigasi — menerima props jumlah film yang disimpan

export default function Navbar({ simpanCount }) {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center justify-between sticky top-0 z-10">

    
      <span className="text-white text-xl font-bold tracking-widest">
         FILM
         <span className="text-red-600">
            yai
         </span>
      </span>

      {/* BADGE SAVED */}
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <span>Tersimpan</span>
        <span className="bg-yellow-400 text-gray-900 font-bold text-xs px-2 py-0.5 rounded-full">
          {simpanCount}
        </span>
      </div>

    </nav>
  );
}