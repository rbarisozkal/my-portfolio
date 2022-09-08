import React from 'react';
import { Header } from './Features/Header';
import { Body } from './Features/Body';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header headerType="primaryBlue" />
      <Body />
    </div>
  );
}

export default App;
