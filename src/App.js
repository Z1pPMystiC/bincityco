import React from 'react';
import Home from './components/pages/Home';
import FAQ from './components/pages/FAQ';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/faq' exact Component={FAQ} />
          <Route path='/about' exact Component={About} />
          <Route path='/contact' exact Component={Contact} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
