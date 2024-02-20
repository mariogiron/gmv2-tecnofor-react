export type ProfileCardProps = { name: string, email: string, department: string, active: boolean, bgColor: string };

const ProfileCard = ({ name, email, department, active, bgColor }: ProfileCardProps) => {

    return <div style={{ backgroundColor: bgColor }}>
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Departamento: {department}</p>
        {active &&
            <p>En ACTIVO</p>
        }
    </div>
}

export default ProfileCard;