import React, { useEffect, useState } from "react";
import { preLoaderAnim } from "../animations";
import "./Loader.css"

const PreLoader = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Check if animation has already started
    if (!animationStarted) {
      // Run the preLoaderAnim only if it hasn't already started
      preLoaderAnim();
      setAnimationStarted(true); // Set state to indicate animation has started
    }

    // Optionally, you can clean up any effects if necessary
    return () => {
      // Clean-up code here (if needed)
    };
  }, [animationStarted]); // Run effect whenever animationStarted state changes

  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="spanloader">QUest</span>
        <span className="spanloader">QUiz</span>
      </div>
    </div>
  );
};

export default PreLoader;