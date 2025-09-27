import { createContext } from "react";

declare interface GlobalContextType {
  AttemptAtSave: (params?: string | null) => void;
  searchHistory: string[]
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);