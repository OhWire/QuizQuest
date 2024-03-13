import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Topics.css";
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import ParticleMouse from "../Backgrounds/ParticleMouse";


const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState(0);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <motion.div className='Topicscontainer gradientbackground'
      initial={{ opacity: 0.5, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ duration: 3 }}
    >
      <ParticleMouse />
      <Navbar />

      <div className="Topicsinner">
        <h2>Themen</h2>
        <div className="topics">
          
              <Link to={`/Quiz/Linux`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("Linux")}>
                  Linux
                </button>
              </Link>
              
              <Link to={`/Quiz/Windows`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("Windows")}>
                  Windows
                </button>
              </Link>
          
              <Link to={`/Quiz/Mac`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("Mac")}>
                  Mac
                </button>
              </Link>
           
              <Link to={`/Quiz/CodeBasics`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("CodeBasics")}>
                  CodeBasics
                </button>
              </Link>
            
              <Link to={`/Quiz/Allgemein`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("Allgemein")}>
                  Allgemein
                </button>
              </Link>
           
              <Link to={`/Quiz/Tiere`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("Tiere")}>
                  Tiere
                </button>
              </Link>
            
              <Link to={`/Quiz/Python`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("Python")}>
                  Python
                </button>
              </Link>
           
              <Link to={`/Quiz/Javascript`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("Javascript")}>
                  Javascript
                </button>
              </Link>
            
              <Link to={`/Quiz/HTML`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("HTML")}>
                  HTML
                </button>
              </Link>
            
              <Link to={`/Quiz/CSS`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("CSS")}>
                  CSS
                </button>
              </Link>
            
              <Link to={`/Quiz/CodeBasics`} className="topic-link">
                <button className="topic" onClick={() => handleTopicSelect("CodeBasics")}>
                  CodeBasics
                </button>
              </Link>
            
            {/* Add more topics as needed */}
          
        </div>
      </div>
    </motion.div>
  );
};

export default Topics;