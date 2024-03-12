import React from 'react'
import "./Home.css"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   
    <motion.div className='Homecontainer'
    initial={{opacity: 0.6, scale: 0.5}}
    animate={{opacity: 1, scale: 1}}
    exit={{duration: 2}}
    >
         

          <div className="leftcontainer">
            <h1><p className='Qu'>Qu</p> est  <p className='Quwrong'>Qu</p>iz</h1>
          </div>
          <div className="rightcontainer">
            <button className='Startbutton'><Link to="/Quiz">Start</Link></button>
          </div>
       
    </motion.div>
  )
}

export default Home