import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useContext, useMemo } from "react";
import { SettingContext } from "./context/SettingContextProvider";
import NewsContextProvider from "./context/NewsContextProvider";

function App() {
  const { darkMode } = useContext(SettingContext);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <NewsContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
      </NewsContextProvider>
    </ThemeProvider>
    </>
  );
}

export default App;