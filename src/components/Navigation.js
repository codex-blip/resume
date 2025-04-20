import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem;
  z-index: 100;
  background: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(10px);
`;

const NavItems = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled(motion.li)`
  margin-left: 2rem;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    
    &:hover {
      color: #64ffda;
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavItems>
        {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
          <NavItem
            key={item}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </NavItem>
        ))}
      </NavItems>
    </Nav>
  );
};

export default Navigation;