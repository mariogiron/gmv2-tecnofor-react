import { useEffect, useState } from "react";

const Efectos = () => {

    const [mensaje, setMensaje] = useState('');
    const [cont, setCont] = useState(0);

    useEffect(() => {
        console.log('Solo se ejecuta cuando inicia el componente')
    }, []);

    useEffect(() => {
        /**
         * 1- Después renderizar el componente se ejecuta useEffect
         * 2- Cuando se modifican las variables definidas como dependencia del useEffect se vuelve a ejecutar
         * 3- Dentro de useEffect podemos definir una función cleanUp que se ejecuta siempre antes de la función del useEffect
         * 4- Cuando el componente se deja de mostrar, también se ejecuta la función de limpieza
         */
        console.log('[Efectos] Modifica Mensaje');
        // setMensaje(new Date().toString());
        return function cleanUp() {
            console.log('Mensaje', mensaje);
        }
    }, [mensaje]);

    useEffect(() => {
        console.log('[Efectos] Modifica Cont')
    }, [cont]);

    return <div>
        <p>Mensaje del componente: {mensaje}</p>
        <p>Contador: {cont}</p>
        <input type="text" onChange={(e) => setMensaje(e.target.value)} />
        <button onClick={() => setCont(cont + 1)}>Incrementa</button>
    </div>
}

export default Efectos;