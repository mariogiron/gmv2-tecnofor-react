import { useEffect, useRef, useState } from "react";

const CuentaRender = () => {

    const [mensaje, setMensaje] = useState('');
    const cont = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const prevMensaje = useRef('');

    useEffect(() => {
        prevMensaje.current = mensaje;
    }, [mensaje])

    cont.current = cont.current + 1;

    const handleClick = () => {
        inputRef.current?.focus();
    }

    return <div>
        <p>{mensaje}</p>
        <p>{prevMensaje.current}</p>
        <p>{cont.current}</p>
        <input ref={inputRef} type="text" onChange={(e) => setMensaje(e.target.value)} />
        <button onClick={handleClick}>Focus</button>
    </div>

}

export default CuentaRender;