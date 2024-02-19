import { FormEvent } from "react";
import useFormFields from "../hooks/useFormFields";
import CustomInput from "./CustomInput";

const NuevoEmpleado = () => {

    const [employee, handleChange] = useFormFields({
        name: '', surname: '', email: '', address: ''
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(employee);
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <p>Nombre: {employee.name}</p>
        </div>
        <CustomInput label="Nombre" name="name" value={employee.name} onChange={handleChange} />
        <div>
            <label>Apellidos</label>
            <input type="text" name="surname" value={employee.surname} onChange={handleChange} />
        </div>
        <div>
            <label>Email</label>
            <input type="text" name="email" value={employee.email} onChange={handleChange} />
        </div>
        <div>
            <label>Dirección</label>
            <input type="text" name="address" value={employee.address} onChange={handleChange} />
        </div>
        <input type="submit" value="Enviar" />
    </form>

}

export default NuevoEmpleado;