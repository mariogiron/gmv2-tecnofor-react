const users = [
    { "_id": "63740fede2c75d8744f80a3f", "id": 9, "first_name": "Clemente", "last_name": "Alonzo Mayorga", "username": "clemente.alonzomayorga", "email": "clemente.alonzomayorga@peticiones.online", "image": "https://i.pravatar.cc/500?u=clemente.alonzomayorga@peticiones.online", "password": "user12345" },
    { "_id": "63740fede2c75d8744f80a40", "id": 1, "first_name": "María del Carmen", "last_name": "Herrera Villanueva", "username": "mariadelcarmen.herrera", "email": "mariadelcarmen.herreravillanueva@peticiones.online", "image": "https://i.pravatar.cc/500?u=mariadelcarmen.herreravillanueva@peticiones.online", "password": "user12345" },
    { "_id": "63740fede2c75d8744f80a41", "id": 2, "first_name": "Marisol", "last_name": "Venegas Jurado", "username": "marisol.venegas", "email": "marisol.venegasjurado@peticiones.online", "image": "https://i.pravatar.cc/500?u=marisol.venegasjurado@peticiones.online", "password": "user12345" },
    { "_id": "63740fede2c75d8744f80a42", "id": 3, "first_name": "Emilio", "last_name": "Alva Durán", "username": "emilio.alva", "email": "emilio.alvaduran@peticiones.online", "image": "https://i.pravatar.cc/500?u=emilio.alvaduran@peticiones.online", "password": "user12345" },
    { "_id": "63740fede2c75d8744f80a43", "id": 4, "first_name": "Armando", "last_name": "Perea Sedillo", "username": "armando.pereasedillo", "email": "armando.pereasedillo@peticiones.online", "image": "https://i.pravatar.cc/500?u=armando.pereasedillo@peticiones.online", "password": "user12345" },
    { "_id": "63740fede2c75d8744f80a44", "id": 5, "first_name": "Daniela", "last_name": "Griego Solorio", "username": "daniela.griegosolorio", "email": "daniela.griegosolorio@peticiones.online", "image": "https://i.pravatar.cc/500?u=daniela.griegosolorio@peticiones.online", "password": "user12345" },
    { "_id": "63740fede2c75d8744f80a45", "id": 6, "first_name": "Débora", "last_name": "Banda Alcalá", "username": "debora.bandaalcala", "email": "debora.bandaalcala@peticiones.online", "image": "https://i.pravatar.cc/500?u=debora.bandaalcala@peticiones.online", "password": "user12345" },
    { "_id": "63740fede2c75d8744f80a46", "id": 7, "first_name": "Mario", "last_name": "Mejía Burgos", "username": "mario.mejiaburgos", "email": "mario.mejiaburgos@peticiones.online", "image": "https://i.pravatar.cc/500?u=mario.mejiaburgos@peticiones.online", "password": "user12345" },
    { "_id": "63740fede2c75d8744f80a47", "id": 8, "first_name": "José María", "last_name": "Zapata Bravo", "username": "josemaria.zapatabravo", "email": "josemaria.zapatabravo@peticiones.online", "image": "https://i.pravatar.cc/500?u=josemaria.zapatabravo@peticiones.online", "password": "user12345" },

    { "_id": "63740fede2c75d8744f80a48", "id": 11, "first_name": "Raúl", "last_name": "Ibarra Echevarría", "username": "raul.ibarraechevarria", "email": "raul.ibarraechevarria@peticiones.online", "image": "https://i.pravatar.cc/500?u=raul.ibarraechevarria@peticiones.online", "password": "user12345" }
];

const Listas = () => {

    // [<p>Clemente</p>, <p>Lucía</p>, <p>Mario</p>]

    const items = [];
    for (let user of users) {
        items.push(<p key={user._id}>{user.first_name}</p>);
    }

    return <div>
        {items}
        <hr />
        {users.map(user => (
            <div key={user._id}>
                <p>{user.first_name} {user.last_name}</p>
                <p>Email: {user.email}</p>
                <img src={user.image} alt="" />
            </div>
        ))}
    </div>;
}

export default Listas;