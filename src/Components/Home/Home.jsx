import React, { useEffect, useRef } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import BackgroundAnimation from '../Backgrounds/Matrixbackground';
import SplitType from 'split-type';

const Home = () => {
  const quRef = useRef(null);
  const estRef = useRef(null);
  const quWrongRef = useRef(null);
  const izRef = useRef(null);
  const startButtonRef = useRef(null);

  useEffect(() => {
    const quAnimation = new SplitType(quRef.current, {
      types: 'chars',
    });
    const estAnimation = new SplitType(estRef.current, {
      types: 'chars',
    });
    const quWrongAnimation = new SplitType(quWrongRef.current, {
      types: 'chars',
    });
    const izAnimation = new SplitType(izRef.current, {
      types: 'chars',
    });

    const tl = gsap.timeline({ delay: 3.6 });

    tl.from(quAnimation.chars, { opacity: 0, duration: 0.5 })
      .to(quAnimation.chars, { opacity: 1, duration: 0.5 })
      .from(estAnimation.chars, { opacity: 0, duration: 0.5 }, '-=0.25')
      .to(estAnimation.chars, { opacity: 1, duration: 0.5 })
      .from(quWrongAnimation.chars, { opacity: 0, duration: 0.5 }, '-=0.25')
      .to(quWrongAnimation.chars, { opacity: 1, duration: 0.5 })
      .from(izAnimation.chars, { opacity: 0, duration: 0.5 }, '-=0.25')
      .to(izAnimation.chars, { opacity: 1, duration: 0.5 })
      .to(startButtonRef.current, { opacity: 1, duration: 0.5 });

    return () => {
      quAnimation.revert();
      estAnimation.revert();
      quWrongAnimation.revert();
      izAnimation.revert();
    };
  }, []);

  return (
    <div className="Home">
      <motion.div
        className="Homecontainer"
        initial={{ opacity: 0.5, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ duration: 3 }}
      >
        <div className="Homeinner">
          <BackgroundAnimation />
          <div className="leftcontainer">
            <h1>
              <p ref={quRef} className="Qu">Qu</p>
              <span ref={estRef}>est</span>
              <p ref={quWrongRef} className="Quwrong">Qu</p>
              <span ref={izRef}>iz</span>
            </h1>
          </div>
          <div className="rightcontainer">
            <motion.button
              ref={startButtonRef}
              className="Startbutton"
              style={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6, duration: 1 }}
            >
              <Link to="/Topics">Start</Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
