// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './DemoPages/MainPage';
import CorrectPage from './DemoPages/LearnPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/CorrectPage" element={<CorrectPage/>} />
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
