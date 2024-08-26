import React, { useCallback, useState } from "react";
import { type Character, characterUrl } from "../../App";

interface SearchBarProps {
  fetchCharactersFromApi: (url: string) => Promise<Character[]>;
  onCharactersFetched: (characters: Character[]) => void; // Callback to handle search results
}

const SearchBar: React.FC<SearchBarProps> = ({ fetchCharactersFromApi, onCharactersFetched }) => {
  const [search, setSearch] = useState("");

  // Function to handle search input change
  const handleChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
    if (searchValue) {
      const url = `${characterUrl}/?name=${searchValue}`;
      const characters = await fetchCharactersFromApi(url);
      onCharactersFetched(characters);
    } else {
      onCharactersFetched([]);
    }
  }, [])

  return (
    <input
      type="text"
      placeholder="Pesquisar por um personagem"
      value={search}
      onChange={handleChange}
      className="p-2 border border-gray-300 rounded w-96"
    />
  );
};

export { SearchBar };
