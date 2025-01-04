import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material"; 
import HTimeline from "../CommonComponents/Timeline";

const AboutMe = ({theme}) => {
    return (
        <div
            style={{
                color: "white",
                paddingTop: "3rem",
            }}
            id="about"
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
                    About Me
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
                    I'm <span style={{ color: "#00d9ff" }}>Riya Vij</span>, a passionate Full-Stack Developer with a 
                    love for creating seamless, user-friendly web applications. From designing responsive, 
                    interactive front-end experiences with React and Vue.js to building powerful, scalable 
                    back-end systems with Node.js and MongoDB, I specialize in crafting solutions that are 
                    both functional and aesthetically pleasing. I thrive on solving complex problems, 
                    optimizing performance, and ensuring every project I work on delivers an exceptional 
                    user experience. Let's turn your ideas into digital realities!
                </Typography>

                {/* My Journey Section */}
                {/* <Box sx={{ maxWidth: "900px", textAlign: "center", marginTop: "3rem" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        My Journey
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "rgba(255, 255, 255, 0.8)",
                            marginTop: "1rem",
                            lineHeight: "1.8",
                            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.4rem" },
                        }}
                    >
                        I started my journey as a developer with a fascination for solving problems and creating things that have a tangible impact on people's lives. From learning HTML and CSS in my early days to mastering JavaScript, React, and Node.js, I've continuously sought out challenges that push my limits.
                        <br />
                        <br />
                        Today, I build robust web applications that help businesses and individuals solve real-world problems. My goal is to continue growing as a developer and contribute to impactful projects that make a difference.
                    </Typography>
                </Box> */}

                {/* Skills Section */}
                {/* <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "4rem",
                        gap: 5,
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            Front-End Development
                        </Typography>
                        <Typography sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                            React, HTML, CSS, JavaScript, Material UI
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            Back-End Development
                        </Typography>
                        <Typography sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                            Node.js, Express.js, MongoDB, SQL
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            DevOps & Cloud
                        </Typography>
                        <Typography sx={{ color: "rgba(255, 255, 255, 0.8)" }}>
                            Docker, Kubernetes, AWS, CI/CD
                        </Typography>
                    </Box>
                </Box> */}

                {/* Call to Action */}
                <Box sx={{ marginTop: "4rem" }}>
                    <Button
                        variant="contained"
                        sx={{
                            background: "linear-gradient(to right, #00d9ff, #00b8d8)",
                            color: "#0d1b2a",
                            fontWeight: "bold",
                            fontSize: "1.1rem",
                            borderRadius: "25px",
                            textTransform: "none",
                            padding: "10px 30px",
                            boxShadow: "0px 5px 15px rgba(0, 217, 255, 0.4)",
                            "&:hover": {
                                background: "linear-gradient(to right, #00b8d8, #0088a9)",
                                boxShadow: "0px 5px 20px rgba(0, 217, 255, 0.6)",
                            },
                        }}
                        href="https://github.com/riyavij2001"
                    >
                        Check Out My Projects
                    </Button>
                </Box>


                {/* Social Icons */}
                <Box
                    sx={{
                        marginTop: "3rem",
                        display: "flex",
                        gap: "1.5rem",
                        justifyContent: "center",
                        alignItems: "center",
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
                <HTimeline theme ={theme} />
            </Container>

        </div>
    );
};

export default AboutMe;
