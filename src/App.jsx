import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Module 4/React Router - Navigation in React/Home';
import About from './Module 4/React Router - Navigation in React/About';
import Contact from './Module 4/React Router - Navigation in React/Contact';
import Subpage from './Module 4/React Router - Navigation in React/Subpage';
import NavBar from './Module 4/React Router - Navigation in React/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subpage" element={<Subpage />} />
      </Routes>
    </Router>
  );
};

export default App;
