import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import photo from '../assets/photo.jpg';
import SocialMedia from "../CommonComponents/SocialMedia";

const LandingPage = ({ theme }) => {
  return (
    <div style={{ marginTop: "2rem" }} id="home">
      <Box
        sx={{
          color: theme === "dark" ? "white" : "black",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          paddingTop: { xs: "2rem", md: "3rem" },
          position: "relative",
        }}
      >
        {/* Left Section: Text Content */}
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginTop: { xs: "3rem", md: "5rem" },
          }}
        >
          {/* Hero Section */}
          <Typography
            variant="h5"
            sx={{
              maxWidth: "600px",
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" },
              color: theme === "dark" ? "white" : "rgb(10, 37, 75)",
            }}
          >
            Hi, I'm
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(to right, #00d9ff, #00b8d8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              padding: "4px",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              // Typewriter animation styles
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: 0,
              animation: "typewriter 3s steps(30) 1 normal both, blink 0.75s step-end infinite",
            }}
          >
            <span >Riya Vij</span>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              maxWidth: "600px",
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" },
              color: theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgb(10, 37, 75)",
              padding: "10px",
            }}
          >
            Full-Stack Developer: Turning Ideas into Seamless Digital Realities
          </Typography>

          {/* Button Section */}
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to right, #00d9ff, #00b8d8)",
              color: "#0d1b2a",
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderRadius: "25px",
              textTransform: "none",
              marginBottom: { xs: "2rem", md: "3rem" },
              boxShadow: "0px 5px 15px rgba(0, 217, 255, 0.4)",
              "&:hover": {
                background: "linear-gradient(to right, #00b8d8, #0088a9)",
                boxShadow: "0px 5px 20px rgba(0, 217, 255, 0.6)",
              },
              padding: { xs: "8px 20px", md: "10px 30px" },
            }}
            href="mailto:riyavij2001@gmail.com"
          >
            Get in touch
          </Button>

          {/* Social Media - Only visible on medium screens and above */}
          <Box
            sx={{
              display: { xs: "none", md: "block" }, // Hide on xs, show on md and above
              marginLeft: { xs: "0", md: "0rem" }, // Adjust left margin for larger screens
              marginRight: {xs: "0", md: "40rem"}
            }}
          >
            <SocialMedia />
          </Box>
        </Container>

        {/* Right Section: Image */}
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: { xs: "block", md: "block" },
              width: { xs: "250px", sm: "350px", md: "500px" },
              height: { xs: "250px", sm: "350px", md: "500px" },
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src={photo}
              alt="Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Add CSS for typewriter effect */}
      <style>
        {`
          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }
          @keyframes blink {
            0%, 50% {
              border-color: transparent;
            }
            50%, 100% {
              border-color: #00d9ff;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;
