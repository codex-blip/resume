import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Navigation from './Navigation';
import { FaGithub, FaLinkedinIn, FaInstagram, FaCode } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  color: white;
  position: relative;
  overflow: hidden;
  animation: gradientBG 15s ease infinite;
  background-size: 400% 400%;

  @keyframes gradientBG {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`;

const Content = styled.div`
  text-align: center;
  z-index: 2;
`;

const Name = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(120deg, #64ffda, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
  cursor: default;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

const Role = styled(motion.p)`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #8892b0;
  font-weight: 600;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: #64ffda;
`;

const Tagline = styled(motion.p)`
  color: #8892b0;
  font-size: 1.2rem;
  margin: 1rem auto;
  max-width: 600px;
  line-height: 1.6;
`;

const Button = styled(motion.button)`
  padding: 1.2rem 2.5rem;
  font-size: 1.2rem;
  margin-top: 2rem;
  background: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  cursor: pointer;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #64ffda;
    transition: all 0.5s ease;
    z-index: -1;
  }

  &:hover:before {
    width: 100%;
  }

  &:hover {
    color: #1e1e1e;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const ScrollDot = styled(motion.div)`
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  margin: 0 auto;
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const SocialIcon = styled(motion.a)`
  color: white;
  font-size: 1.8rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    color: #64ffda;
    border-color: #64ffda;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(100, 255, 218, 0.2);
  }
`;

const particlesOptions = {
  background: { opacity: 0 },
  particles: {
    number: { value: 50 },
    color: { value: "#64ffda" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      random: true,
      straight: false,
      outModes: "out",
    },
    links: {
      enable: true,
      color: "#64ffda",
      opacity: 0.2,
      distance: 150,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },
      onClick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 140,
        links: { opacity: 0.5 }
      },
      push: { quantity: 4 }
    }
  }
};

const Hero = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroSection style={{ 
      transform: `translateY(${scrollY * 0.5}px)`,
      opacity: 1 - (scrollY / 700)
    }}>
      <Navigation />
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Content>
        <Name
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          Manan
        </Name>
        <Role
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Computer Science Student @ IIT Ropar
        </Role>
        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          First Year Undergraduate
        </Description>
        <Tagline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Coding enthusiast • Football player • Gaming aficionado
        </Tagline>
        <Tagline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Passionate about coding and problem solving
        </Tagline>
        <SocialLinks>
          <SocialIcon
            href="https://github.com/codex-blip"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://linkedin.com/in/manan-kumar-11b21431b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedinIn />
          </SocialIcon>
          <SocialIcon
            href="https://codeforces.com/profile/AKIDNAR"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode />
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram />
          </SocialIcon>
        </SocialLinks>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </Button>
      </Content>
      <ScrollIndicator
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5
        }}
      >
        <ScrollDot />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
