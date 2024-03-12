import React, { useEffect } from 'react';
import './Navbar.css';
import Logo from '../IMG/Logo2.png';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"

const Navbar = () => {
  useEffect(() => {
    const logoElement = document.querySelector('.Logo');
    logoElement.classList.add('wiggle');

    return () => {
      logoElement.classList.remove('wiggle');
    };
  }, []);

  return (
    <motion.div className="div"
    initial={{opacity: 0, scale: 0.5}}
    animate={{opacity: 1, scale: 1}}
    exit={{duration: 2}}
    >
      
      <div className="Navcontainer">
        <div className="Logocontainer">
        
          
          <img src={Logo} alt="Logo" className='Logo' />
          
          

        </div>   

        <div className="Linkscontainer">
          <ul className="Linkscontainer">
            
            
              <Link activeclclassName="active"   className="Navlink"  to='/'>Home</Link>
              <Link activeclclassName="active"  className="Navlink"   to="/Topics">Topics</Link>
             <Link activeclclassName="active"   className="Navlink"  to="/Quiz">Quiz</Link>
            
            
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;