import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import Services from "./components/Services"
import Footer from './components/Footer'

function App() {
  return (
    <>
    < Navbar />
    < Jumbotron />
    < Services />
    < Footer />
    </>
  );
}

export default App;
