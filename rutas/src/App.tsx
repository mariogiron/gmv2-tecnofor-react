import { Outlet, useMatch } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {

  const match = useMatch('/login');
  if (match) {
    console.log('Dentro de la ruta LOGIN');
  }

  return (
    <>
      <NavBar />
      <h1>Título de la página</h1>
      <Outlet />
    </>
  )
}

export default App