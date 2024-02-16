import { useRef } from "react";
import { useDispatchContext } from "./TaskProvider";

const NewTask = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatchContext();

    const handleClick = () => {
        if (dispatch)
            dispatch({ type: 'ADD', data: inputRef.current!.value })
    }

    return <div>
        <label>Texto de la tarea</label>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Enviar</button>
    </div>

}

export default NewTask;