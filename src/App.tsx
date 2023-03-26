import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Hire from './components/Hire/Hire';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Skills />
      <Works />
      <Hire />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
