import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { User } from "../interfaces/User";
import customAxios from '../customAxios';
import { useServicesContext } from "../services/ServicesProvider";

const UserList = () => {

    const [users, setUsers] = useState<User[]>([]);

    const services = useServicesContext();

    // useEffect(() => {
    //     axios.get('https://peticiones.online/api/users')
    //         .then(response => console.log(response.data))
    // }, []);

    // useEffect(() => {
    //     async function getData() {
    //         try {
    //             const { data } = await customAxios.get('/users');
    //             setUsers(data.results);
    //         } catch (error) {
    //             const err = error as AxiosError;
    //             console.log(err);
    //         }
    //     }
    //     getData();
    // }, []);

    useEffect(() => {
        services?.UserService.getAll()
            .then(users => setUsers(users));
    }, []);

    const handleClick = async () => {
        const body = {
            first_name: 'Lorenzo', last_name: 'Romero', email: 'loren@gmail.com', username: 'loren321', password: '1212121'
        }
        const response = await axios.post('https://peticiones.online/api/users', body);
        console.log(response.data);
    }

    return <div>
        <h2>Lista de usuarios</h2>
        <button onClick={handleClick}>Crea un nuevo usuario</button>
        <div>
            {users.map(user => (
                <div>
                    <h3>{user.first_name} {user.last_name}</h3>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    </div>
}

export default UserList;