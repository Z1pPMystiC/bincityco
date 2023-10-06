import React from 'react';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Privacy from './components/pages/Privacy';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/services' exact Component={Services} />
          <Route path='/about' exact Component={About} />
          <Route path='/contact' exact Component={Contact} />
          <Route path='/privacy-policy' exact Component={Privacy} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
