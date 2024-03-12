import React from 'react'
import "./Topics.css"
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
import ParticleMouse from "../Backgrounds/ParticleMouse"


const Topics = () => {
  return (
    <motion.div className='Topicscontainer gradientbackground'
    initial={{opacity: 0.5, scale: 0.1}}
    animate={{opacity: 1, scale: 1}}
    exit={{duration: 3}}
    >
        <ParticleMouse />
        <Navbar/>

        <div className="Topicsinner">
        <h2>Themen</h2>
            <div className="topics">
                
                <ol>
                    <button className="topic">Linux</button>
                    <button className="topic">Windows</button>
                    <button className="topic">Mac</button>
                    <button className="topic">Code Basics</button>
                    <button className="topic">Allgemein</button>
                    
                </ol>
                <ol>
                    <button className="topic">Tiere</button>
                    <button className="topic">Python</button>
                    <button className="topic">Javascript</button>
                    <button className="topic">HTML</button>
                    <button className="topic">CSS</button>
                </ol>
            </div>
        </div>
    </motion.div>
  )
}

export default Topics