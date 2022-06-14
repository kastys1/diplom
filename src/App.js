import './App.scss';

import React from 'react';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>

        <Footer />

      </div>
    </Router>

  );
}

export default App;