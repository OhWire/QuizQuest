import React, { useState, useEffect } from 'react';
import './Quiz.css';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import Gradientbackground from '../Backgrounds/Gradientbackground';
import quizData from './quizData'; // Import the provided quizData array
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const { topic } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const currentQuestionData = filteredQuestions[currentQuestionIndex];

  useEffect(() => {
    // Filter questions based on the topic parameter
    const filteredData = quizData.filter(question => question.topic === topic);
    setFilteredQuestions(filteredData);
    setCurrentQuestionIndex(0); // Reset current question index when topic changes
  }, [topic]);

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
      initial={{ opacity: 0.5, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ duration: 3 }}
    >
      <Navbar />
      <Gradientbackground />
      <div className="quizinner">
        {filteredQuestions.length > 0 && (
          <>
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
            {selectedOption !== null && currentQuestionIndex < filteredQuestions.length - 1 && (
              <button className="nextButton" onClick={handleNextQuestion}>Next</button>
            )}
             <Link to={`/Topics`} >
                <button className="backButton">
                  Zurück
                </button>
              </Link>
          </>
        )}
        {filteredQuestions.length === 0 && (
          <div className="noquestionscontainer">
            <p className='noquestions'>Da hat Chris noch nicht die Liste geschickt die Dreckssau deswegen gibts keine Fragen</p>
            <Link to={`/Topics`} >
                <button className="backButton">
                  Zurück
                </button>
              </Link>
          </div>
        )}
             
      </div>
    </motion.div>
  );
};

export default Quiz;
