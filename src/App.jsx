import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Module 4/Hands-on Project - Build a Full-Stack Todo App/app/store';
import Navbar from './Module 4/Hands-on Project - Build a Full-Stack Todo App/components/Navbar';

const Home = lazy(() => import('./Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/Home'));
const TodosPage = lazy(() => import('./Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/TodosPage'));
const About = lazy(() => import('./Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/About'));
const Contact = lazy(() => import('./Module 4/Hands-on Project - Build a Full-Stack Todo App/pages/Contact'));

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Suspense>
    </Router>
  </Provider>
);

export default App;
