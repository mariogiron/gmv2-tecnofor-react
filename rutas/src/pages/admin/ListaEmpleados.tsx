import { useLoaderData, useParams } from "react-router-dom";
import { Empleado } from "../../interfaces/Empleado";

const ListaEmpleados = () => {

    const params = useParams();
    const empleado = useLoaderData() as Empleado;

    return <div>
        <h3>Lista de empleados</h3>
        <p>Datos del empleado {params.empleadoId}</p>
        <p>{empleado.first_name}</p>
        <img src={empleado.image} alt="" />
    </div>
}

export default ListaEmpleados;