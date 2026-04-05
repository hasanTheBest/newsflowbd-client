import { Box, Drawer, IconButton, Typography } from '@mui/material'
import SelectNewsCategory from './SelectNewsCategory'
import SelectNewspaperName from './SelectNewspaperName'
import SubmissionButton from './SubmissionButton'
import CloseIcon from "@mui/icons-material/Close"

export default function MenuDrawerContent({drawerOpen, toggleDrawer}) {
  return (
    <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ maxWidth: "900px", mx: "auto", p: 2 }}>

          {/* HEADER (Title + Close Button) */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6">Select Category and News Source</Typography>

            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* DRAWER CONTENT */}
          <Box>
            <SelectNewsCategory />
            <SelectNewspaperName />
            <SubmissionButton />
          </Box>

        </Box>
      </Drawer>
  )
}