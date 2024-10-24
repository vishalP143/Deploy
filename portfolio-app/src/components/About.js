import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css'; 

function About() {
  const aboutStyle = {
    backgroundImage: `url('https://img.freepik.com/free-vector/black-geometric-memphis-social-banner_53876-116843.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <motion.div style={aboutStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>About Me</h2>
      <p>
        Hi, I'm a Computer Science student passionate about web development and 
        creating innovative applications. I enjoy working with React, JavaScript, 
        and exploring full-stack development. I have completed several projects, including a rental 
        management system and an expense tracker app.
      </p>
      <p>
        My interests lie in open-source contributions, learning new programming languages, 
        and constantly improving my skills in frontend development.
      </p>
      <p>
        I look forward to building applications that solve real-world problems 
        and contribute to the tech community. Feel free to connect with me!
      </p>
    </motion.div>
  );
}

export default About;
