import React from 'react';
import Home from './components/pages/Home';
import FAQ from './components/pages/FAQ';
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
          <Route path='/faq' exact Component={FAQ} />
          <Route path='/about' exact Component={About} />
          <Route path='/contact' exact Component={Contact} />
          <Route path='/privacy-policy' exact Component={Privacy} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
