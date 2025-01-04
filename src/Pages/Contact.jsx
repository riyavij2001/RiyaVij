import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";
import HTimeline from "../CommonComponents/Timeline";

const Contact = ({theme}) => {
    return (
        <div
            style={{
                color: "white",
                paddingTop: "3rem",
            }}
            id="contact"
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: "4rem",
                }}
            >
                {/* Contact Section */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "bold",
                        background: "linear-gradient(to right, #00d9ff, #00b8d8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        padding: "4px",
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    }}
                >
                    Contact Me
                </Typography>


                {/* Introduction Section */}
                <Typography
                    variant="h5"
                    sx={{
                        maxWidth: "80rem",
                        fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
                        color:  theme === 'dark' ? "rgba(255, 255, 255, 0.8)": "black",
                        padding: "20px",
                        lineHeight: "1.6",
                        marginTop: "2rem",
                    }}
                >
                    <span style={{ color: "#00d9ff" }}>Say Hello! </span> Interested in working together? Or maybe you just want to chat?
                    Either way, I'd love to hear from you!
                </Typography>

                {/* Social Icons */}
                <Box
                    sx={{
                        marginTop: "3rem",
                        display: "flex",
                        flexDirection:"row",
                        gap: "1.5rem",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom:"2rem"
                    }}
                >
                    <a href="https://github.com/riyavij2001" target="_blank" rel="noopener noreferrer">
                        <GitHub sx={{ color: "#00b8d8", fontSize: "2.5rem" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/riya-vij-13489a19b/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn sx={{ color: "#00b8d8", fontSize: "2.5rem" }} />
                    </a>
                    <a href="mailto:riyavij2001@gmail.com">
                        <MailOutline sx={{ color: "#00b8d8", fontSize: "2.5rem" }} />
                    </a>
                </Box>
            </Container>

        </div>
    );
};

export default Contact;
