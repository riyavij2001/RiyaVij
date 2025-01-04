import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";
import HTimeline from "../CommonComponents/Timeline";

const Skills = ({ theme }) => {
    return (
        <div
            style={{
                color: "white",
                paddingTop: "3rem",
            }}
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
                {/* About Section */}
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
                    Skills
                </Typography>

            </Container>
        </div>
    );
};

export default Skills;
