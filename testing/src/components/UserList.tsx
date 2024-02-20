import { useEffect, useState } from "react";

const UserList = () => {

    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        fetch('https://peticiones.online/api/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUsers(data.results)
            });
    });

    return <div>
        {users.map((user: any) => (
            <div>
                <h3>{user.first_name}</h3>
                <img src={user.image} alt="" />
            </div>
        ))}
    </div>

}

export default UserList;