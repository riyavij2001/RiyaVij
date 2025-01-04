import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Container, Typography, Box } from '@mui/material';

const HTimeline = ({ theme }) => {
  return (
    <div style={{ marginTop: '3rem', width: '100%' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          marginTop: '4rem',
          paddingX: { xs: '1rem', sm: '2rem', md: '3rem' }, // Padding for container
        }}
      >
        {/* About Section */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #00d9ff, #00b8d8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            padding: '4px',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          My Journey
        </Typography>

        {/* Introductory Text */}
        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            color: theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgb(10, 37, 75)',
            maxWidth: '80rem',
            margin: '1rem auto',
            padding: '0 10px',
            textAlign: 'center',
          }}
        >
          From my academic foundation to hands-on experience in the tech industry, my journey as a Full-Stack Developer has been a learning curve filled with passion, persistence, and continuous growth. Here’s a glimpse of my journey—from my education to the internships and roles that have shaped my skills and experience.
        </Typography>

        {/* Timeline Section */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '1000px', // Limit the width for larger screens
            marginTop: '3rem',
            paddingX: { xs: '10px', sm: '20px', md: '40px' },
            margin: '0 auto', // Center the timeline
          }}
        >
          <Timeline position="alternate">
            {/* Education Section */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    width: '100%',
                    paddingLeft: { xs: '10px', sm: '20px', md: '30px' },
                    textAlign: 'left',
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgb(10, 37, 75)',
                  }}
                >
                  <h4>Bachelor's in Computer Application</h4>
                  <p>VIPS | Graduated: 2022</p>
                  <p>CGPA: 9.14</p>
                </Box>
              </TimelineContent>
            </TimelineItem>

            {/* Master's Section */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    width: '100%',
                    paddingLeft: { xs: '10px', sm: '20px', md: '30px' },
                    textAlign: 'left',
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgb(10, 37, 75)',
                  }}
                >
                  <h4>Master's in Computer Application</h4>
                  <p>VIT | Graduated: 2024</p>
                  <p>CGPA: 9.01</p>
                </Box>
              </TimelineContent>
            </TimelineItem>

            {/* Internship Section */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <BusinessCenterIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    width: '100%',
                    paddingLeft: { xs: '10px', sm: '20px', md: '30px' },
                    textAlign: 'left',
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgb(10, 37, 75)',
                  }}
                >
                  <h4>Web Developer Intern</h4>
                  <p>BrainQuest Co. Ltd.</p>
                  <p>Nov 2021 - April 2022</p>
                </Box>
              </TimelineContent>
            </TimelineItem>

            {/* Another Internship */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <BusinessCenterIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    width: '100%',
                    paddingLeft: { xs: '10px', sm: '20px', md: '30px' },
                    textAlign: 'left',
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgb(10, 37, 75)',
                  }}
                >
                  <h4>Integration Engineer Intern</h4>
                  <p>Hyperverge</p>
                  <p>Aug 2023 - Jun 2024</p>
                </Box>
              </TimelineContent>
            </TimelineItem>

            {/* Experience Section */}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  sx={{
                    width: '100%',
                    paddingLeft: { xs: '10px', sm: '20px', md: '30px' },
                    textAlign: 'left',
                    color: theme === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgb(10, 37, 75)',
                  }}
                >
                  <h4>Software Engineer</h4>
                  <p>CyRAACS</p>
                  <p>2024-Present</p>
                </Box>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    </div>
  );
};

export default HTimeline;
