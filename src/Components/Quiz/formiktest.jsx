import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import './Quiz.css';
import quizData from './quizdata'; // Import the quizData array
import ParticleMouse from "../Backgrounds/ParticleMouse"
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import Gradientbackground from '../Backgrounds/Gradientbackground';


const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestionData = quizData[currentQuestionIndex];

  const handleSubmit = (values, { resetForm }) => {
    // Handle form submission
    console.log('Selected options:', values.options);
    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    // Reset form fields
    resetForm();
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
       <Formik
         initialValues={{ options: [] }}
         onSubmit={handleSubmit}
       >
         {({ values, setFieldValue }) => (
           <Form>
             <div className="answercontainer">
               {currentQuestionData.options.map((option, index) => (
                 <label key={index}>
                   <Field
                     type="checkbox"
                     name="options"
                     value={option}
                     checked={values.options.includes(option)}
                     onChange={(e) => {
                       const isChecked = e.target.checked;
                       if (isChecked) {
                         setFieldValue('options', [...values.options, option]);
                       } else {
                         setFieldValue('options', values.options.filter((item) => item !== option));
                       }
                     }}
                   />
                   {option}
                 </label>
               ))}
             </div>
             <button type="submit" className="nextButton">Next</button>
           </Form>
         )}
       </Formik>
     </div>
       
    </motion.div>
  );
};

export default Quiz;
