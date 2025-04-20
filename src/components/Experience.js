import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  color: white;
  padding: 6rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  color: #64ffda;
  margin-bottom: 3rem;
  text-align: center;
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border-left: 3px solid #64ffda;
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience & Activities
        </Title>

        <ExperienceCard
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Football Team Member</h3>
          <p>IIT Ropar</p>
          <ul>
            <li>Active member of the college football team</li>
            <li>Regular participant in inter-college tournaments</li>
            <li>Training and practice sessions 3-4 times a week</li>
          </ul>
        </ExperienceCard>

        <ExperienceCard
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Competitive Programming</h3>
          <p>2024 - Present</p>
          <ul>
            <li>Pupil rated on Codeforces (Max: 1200)</li>
            <li>Regular participant in coding contests</li>
            <li>Solved 200+ DSA problems</li>
          </ul>
        </ExperienceCard>

        <ExperienceCard
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Academic Projects</h3>
          <p>First Year</p>
          <ul>
            <li>Working on personal portfolio website using React</li>
            <li>Learning and implementing various web technologies</li>
            <li>Exploring different programming paradigms</li>
          </ul>
        </ExperienceCard>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;