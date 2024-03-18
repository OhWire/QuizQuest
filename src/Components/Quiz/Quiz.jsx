import React, { useState, useEffect } from 'react';
import './Quiz.css';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import Gradientbackground from '../Backgrounds/Gradientbackground';
import quizData from './quizData.js';
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

  useEffect(() => {
    const filteredData = quizData.filter(question => question.topic === topic);
    setFilteredQuestions(filteredData);
    setCurrentQuestionIndex(0); // Reset current question index when topic changes
    setScore(0); // Reset score when the topic changes
  }, [topic]);

  const handleCheckAnswer = (values, formikBag) => {
    const isCorrect = values.selectedOptions.includes(currentQuestionData.answer);
    if (isCorrect) {
      setScore(score + 1); // Increase score if the answer is correct
    }
    setIsCheckingAnswer(true);
    setShowAnswerResult(true); // Show answer feedback
    formikBag.setSubmitting(false);
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
    <motion.div className='Quizcontainer gradientbackground'
      initial={{ opacity: 0.5, scale: 0.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ duration: 3 }}
    >
      <Navbar />
      <Gradientbackground />
      <div className="quizinner">
        {filteredQuestions.length > 0 && currentQuestionIndex < filteredQuestions.length ? (
          <Formik
            key={currentQuestionIndex} // Unique key for each question to reset Formik state
            initialValues={{ selectedOptions: [] }}
            onSubmit={(values, formikBag) => {
                if (!isCheckingAnswer) {
                    handleCheckAnswer(values, formikBag);
                } else {
                    handleNextQuestion();
                    formikBag.resetForm(); // Reset the form for the next question
                }
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form>
                <div className="questioncontainer">
                  <h1>{currentQuestionData.question}</h1>
                </div>
                <div className="answercontainer">
                  {currentQuestionData.options.map((option, index) => (
                    <label key={index} className={`checkboxLabel ${showAnswerResult ? (option === currentQuestionData.answer ? 'correct-answer' : 'wrong-answer') : ''}`}>
                      <Field className="checkbox" type="checkbox" name="selectedOptions" value={option} />
                      <span className="Answer">{option}</span>
                    </label>
                  ))}
                </div>
                <button type="button" className="nextButton" onClick={handleSubmit} disabled={isSubmitting}>
                  {isCheckingAnswer ? "Next" : "Check"}
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="noquestionscontainer">
            <p>No questions available or quiz completed.</p>
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
