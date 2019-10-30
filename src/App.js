import React from 'react';
import Example from './components/carousel';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Example/>
     <Footer/>
    </div>
  );
}

export default App;
