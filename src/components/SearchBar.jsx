"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        type="text"
        name=""
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
