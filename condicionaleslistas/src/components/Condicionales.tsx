import { useState } from "react";

const Condicionales = () => {

    const [mostrar, setMostrar] = useState<boolean>(true);

    let element = null;
    if (mostrar) {
        element = <p>Párrafo antes del RETURN</p>;
    }

    return <div>
        <button onClick={() => setMostrar(!mostrar)}>
            {mostrar ? 'Ocultar' : 'Mostrar'}
        </button>

        {/* Ternario - if else */}
        {mostrar ?
            <p>Párrafo a mostrar TRUE</p> :
            <p>Variable mostrar FALSE</p>
        }
        {mostrar ?
            <p>Párrafo a mostrar TRUE</p> :
            null
        }

        {/* Evaluar la condicion previa al return */}
        {element}

        {/* Mediante el operador && */}
        {mostrar &&
            <p>Párrafo con AND</p>
        }

        {/* Mediante el uso de una función */}
        {(() => {
            if (mostrar) {
                return <p>Párrafo desde función</p>;
            }
        })()}

    </div>
}

export default Condicionales;