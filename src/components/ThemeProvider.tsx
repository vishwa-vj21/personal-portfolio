import { createContext, useContext, useEffect, useState } from "react";

type Theme = "blue" | "dark" | "purple";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Retrieve and validate the saved theme during initialization
    const savedTheme = localStorage.getItem("theme") as Theme;
    const validThemes: Theme[] = ["blue", "dark", "purple"];
    return validThemes.includes(savedTheme) ? savedTheme : "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("theme-dark", "theme-blue", "theme-purple");
    root.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
