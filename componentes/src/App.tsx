import { MouseEvent, useState } from 'react'
import './App.css'
// import CustomButton from './components/CustomButton'
// import Eventos from './components/Eventos'
// import ProfileCard from './components/ProfileCard'
// import Propagacion from './components/Propagacion'
// import Estado from './components/Estado'
import Formulario from './components/Formulario'
import Employee from './interfaces/Employee';

function App() {

  const [arrEmp, setArrEmp] = useState<Employee[]>([]);

  const handleManejaClick = (event: MouseEvent) => {
    console.log(event.target);
  }

  const handleCreateEmployee = (newEmployee: Employee) => {
    console.log(newEmployee);
    setArrEmp([
      ...arrEmp, newEmployee
    ]);
  }

  return (
    <>

      <Formulario onCreateEmployee={handleCreateEmployee} />
      {/* <Estado /> */}
      {/* <Propagacion />

      <CustomButton manejaClick={handleManejaClick}></CustomButton>

      <Eventos></Eventos>

      <ProfileCard employee={{
        name: 'Luis',
        surname: 'Martínez',
        email: 'luis@gmail.com',
        department: 'accounting',
        active: false
      }}
        buttonText="Cambiar"
      >
        <p>Esta es la descripción del empleado</p>
      </ProfileCard> */}
    </>
  )
}

export default App
