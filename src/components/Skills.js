import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiJavascript } from 'react-icons/si';

const SkillsSection = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: #64ffda;
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const ExperienceSection = styled.div`
  margin-top: 4rem;
`;

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border-left: 3px solid #64ffda;

  ul {
    list-style-type: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 0.5rem;
    color: #8892b0;
  }
`;

const ExperienceTitle = styled.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ExperienceDate = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Skills = () => {
  const skillsData = [
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaDatabase />, name: "SQL" },
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Experience
        </Title>
        
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillIcon>{skill.icon}</SkillIcon>
              <h3>{skill.name}</h3>
            </SkillCard>
          ))}
        </SkillsGrid>

        <ExperienceSection>
          <ExperienceCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ExperienceTitle>E-commerce Platform</ExperienceTitle>
            <ExperienceDate>2025</ExperienceDate>
            <ul>
              <li>Built a full-stack e-commerce platform with React and Node.js</li>
              <li>Implemented secure payment gateway integration and shopping cart</li>
              <li>Created admin dashboard for inventory management</li>
              <li>Integrated MongoDB for efficient data management and product cataloging</li>
              <li>Implemented JWT authentication and role-based access control</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ExperienceTitle>Dating Website Project</ExperienceTitle>
            <ExperienceDate>2025</ExperienceDate>
            <ul>
              <li>Developed a full-stack dating website using React and Node.js</li>
              <li>Implemented user authentication and profile management</li>
              <li>Created matching algorithm and real-time chat functionality</li>
              <li>Used Socket.io for real-time messaging and notifications</li>
              <li>Implemented image upload and processing with AWS S3</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ExperienceTitle>Competitive Programming</ExperienceTitle>
            <ExperienceDate>2024 - Present</ExperienceDate>
            <ul>
              <li>Pupil on Codeforces (Max Rating: 1200)</li>
              <li>Solved 200+ DSA problems across platforms</li>
              <li>Actively participating in contests to improve problem-solving skills</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ExperienceTitle>Web Development Projects</ExperienceTitle>
            <ExperienceDate>2024 - Present</ExperienceDate>
            <ul>
              <li>Built responsive web applications using React</li>
              <li>Implemented backend services with Node.js</li>
              <li>Created RESTful APIs and managed databases</li>
            </ul>
          </ExperienceCard>
        </ExperienceSection>
      </Container>
    </SkillsSection>
  );
};

export default Skills;