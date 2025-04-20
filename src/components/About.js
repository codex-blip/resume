import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import myPhoto from '../assets/pic_of_myself.webp';  // Temporary placeholder
import deptPhoto from '../assets/cse.jpg';
import collegePhoto from '../assets/IIT-Ropar-Logo.webp';

// Add these styled components
const ImageContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledImage = styled(motion.img)`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid #64ffda;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: #2d2d2d;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: #64ffda;
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.p`
  color: #8892b0;
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  text-align: justify;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </Title>
        <ImageContainer>
          <StyledImage
            src={myPhoto}
            alt="Manan"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <StyledImage
            src={deptPhoto}
            alt="CSE Department"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <StyledImage
            src={collegePhoto}
            alt="IIT Ropar Logo"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </ImageContainer>
        <Content
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Description>
            A passionate Computer Science student at IIT Ropar with a love for both technology and sports. 
            When I'm not coding or solving problems, you'll find me on the football field showcasing my 
            skills as a dedicated player. I enjoy gaming in my free time and believe in maintaining a 
            balance between academic excellence and personal interests. Currently exploring the vast 
            world of programming while pursuing my first year in Computer Science.

            My journey in tech has led me to create several exciting projects, including a full-stack 
            e-commerce platform and a dating website. I'm particularly interested in web development 
            and competitive programming, constantly pushing myself to learn new technologies and solve 
            complex problems. Outside of academics, I'm an avid football enthusiast and enjoy participating 
            in various sports tournaments.
          </Description>
        </Content>
      </Container>
    </AboutSection>
  );
};

export default About;