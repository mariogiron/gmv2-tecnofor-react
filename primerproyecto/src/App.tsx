import './App.css'
import Despedida from './components/Despedida';
import Saludo from './components/Saludo';

function App() {

  const nombre = 'Mario';
  const estilosParrafo = {
    color: 'black',
    // backgroundColor: 'dodgerblue'
  }
  const attrs = {
    src: 'https://i.pravatar.cc/300',
    className: 'imagen',
    width: 200
  }

  const parrafo = <>
    <p>Otro parrafo</p>
    <p>Mi nombre es: {nombre}</p>
  </>;

  function mensaje(): string {
    return 'Este es mi mensaje';
  }

  const mensaje2 = () => 'Otro mensaje'

  return (
    <div id="" style={estilosParrafo} className="main">

      <label htmlFor="">Email</label>
      <input type="text" />

      {/* Comentario dentro del JSX */}

      <h1>Cabecera de la APP</h1>
      <h2>Subtítulo de la APP </h2>
      {parrafo}
      <p>Mensaje: {mensaje()}</p>
      <p>Mensaje 2: {mensaje2()}</p>

      <img {...attrs} />

      <Saludo nombre="Mario" apellidos="Girón"></Saludo>
      <Saludo nombre="Laura" apellidos="Romero"></Saludo>
      <Saludo nombre="Inés" apellidos="Martín"></Saludo>
      {/* <Saludo nombre={4}></Saludo> */}

      <Despedida nombre="Mauricio"></Despedida>

    </div>
  )

}

export default App
