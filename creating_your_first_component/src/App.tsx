import { useState, useEffect, useCallback } from "react";
import { Card } from "./components/Card";
import { SearchBar } from "./components/SearchBar";

export interface Character {
  id: number;
  name: string;
  image: string;
}

export const characterUrl = "https://rickandmortyapi.com/api/character";

const fetchCharactersFromApi = async (url: string): Promise<Character[]> => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.results) {
      return data.results.sort(() => 0.5 - Math.random()).slice(0, 10);
    } else {
      console.error("No results found.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  // Load initial characters
  const loadInitialCharacters = useCallback(async () => {
    const initialCharacters = await fetchCharactersFromApi(characterUrl);
    setCharacters(initialCharacters);
  }, []);

  useEffect(() => {
    loadInitialCharacters();
  }, [loadInitialCharacters]);

  // Handle search results
  const handleSearchResults = (characters: Character[]) => {
    setCharacters(characters);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 space-y-4 p-12">
      <SearchBar fetchCharactersFromApi={fetchCharactersFromApi} onCharactersFetched={handleSearchResults} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map(({ id, name, image }) => {
          const isUserOnline = name.length % 2 === 0;
          return (
            <Card
              key={id}
              name={name}
              avatarUrl={image}
              isUserOnline={isUserOnline}
              characterLink={image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
