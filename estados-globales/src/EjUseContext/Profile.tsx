import { useContext } from 'react';
import { UserContext } from './Main';

const Profile = () => {

    const user = useContext(UserContext);

    return <div>
        <h2>Datos del usuario</h2>
        <p>Nombre de usuario: {user.name}</p>
    </div>

}

export default Profile; 