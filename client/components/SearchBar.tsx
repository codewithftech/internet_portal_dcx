import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full max-w-[338px] h-10 backdrop-blur-[9.6px]">
      <div className="flex items-center gap-3 px-2 py-2 rounded-xl bg-white/90">
        <Search className="w-6 h-6 text-gray-text flex-shrink-0" strokeWidth={1.5} />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 bg-transparent border-none outline-none text-gray-text placeholder:text-gray-text text-base font-normal"
          style={{ fontFamily: 'ADNOC Sans, Inter, sans-serif' }}
        />
      </div>
    </div>
  );
}
