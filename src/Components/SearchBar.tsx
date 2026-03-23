import React, { useState } from "react";

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex space-x-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border px-2 py-1 rounded w-full"
        placeholder="Rechercher..."
      />
      <button
        onClick={() => onSearch(query)}
        className="bg-green-600 text-white px-4 py-1 rounded"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;