import { useState } from 'react'
import './App.css'
// import Efectos from './components/Efectos'
import Intervalo from './components/Intervalo'
import Scroll from './components/Scroll';
import PrecioIva from './components/PrecioIva';
import CuentaRender from './components/CuentaRender';
import Factorial from './components/Factorial';
import FiltroAnimales from './components/ListaAnimales';

function App() {

  const [mostrarFecha, setMostrarFecha] = useState(true);

  return (
    <>
      {/* <Scroll />
      <CuentaRender />
      <PrecioIva precio={67} />
      <button onClick={() => setMostrarFecha(!mostrarFecha)}>Muestra/Oculta</button>
      <Efectos /> 
      {mostrarFecha &&
        // <Intervalo />
      }
      */}
      {/* <Factorial /> */}
      <FiltroAnimales />
    </>
  )
}

export default App
