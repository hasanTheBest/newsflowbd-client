import { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  InputBase,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { SettingContext } from "../context/SettingContextProvider";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(SettingContext);

  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth={false} sx={{ maxWidth: "900px" }}>
          <Toolbar disableGutters sx={{ gap: 2 }}>

            {/* LEFT */}
            <Box sx={{ minWidth: "180px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", lineHeight: 1 }}>
                News Flow Bd
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                All news in one place
              </Typography>
            </Box>

            {/* CENTER */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                bgcolor: "background.paper",
                px: 1,
                borderRadius: 1,
              }}
            >
              <SearchIcon sx={{ mr: 1, opacity: 0.6 }} />
              <InputBase placeholder="Search news..." fullWidth />
            </Box>

            {/* DARK MODE TOGGLE */}
            <IconButton color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            {/* MENU */}
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* DRAWER */}
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
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
            <Typography variant="h6">Menu</Typography>

            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* DRAWER CONTENT */}
          <Typography variant="body2">
            Add your links here
          </Typography>

        </Box>
      </Drawer>
    </>
  );
}