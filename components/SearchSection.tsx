"use client"

import SearchForm from "@/components/SearchForm";
import useGlobalContext from "@/context/useContext";
import { useEffect } from 'react';

// Move client-side logic to a client component
function SearchSection({ query }: { query: string | null }) {
  // Import here to avoid SSR issues
  // const useGlobalContext = require("@/context/useContext").default;
  const { AttemptAtSave, searchHistory } = useGlobalContext();

  useEffect(() => {
    if (query) {
      AttemptAtSave(query);
    }
  }, [query]);

  return (
    <SearchForm query={query} searchHistory={searchHistory} />
  );
}

export default SearchSection