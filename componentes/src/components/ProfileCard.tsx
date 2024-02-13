import { ReactNode } from "react";
import Employee from "../interfaces/Employee";

type ProfileCardProps = {
    employee: Employee,
    buttonText?: string,
    children?: ReactNode
}

const ProfileCard = ({ employee, buttonText = 'Aceptar', children }: ProfileCardProps) => {
    return <div>
        <h3>{employee.name} {employee.surname}</h3>
        <p>Email: {employee.email}</p>
        <p>Departamento: {employee.department}</p>
        <p>{employee.active ? 'Está activo' : 'NO está activo'}</p>
        <article>
            {children}
        </article>
        <button>{buttonText}</button>
    </div>
}

export default ProfileCard;