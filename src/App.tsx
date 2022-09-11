import React from 'react';
import { Header } from './Features/Header';
import { Body } from './Features/Body';
import './App.css';
import {Footer} from './Features/Footer'
function App() {
  return (
    <div className="App">
      <Header headerType="primaryBlue" />
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
