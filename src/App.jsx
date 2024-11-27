import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './pages/Countries';
import Details from './pages/Details';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/countries" element={<Countries />}>
          <Route path=":cca2" element={<Details />} />
        </Route>
        <Route path="/" element={<Countries />} />
      </Routes>
    </Router>
  );
};

export default App;
