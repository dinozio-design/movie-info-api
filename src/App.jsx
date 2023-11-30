import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GuiContainer from './components/GuiContainer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <GuiContainer/>
      <Footer/>
    </div>
  );
}

export default App;
