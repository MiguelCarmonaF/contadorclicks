
import './App.css';
import freecodecamplogo from './Imagenes/freecodecamplogo.png';
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {

  const [numeroClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numeroClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-class">
        <img
          className="freecodecamp-logo"
          src= {freecodecamplogo}
          alt = "Logo de freeCodeCamp"/>
      </div>
      <div className="contenedor-principal">
        <Contador
          numeroClicks={numeroClicks}
        />
        <Boton 
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}/>
        <Boton 
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
