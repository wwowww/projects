import { createContext } from "react";

export type ThemeContextType = {
  isDark: boolean,
  setIsDark: any
}

export const ThemeContext = createContext({} as ThemeContextType);
// export const ThemeContext = createContext(null);