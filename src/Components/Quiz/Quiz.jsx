// Quiz.js
import React, { useState } from 'react';
import './Quiz.css';
import quizData from './quizData'; // Import the quizData array
import ParticleMouse from "../Backgrounds/ParticleMouse"
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import Gradientbackground from '../Backgrounds/Gradientbackground';


const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const currentQuestionData = quizData[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    // Move to the next question if the user has selected an option
    if (selectedOption !== null) {
      setSelectedOption(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <motion.div className='Quizcontainer gradientbackground'
    initial={{opacity: 0.5, scale: 0.1}}
    animate={{opacity: 1, scale: 1}}
    exit={{duration: 3}}
    >
        <Navbar/>
    
       <Gradientbackground/>
       
     
       
     
     <div className="quizinner">
       <div className="questioncontainer">
         <h1>{currentQuestionData.question}</h1>
       </div>
       <div className="answercontainer">
         {currentQuestionData.options.map((option, index) => (
           <button
             key={index}
             className={`button${index + 1} button ${selectedOption === option ? 'selected' : 'non-selected'} ${selectedOption !== null && option === currentQuestionData.answer ? 'correct-answer' : 'non-correct-answer'}`}
             onClick={() => handleOptionSelect(option)}
           >
             <p className='Answer'>{option}</p>
           </button>
         ))}
       </div>
       {selectedOption !== null && currentQuestionIndex < quizData.length - 1 && (
         <button className="nextButton" onClick={handleNextQuestion}>Next</button>
       )}
     </div>
       
    </motion.div>
  );
};

export default Quiz;