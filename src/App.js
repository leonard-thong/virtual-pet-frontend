import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/tasks';


function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/tasks' element={<Tasks/>} />
    </Routes>
    </Router>
  );
}

export default App;
