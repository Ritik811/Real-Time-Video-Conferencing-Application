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

function HomeComponentUI() {
  const meetingCode = "";
  const generatedCode = "abcd-efgh";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 1. RESPONSIVE NAVBAR */}

      {/* 2. HERO SECTION */}
      <Container
        maxWidth="lg"
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          py: { xs: 4, md: 0 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          {/* Left Panel */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Box sx={{ maxWidth: { xs: "100%", md: "500px" }, mx: "auto" }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 400,
                  color: "#202124",
                  mb: 2,
                  fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3rem" },
                  lineHeight: 1.2,
                }}
              >
                Premium video meetings.
                <br />
                Now free for everyone.
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  color: "#5f6368",
                  mb: 4,
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  lineHeight: 1.5,
                }}
              >
                Providing quality video calls just like quality education.
                Connect, collaborate, and celebrate from anywhere.
              </Typography>

              {/* STACKED INTERACTIVE LAYOUT */}
              <Stack
                spacing={3}
                sx={{ maxWidth: "450px", mx: { xs: "auto", md: "0" } }}
              >
                {/* Create New Meeting Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    border: "1px solid #e0e0e0",
                    borderRadius: "12px",
                    bgcolor: "#f8f9fa",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    mb={1.5}
                    color="#202124"
                  >
                    Create a New Meeting
                  </Typography>

                  {/* Toggled views into a single visual placeholder stack */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        bgcolor: "#e8f0fe",
                        p: 1.5,
                        borderRadius: "8px",
                        mb: 2,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#1a73e8",
                          fontWeight: 500,
                          letterSpacing: "1px",
                        }}
                      >
                        {generatedCode}
                      </Typography>
                      <IconButton size="small" sx={{ color: "#1a73e8" }}>
                        <ContentCopyIcon fontSize="small" />
                      </IconButton>
                    </Box>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: "#188038",
                        textTransform: "none",
                        height: "48px",
                        fontSize: "16px",
                        "&:hover": { bgcolor: "#13622b" },
                      }}
                    >
                      Start Meeting Now
                    </Button>
                  </Box>
                </Paper>

                <Divider sx={{ color: "#5f6368", fontSize: "14px" }}>
                  OR
                </Divider>

                {/* Join Existing Meeting Card */}
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    border: "1px solid #e0e0e0",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    mb={1.5}
                    color="#202124"
                  >
                    Join Existing Meeting
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <TextField
                      value={meetingCode}
                      placeholder="Enter code (e.g. abcd-efgh)"
                      variant="outlined"
                      size="small"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <KeyboardIcon
                              sx={{ color: "#5f6368", fontSize: "20px" }}
                            />
                          </InputAdornment>
                        ),
                        sx: {
                          borderRadius: "8px",
                          bgcolor: "#fff",
                          height: "48px",
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#1a73e8",
                        textTransform: "none",
                        px: 3,
                        borderRadius: "8px",
                        boxShadow: "none",
                        "&:hover": { bgcolor: "#1557b0" },
                      }}
                    >
                      Join
                    </Button>
                  </Stack>
                </Paper>
              </Stack>
            </Box>
          </Grid>

          {/* Right Panel - Illustration */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              order: { xs: -1, md: 1 },
            }}
          >
            <Box
              component="img"
              src="/logo3.png"
              alt="Video Call Illustration"
              sx={{
                width: "100%",
                maxWidth: { xs: "280px", sm: "400px", md: "500px" },
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.08)",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomeComponentUI;
