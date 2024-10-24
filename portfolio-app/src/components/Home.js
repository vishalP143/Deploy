import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Home.css'; 

function Home() {
  const homeStyle = {
    backgroundImage: `url('https://e0.pxfuel.com/wallpapers/846/344/desktop-wallpaper-portfolio.jpg')`,
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
    <motion.div style={homeStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome to My Portfolio</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
        I'm a passionate developer with a focus on frontend and full-stack development.
      </p>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        In this portfolio, you'll find projects that showcase my skills in web development, problem-solving, and creating user-friendly experiences.
      </p>
      <p style={{ fontSize: '1.2rem' }}>
        Feel free to explore my work, and don't hesitate to reach out if you'd like to collaborate or know more about me!
      </p>
    </motion.div>
  );
}

export default Home;
