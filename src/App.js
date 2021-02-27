import React from 'react';
import Saludo from './components/Saludo'
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Memo' edad={26}/>
      <Saludo persona='Mariana' edad={30}/>
    </div>
  );
}

export default App;
