import { MouseEvent } from "react";

const Propagacion = () => {
    return <div onClickCapture={() => console.log('Se pulsa el DIV')}>
        <button onClick={(e: MouseEvent) => {
            console.log('Se pulsa el botón');
            e.stopPropagation();
        }}>Pulsa!</button>
    </div>
}

export default Propagacion;