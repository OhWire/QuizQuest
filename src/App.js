import './App.css';

import { Route} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Routes } from 'react-router-dom';
import Quiz from "./Components/Quiz/Quiz"
import Topics from './Components/Topics/Topics';


function App() {
 

  return (
    <AnimatePresence>
      <div className="App" id="c">
        <header className="App-header">
          <Navbar />
          <Routes >
            <Route index element={<Home />} />
            <Route path="/Quiz/" element={<Quiz/>} />
            <Route path="/Topics" element={Topics} />
          </Routes>
        </header>
      </div>
    </AnimatePresence>
  );
}

export default App;
