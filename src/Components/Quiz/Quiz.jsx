import React, { useState, useEffect } from 'react';
import './Quiz.css';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import Gradientbackground from '../Backgrounds/Gradientbackground';
import quizdata from './quizData';
import { useParams, Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

const Quiz = () => {
  const { topic } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isCheckingAnswer, setIsCheckingAnswer] = useState(false);
  const [showAnswerResult, setShowAnswerResult] = useState(false);
  const [score, setScore] = useState(0); // State to track the score
  const currentQuestionData = filteredQuestions[currentQuestionIndex];
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const filteredData = quizdata.filter(question => question.topic === topic);
    setFilteredQuestions(filteredData);
    setCurrentQuestionIndex(0); // Reset current question index when topic changes
    setScore(0); // Reset score when the topic changes
  }, [topic]);

  useEffect(() => {
    const audio = new Audio('/Chris.mp3');
    audio.loop = true; // Enable looping
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Automatic playback started!
        // Ensure the audio loops
        audio.loop = true;
      }).catch(error => {
        // Auto-play was prevented
        // Show a UI element to let the user manually start playback
        console.log("Playback prevented. Please interact with the document first.");
        // You might want to handle this case more gracefully in a real application
      });
    }
    return () => {
      audio.pause();
      audio.currentTime = 0; // Optionally reset the audio to the start
    };
    // Cleanup function to stop the music when the component unmounts
    
  }, []);


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  

  const handleCheckAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentQuestionData.answer;
    if (isCorrect) {
      setScore(score + 1);
    }
    setIsCheckingAnswer(true);
    setShowAnswerResult(true);
    setTimeout(() => {
      if (currentQuestionIndex < filteredQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsCheckingAnswer(false);
        setShowAnswerResult(false);
      } else {
        console.log(`Quiz completed. Your score: ${score}/${filteredQuestions.length}`);
        // Handle quiz completion here
      }
    }, 2000); // Wait 2 seconds before moving to the next question or ending the quiz
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log(`Quiz completed. Your score: ${score}/${filteredQuestions.length}`);
      // Here you can handle quiz completion (e.g., redirect to a score page or show the score in a modal)
    }
    setIsCheckingAnswer(false);
    setShowAnswerResult(false); // Reset for the next question
  };

  return (
    <motion.div className='Quizcontainer gradientbackground'>
      <Navbar />
      <Gradientbackground />
      <div className="quizinner">
        <div className="score-display">Score: {score} / {filteredQuestions.length}</div>
        {filteredQuestions.length > 0 && currentQuestionIndex < filteredQuestions.length && (
          <div>
            <div className="questioncontainer">
              <h1>{currentQuestionData.question}</h1>
            </div>
            <div className="answercontainer">
              {currentQuestionData.options.map((option, index) => (
                <label key={index} className={`checkboxLabel ${showAnswerResult ? (option === currentQuestionData.answer ? 'correct-answer' : '') : ''}`}>
                  <input
                    type="radio"
                    name="selectedOption"
                    value={option}
                    onChange={() => handleCheckAnswer(option)}
                    disabled={isCheckingAnswer}
                  />
                  <span className="Answer">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}
        {currentQuestionIndex >= filteredQuestions.length && (
          <div className="noquestionscontainer">
            <p>Quiz completed. Your score: {score}/{filteredQuestions.length}</p>
            <Link to={`/Topics`}>
              <button className="backButton">Back to Topics</button>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Quiz;


