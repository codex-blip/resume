import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 5rem 2rem;
  background: #1e1e1e;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const ContactForm = styled(motion.form)`
  width: 100%;
  max-width: 600px;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const TextArea = styled(motion.textarea)`
  width: 100%;
  padding: 1rem;
  background: transparent;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: #64ffda;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
`;

const Contact = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <ContactSection id="contact">
      <Title
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </Title>
      <ContactForm
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FormGroup>
          <Input
            type="text"
            placeholder="Your Name"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            placeholder="Your Email"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          />
        </FormGroup>
        <FormGroup>
          <TextArea
            placeholder="Your Message"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          />
        </FormGroup>
        <SubmitButton
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;