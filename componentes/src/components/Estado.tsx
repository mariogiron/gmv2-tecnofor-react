import { useState } from "react";

function createArr(): string[] {
    const items = [];
    for (let i = 0; i < 15; i++) {
        items.push(`Indice ${i}`); // Indice 12
    }
    return items;
}

const Estado = () => {

    const [cont, setCont] = useState<number>(0);
    const [mensaje, setMensaje] = useState<string>('')
    // 1ª pos del array es el valor almacenado state[0]
    // 2ª pos del array es una función para modificar dicho valor

    // State con valor por defecto calculado
    const [items, setItems] = useState<string[]>(createArr);

    function handleClick() {
        setCont(prevCont => prevCont + 1);
        setCont(prevCont => prevCont + 1);
        setCont(prevCont => prevCont + 1);
    }

    return <div>
        <p>Valor del contador: {cont}</p>
        <p>Número de items: {items.length}</p>
        <button onClick={handleClick}>Aumentar</button>
    </div>

}

export default Estado;
