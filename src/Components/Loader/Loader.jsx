import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import "./Loader.css"

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
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