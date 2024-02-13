import { ChangeEvent, MouseEvent } from "react";

const Eventos = () => {

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Botón pulsado');
        console.log(event.target);
    }

    const handleChangeColor = (color: string) => {
        console.log(color);
    }

    const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        // event.target.type = 'password';
    }

    return <div>
        <div>
            <button onClick={handleClick}>¡Pulsa Aquí!</button>
            <button onClick={() => {
                console.log('Se pulsa el segundo botón');
            }}>Segundo botón</button>
        </div>
        <div>
            <button onClick={() => handleChangeColor('rojo')}>Rojo</button>
            <button onClick={() => handleChangeColor('verde')}>Verde</button>
            <button onClick={() => handleChangeColor('azul')}>Azul</button>
        </div>
        <div>
            {/* Evento sobre escritura en campo de texto */}
            <input
                type="text"
                onChange={handleChangeText}
                onFocus={() => console.log('Focus en el input')}
                onBlur={() => console.log('Blur en el input')}
            />
        </div>
    </div>

}

export default Eventos;