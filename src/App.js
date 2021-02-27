import React from 'react';
import Saludo from './components/Saludo';
import Comentario from "./components/Comentario";
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona='Memo' edad={26}/>
      <Saludo persona='Mariana' edad={30}/>
      <hr/>
      <h3>Caja de Comentarios</h3>
      <Comentario 
        persona="Memo"
        urlImagen="https://picsum.photos/100"
        texto="dddddddddddddddddd"
        />
       <Comentario 
        persona="Mariana"
        urlImagen="https://picsum.photos/100"
        texto="fffffffffffffffffff"
        />
    </div>
  );
}

export default App;
