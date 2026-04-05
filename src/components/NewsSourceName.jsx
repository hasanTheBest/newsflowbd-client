import {
  Box
} from "@mui/material";

import SelectNewspaperName from "./SelectNewspaperName";
import SelectNewsCategory from "./SelectNewsCategory";
import SubmissionButton from "./SubmissionButton";

export default function NewsSourceName() {
  

  return (
    <Box sx={{ width: "100%" }}>
      <SelectNewsCategory />
      <SelectNewspaperName />
      <SubmissionButton />
    </Box>
  );
}