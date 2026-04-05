
import { Button, Box } from "@mui/material";
import { useNewspaper } from "../context/NewsContextProvider";

const SubmissionButton = () => {
  const { selectNewsSlug, resetNewsCatAndSourceName } = useNewspaper();

  return (
    <Box width="100%" component="form" mt={2} textAlign="center">
      <Button
        type="button"
        variant="outlined"
        size="large"
        color="secondary"
        onClick={resetNewsCatAndSourceName}
        sx={{mr: 2}}
      >
        Reset
      </Button>
      <Button
        type="button"
        variant="contained"
        size="large"
        color="primary"
        disabled={!selectNewsSlug.length}
        // onClick={startFetchingNews}
      >
        Submit
      </Button>
    </Box>
  );
};

export default SubmissionButton;
