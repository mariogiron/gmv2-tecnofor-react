import { useReducer, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Producto {
    id: string;
    nombre: string;
    disponible: boolean;
}

type State = Array<Producto>;

// type Action = { type: string, data: string | number };
type Action =
    | { type: 'AGREGAR', data: string }
    | { type: 'ELIMINAR', data: string }

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'AGREGAR': {
            return [
                ...state,
                { id: uuidv4(), disponible: false, nombre: action.data }
            ]
        }
        case 'ELIMINAR': {
            return state.filter(prod => prod.id !== action.data)
        }
    }
}

const ListaCompra = () => {

    const [productos, dispatch] = useReducer(reducer, []);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        dispatch({ type: 'AGREGAR', data: inputRef.current!.value })
    }

    return <div>
        <label>Producto</label>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Crear</button>
        <div>
            <ul>
                {productos.map(producto => (
                    <li
                        key={producto.id}
                        onClick={() => dispatch({ type: 'ELIMINAR', data: producto.id })}
                    >
                        {producto.nombre}
                    </li>
                ))}
            </ul>
        </div>
    </div>
}

export default ListaCompra;