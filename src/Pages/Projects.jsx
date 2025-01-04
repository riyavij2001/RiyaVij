import React from "react";
import { Box, Typography, Button, Container, Card, CardActions, CardContent } from "@mui/material";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";

const projectList = [{ title: "RaaDesigns", techStack: ["React", "Redux", "Tailwind CSS", "Framer Motion", "MongoDb"], description: "Redefine interior aesthetics with RaaD Designs. Built with React, Redux, Tailwind CSS, and Framer Motion, this site delivers a visually striking and responsive experience on any device. Dive in today!", link: "https://raad-designs.vercel.app/" },
{ title: "IMDB Clone", techStack: ["React", "TMDb API", "Node"], description: "Discover movie and TV show details, explore ratings, cast, and crew. React-powered project for cinephiles", link: "https://github.com/riyavij2001/imdb" },
{ title: "ChatMigo", techStack: ["React", "Express Js", "Material UI", "MongoDb"], description: "A platform for people to come together and interact in real time using text messages, video and audio call", link: "https://github.com/riyavij2001/chatmigo" }];

const Projects = ({ theme }) => {
    return (
        <div
            style={{
                color: "white",
                paddingTop: "3rem",
                transition: "background 0.3s ease",
            }}
            id="projects"
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    marginTop: "4rem",
                    paddingBottom: "4rem",
                }}
            >
                {/* Project Section */}
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "bold",
                        background: "linear-gradient(to right, #00d9ff, #00b8d8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        padding: "4px",
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                        letterSpacing: "1.5px",
                        marginBottom: "2rem",
                    }}
                >
                    Projects
                </Typography>

                {/* Introduction Section */}
                <Typography
                    variant="h5"
                    sx={{
                        maxWidth: "80rem",
                        fontSize: { xs: "1rem", sm: "1.3rem", md: "1.5rem" },
                        color: theme === 'dark' ? "rgba(255, 255, 255, 0.8)" : "black",
                        padding: "20px",
                        lineHeight: "1.6",
                        marginTop: "2rem",
                    }}
                >
                    Code in <span style={{ color: "#00d9ff" }}> Action </span>: Showcasing My Work
                    <br />
                    <br />
                    <span>In this space, I don’t just build software—I build dreams. Each project here is a perfect blend of creativity, code, and problem-solving. I take pride in crafting solutions that not only work but inspire. Take a stroll through my portfolio and discover the projects that are as fun to work on as they are to use. Ready to build something amazing together? Let's talk!

                    </span>
                </Typography>

                {/* Project Cards Section */}
                <Box
                    sx={{
                        marginTop: "3rem",
                        display: "flex",
                        gap: "3rem",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {projectList.map((currentProject, index) => {
                        return <Card
                            sx={{
                                minWidth: 275,
                                maxWidth: 350,
                                marginBottom: "2rem",
                                backgroundColor: theme === 'dark' ? "rgb(2, 14, 28)" : "#fff",
                                border: "#00d9ff solid 1px",
                                borderRadius: "10px",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: "0 4px 15px rgba(0, 217, 255, 0.3)",
                                },
                                padding: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}
                            
                        >
                            <CardContent>
                                <Typography variant="h5" component="div" sx={{ color: theme === 'dark' ? 'white' : 'black' }}>
                                    {currentProject.title}
                                </Typography>
                                <Typography sx={{ color: theme === 'dark' ? 'white' : 'text.secondary', mb: 1.5 }}>
                                    {currentProject.techStack.join(" | ")}
                                </Typography>
                                <Typography variant="body2" sx={{ color: theme === 'dark' ? 'white' : 'black' }}>
                                    {currentProject.description}
                                    <br />
                                    {'"Interactive and sleek design!"'}
                                </Typography>
                            </CardContent>
                            <CardActions  style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    size="small"
                                    href={currentProject.link}
                                    sx={{
                                        color: "#00b8d8",
                                        textTransform: "none",
                                        fontWeight: "bold",
                                        letterSpacing: "1px",
                                        "&:hover": {
                                            color: "#fff",
                                            background: "#00b8d8",
                                        },
                                    }}
                                >
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    })}

                </Box>

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
                        href="/projects"
                    >
                        Check Out More Projects
                    </Button>
                </Box>


            </Container>
        </div>
    );
};

export default Projects;
