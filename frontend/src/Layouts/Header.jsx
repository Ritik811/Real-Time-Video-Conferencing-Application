import React from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  AppBar,
  Toolbar,
  Stack,
  InputAdornment,
  Grid,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
export const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: "1px solid #e0e0e0", px: { xs: 1, md: 2 } }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 !important",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <VideoCallIcon
            sx={{ color: "#1a73e8", fontSize: { xs: 28, md: 32 } }}
          />
          <Typography
            variant="h6"
            sx={{
              color: "#5f6368",
              fontWeight: 500,
              fontSize: { xs: "1rem", md: "1.25rem" },
              letterSpacing: "-0.5px",
            }}
          >
            BUEST Call
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, md: 2 },
          }}
        >
          <Button
            color="inherit"
            startIcon={<HistoryIcon />}
            sx={{
              color: "#5f6368",
              textTransform: "none",
              fontSize: { xs: "13px", md: "15px" },
              minWidth: "auto",
            }}
          >
            <Box
              component="span"
              sx={{ display: { xs: "none", sm: "inline" } }}
            >
              History
            </Box>
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              fontSize: { xs: "12px", md: "14px" },
              px: { xs: 1, md: 2 },
            }}
          >
            About
          </Button>
          <IconButton
            color="error"
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <LogoutIcon />
          </IconButton>
          <Button
            variant="outlined"
            color="error"
            startIcon={<LogoutIcon />}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              display: { xs: "none", sm: "flex" },
            }}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
