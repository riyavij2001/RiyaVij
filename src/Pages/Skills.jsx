import React from "react";
import { Box, Typography, Container, Grid, Grid2, Paper } from "@mui/material";
import { GitHub, LinkedIn, MailOutline, Language, Build, Storage } from "@mui/icons-material";
import ReactIcon from '../assets/reactIcon.png';
import MuiIcon from '../assets/mui.png';
import ReduxIcon from '../assets/redux.png';
import TailwindIcon from '../assets/tailwind.png';
import CppIcon from '../assets/cpp.png';
import ExpressIcon from '../assets/express.png';
import JavaIcon from '../assets/java.png';
import NodeJsIcon from '../assets/nodeJs.png';
import MongoDBIcon from '../assets/Mongodb.png';
import MySQLIcon from '../assets/mySQL.png';
import PostgresIcon from '../assets/postgres.png';
import DockerIcon from '../assets/docker.png';
import GitIcon from '../assets/gitpng.png';
import JenkinsIcon from '../assets/jenkins.png';
import KafkaIcon from '../assets/kafka.png';

const Skills = ({ theme }) => {
    return (
        <div
            style={{
                color: "white",
                paddingTop: "3rem",
            }}
            id="skills"
        >
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    // marginTop: "1rem",
                }}
            >
                {/* Skill Section Title */}
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

                <Box sx={{ flexGrow: 1, padding: '16px' }}>
                    <Grid2 container spacing={4} justifyContent="center">
                        {/* Frontend Skills */}
                        <Grid2 item md={8} xs={12}>
                            <Typography variant="h6" sx={{ fontWeight: '600', mb: 2, textAlign: 'center', color: theme === 'dark' ? "white" : "black" }}>Frontend</Typography>
                            <Grid2 container spacing={2} justifyContent="center">
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={ReactIcon} style={{ width: 60, height: 60 }} alt="React" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>React Js</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={ReduxIcon} style={{ width: 60, height: 60 }} alt="Redux" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>Redux</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={TailwindIcon} style={{ width: 60, height: 60 }} alt="Tailwind" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>Tailwind CSS</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={MuiIcon} style={{ width: 60, height: 60 }} alt="Material UI" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>Material UI</Typography>
                                    </Paper>
                                </Grid2>
                            </Grid2>
                        </Grid2>

                        {/* Backend Skills */}
                        <Grid2 item md={4} xs={12}>
                            <Typography variant="h6" sx={{ fontWeight: '600', mb: 2, textAlign: 'center', color: theme === 'dark' ? "white" : "black" }}>Backend</Typography>
                            <Grid2 container spacing={2} justifyContent="center">
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, height:125 ,borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={NodeJsIcon} style={{ width: 100, height: 40 }} alt="Node Js" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>Node Js</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={JavaIcon} style={{ width: 60, height: 60 }} alt="Java" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>Java</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={CppIcon} style={{ width: 60, height: 60 }} alt="C++" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>C++</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={ExpressIcon} style={{ width: 60, height: 60 }} alt="Express Js" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>Express Js</Typography>
                                    </Paper>
                                </Grid2>
                            </Grid2>
                        </Grid2>

                        {/* Database Skills */}
                        <Grid2 item md={4} xs={12}>
                            <Typography variant="h6" sx={{ fontWeight: '600', mb: 2, textAlign: 'center', color: theme === 'dark' ? "white" : "black" }}>Database</Typography>
                            <Grid2 container spacing={2} justifyContent="center">
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={MySQLIcon} style={{ width: 60, height: 60 }} alt="MySQL" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>MySQL</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={MongoDBIcon} style={{ width: 60, height: 60 }} alt="MongoDB" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>MongoDB</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={PostgresIcon} style={{ width: 60, height: 60 }} alt="PostgreSQL" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>PostgreSQL</Typography>
                                    </Paper>
                                </Grid2>
                            </Grid2>
                        </Grid2>

                        {/* DevOps Skills */}
                        <Grid2 item md={4} xs={12}>
                            <Typography variant="h6" sx={{ fontWeight: '600', mb: 2, textAlign: 'center', color: theme === 'dark' ? "white" : "black" }}>DevOps</Typography>
                            <Grid2 container spacing={2} justifyContent="center">
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={GitIcon} style={{ width: 60, height: 60 }} alt="Git" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>Git</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={KafkaIcon} style={{ width: 60, height: 60 }} alt="Kafka" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>Kafka</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={DockerIcon} style={{ width: 60, height: 60 }} alt="Docker" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>Docker</Typography>
                                    </Paper>
                                </Grid2>
                                <Grid2 item xs={4} display="flex" flexDirection="column" alignItems="center">
                                    <Paper sx={{ padding: 2, width:120, borderRadius: "8px", boxShadow: 3, transition: "0.3s", '&:hover': { transform: "scale(1.1)", boxShadow: 6 } }}>
                                        <img src={JenkinsIcon} style={{ width: 60, height: 60 }} alt="Jenkins" />
                                        <Typography variant="body2" sx={{ mt: 1 }}>Jenkins</Typography>
                                    </Paper>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Box>
            </Container>
        </div>
    );
};

export default Skills;
