
import './App.css';

import { Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Routes } from 'react-router-dom';
import Quiz from './Components/Quiz/Quiz';
import Topics from './Components/Topics/Topics';
import{useState, useEffect, React} from "react";
import Loader from './Components/Loader/Loader';



function App() {
  const [isloading, setIsLoading] = useState(true)
  const [initialLoadComplete, setInitialLoadComplete] =useState(false)


  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
        setInitialLoadComplete(true); // Data fetching for the initial load is complete
      }, 4000);
    }

    if (!initialLoadComplete) {
      fakeDataFetch(); // Only fetch data if the initial load hasn't completed
    }
  }, [initialLoadComplete]); // useEffect will re-run when initialLoadComplete changes

  const location = useLocation();


  return isloading ? ( <Loader /> ) : ( 
    
     
    
    <AnimatePresence>
    <div className="App" id='c' location={location} key={location.pathname}> 
      <header className="App-header">
      <Navbar/>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home/>} />
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/topics" element={<Topics/>}/>
      </Routes>
    </header>
  
      
      
     
    </div>
    </AnimatePresence>
  )
}
 
export default App;
