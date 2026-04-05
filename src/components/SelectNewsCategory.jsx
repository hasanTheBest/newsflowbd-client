import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useNewspaper } from "../context/NewsContextProvider";

const categories = [
  "leading",
  "national",
  "international",
  "politics",
  "crime",
  "business",
  "entertainment",
  "sports",
  "countryside",
  "opinion",
  "tech",
  "health",
  "lifestyle",
  "feature",
  "job",
  "education",
  "campus",
  "literature",
  "religion",
  "environment",
  "video",
  "stock",
  "trade",
];

const SelectNewsCategory = () => {
  const { newsCategory, setNewsCategory, setSelectNewsSlug } = useNewspaper();

  const handleChange = (event) => {
    setNewsCategory(event.target.value);
    setSelectNewsSlug([])
  };

  return (
    <FormControl>
      <FormLabel id="news-category-label" sx={{ textTransform: "uppercase" }}>
        Categories
      </FormLabel>

      <RadioGroup
        row
        aria-labelledby="news-category-label"
        name="news-category"
        value={newsCategory}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            value={category}
            control={<Radio />}
            label={category}
            sx={{ textTransform: "capitalize" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default SelectNewsCategory;
