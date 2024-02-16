import './App.css'
import Main from './EjUseContext/Main'
import ListaCompra from './EjUseReducer/ListaCompra'
import NewTask from './Tasks/NewTask'
import TaskList from './Tasks/TaskList'
import TaskProvider from './Tasks/TaskProvider'

function App() {

  return (
    <>
      {/* <ListaCompra />
      <Main /> */}

      <TaskProvider>
        <NewTask />
        <TaskList />
      </TaskProvider>
    </>
  )
}

export default App
