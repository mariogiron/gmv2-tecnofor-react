// Modificar mediante useState objetos complejos y arrays

import { ChangeEvent, FormEvent, useState } from "react";
import Employee from "../interfaces/Employee";

type FormularioProps = { onCreateEmployee: (newEmployee: Employee) => void }

const Formulario = ({ onCreateEmployee }: FormularioProps) => {

    const [employee, setEmployee] = useState<Employee>({
        name: 'Test', surname: 'Test', email: '', department: '', active: false
    });

    const modifyField = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        // No debemos modificar las propiedades del objeto
        // Debemos hacer una copia del objeto, modificarlo y asignar esa copia modificada como nuevo estado
        const { value, name: fieldName } = event.target;
        // const empCopy = { ...employee };
        // empCopy[fieldName] = value;
        // setEmployee(empCopy);

        setEmployee({
            ...employee,
            [fieldName]: value
        });
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        onCreateEmployee(employee);
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <p>{employee.name}</p>
            <p>{employee.surname}</p>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={modifyField}
                />
            </div>
            <div>
                <label>Surname</label>
                <input
                    type="text"
                    name="surname"
                    onChange={modifyField}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    onChange={modifyField}
                />
            </div>
            <div>
                <label>Department</label>
                <input
                    type="text"
                    name="department"
                    onChange={modifyField}
                />
            </div>
            <div>
                <label>Active?</label>
                <input
                    type="text"
                    name="active"
                    onChange={modifyField}
                />
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
}

export default Formulario;