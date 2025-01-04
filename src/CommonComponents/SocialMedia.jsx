import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/material';

const SocialMedia = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: { xs: "0rem", md: "6rem" }
      }}
    >
      <a href="mailto:riyavij2001@gmail.com">
        <EmailIcon sx={{ margin: "5px", color: "#00b8d8" }} />
      </a>
      <a href="https://www.linkedin.com/in/riya-vij-13489a19b/">
        <LinkedInIcon sx={{ margin: "5px", color: "#00b8d8" }} />
      </a>
      <a href="https://github.com/riyavij2001">
        <GitHubIcon sx={{ margin: "5px", color: "#00b8d8" }} />
      </a>
      <Box
        sx={{
          // position: "absolute",
          bottom: "-7rem",
          width: "2px",
          height: "135px",
          backgroundColor: "#00b8d8",
          marginLeft: "1rem",
        }}
      />
    </Box>
  );
}

export default SocialMedia;
