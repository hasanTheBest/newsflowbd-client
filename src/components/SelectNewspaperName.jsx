import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import newspaperNames from "../assets/newspapersNames.json";
import newsCategories from "../assets/newspapersCategories.json";
import { useNewspaper } from "../context/NewsContextProvider";

const SelectNewspaperName = () => {
  const { selectNewsSlug, setSelectNewsSlug, newsCategory } = useNewspaper();

  const toggleNewspaper = (slug) => {
    setSelectNewsSlug((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug]
    );
  };

  return (
    <Box>
      {Object.entries(newspaperNames).map(([groupName, newspapers]) => (
        <Box key={groupName} mb={3}>
          <Typography
            variant="body1"
            color="primary"
            sx={{ textTransform: "uppercase", mb: 1 }}
          >
            {groupName}
          </Typography>

          <FormGroup>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {newspapers.map(({ name, slug }) => {
                const supportedCategories =
                  newsCategories?.[slug] ?? [];

                return (
                  <FormControlLabel
                    key={slug}
                    control={<Checkbox />}
                    label={name}
                    checked={selectNewsSlug.includes(slug)}
                    disabled={!supportedCategories.includes(newsCategory)}
                    onChange={() => toggleNewspaper(slug)}
                  />
                );
              })}
            </Box>
          </FormGroup>
        </Box>
      ))}
    </Box>
  );
};

export default SelectNewspaperName;
