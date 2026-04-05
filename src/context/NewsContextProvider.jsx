// Improved version
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const BASEURL = "http://localhost:5173";

const NewsContext = createContext(null);

const NewsContextProvider = ({ children }) => {
  const [selectNewsSlug, setSelectNewsSlug] = useState([
    "prothomalo",
    "thedailystar",
  ]);
  const [newsCategory, setNewsCategory] = useState("leading");

  function resetNewsCatAndSourceName() {
    setNewsCategory("leading")
    setSelectNewsSlug([])
  }
  // const [newsData, setNewsData] = useState([]);
  // const [newsError, setNewsError] = useState(false);
  // const [shouldFetch, setShouldFetch] = useState(false);
  // const [fetchIndicator, setFetchIndicator] = useState(["prothomalo",
  //   "thedailystar"]);

  // const urlToFetch = useMemo(() => {
  //   return `${BASEURL}/news?newspaperNames=${selectedUrls.join(
  //     ","
  //   )}&newsCat=${newsCategory}`;
  // }, [selectedUrls, newsCategory]);

  // const startFetchingNews = () => {
  //   setNewsData([]);
  //   setFetchIndicator(selectedUrls);
  //   setShouldFetch(true);
  //   setNewsData([])
  //   setNewsError(false)
  // };

  return (
    <NewsContext.Provider
      value={{
        selectNewsSlug,
        setSelectNewsSlug,
        newsCategory,
        setNewsCategory,
        resetNewsCatAndSourceName
        // newsData,
        // setNewsData,
        // newsError,
        // fetchIndicator,
        // urlToFetch,
        // setShouldFetch,
        // startFetchingNews,
        // shouldFetch
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;

export const useNewspaper = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNewspaper must be used inside NewspaperProvider");
  }
  return context;
};
