import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css'; 

function Contact() {
  const contactStyle = {
    backgroundImage: `url('https://img.freepik.com/premium-vector/geometric-dark-message-board-wallpaper-with-copy-space-modern-designs_796268-137.jpg?semt=ais_hybrid')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <motion.div style={contactStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Contact Me</h2>
      <p>If you have any questions or inquiries, feel free to reach out!</p>
      <p>Email: <a href="vishal.p8070@gmail.com" style={{ color: 'cyan' }}>email@vishal.com</a></p>
      <p>Phone: <span style={{ color: 'cyan' }}>+91 8457822470</span></p>
    </motion.div>
  );
}

export default Contact;
