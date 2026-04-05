import { createContext, useEffect, useState } from "react";

export const SettingContext = createContext();

export default function SettingContextProvider({ children }) {
  const getInitialMode = () => {
    const saved = localStorage.getItem("darkMode");

    if (saved !== null) {
      return JSON.parse(saved);
    }

    // System preference fallback
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialMode);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <SettingContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </SettingContext.Provider>
  );
}