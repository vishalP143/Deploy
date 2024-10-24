import React from 'react';
import { motion } from 'framer-motion';
import { GitHub } from '@mui/icons-material';
import '../styles/Projects.css'; 

function Projects() {
  const projectsStyle = {
    backgroundImage: `url('https://storage.googleapis.com/a1aa/image/oFDWv7DvLJqkPViAG8u2w3NU4FhnNGiZTbQjN0XzfaCSED1JA.jpg')`,
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
    <motion.div style={projectsStyle} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>My Projects</h2>
      <ul className="project-list">
        <li>
          <a href="https://github.com/vishalP143/project" className="project-link">
            <GitHub /> Basic Express app with CRUD operations
          </a>
        </li>
        <li>
          <a href="https://github.com/vishalP143/Basic-CRUD-app-with-Express-level-2-with-MongoDB" className="project-link">
            <GitHub /> Sample Express CRUD operation with MongoDB connection
          </a>
        </li>
        <li>
          <a href="https://github.com/vishalP143/reactProjects1/tree/main/word-letter-counter" className="project-link">
            <GitHub /> Basic React Project for word-letter-counter
          </a>
        </li>
        <li>
          <a href="https://github.com/vishalP143/reactProjects1/tree/main/password-validator" className="project-link">
            <GitHub /> Basic React Project for password-validator
          </a>
        </li>
        <li>
          <a href="https://github.com/vishalP143/reactProjects1/tree/main/weather" className="project-link">
            <GitHub /> Basic React Project for weather finder
          </a>
        </li>
        <li>
          <a href="https://github.com/vishalP143/reactProjects1/tree/main/lyrics-finder" className="project-link">
            <GitHub /> Basic React Project for lyrics-finder
          </a>
        </li>
        <li>
          <a href="https://github.com/vishalP143/reactProjects1/tree/main/axios-lab" className="project-link">
            <GitHub /> Basic React Project for axios-lab
          </a>
        </li>
        <li>
          <a href="https://github.com/vishalP143/reactProjects1/tree/main/react-router-lab" className="project-link">
            <GitHub /> Basic React Project for react-router-lab
          </a>
        </li>
       <li>
        <a href="https://hasaliyakaro.netlify.app/"
        className="project-link">
            <GitHub /> Basic React Project for hasaliyakaro
        </a>
       </li>
      </ul>
    </motion.div>
  );
}

export default Projects;
