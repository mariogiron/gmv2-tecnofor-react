// const Saludo = () => { }

type SaludoProps = { nombre: string, apellidos: string };

function Saludo({ nombre, apellidos }: SaludoProps) {
    // { nombre: 'Mario' }
    return (
        <p>Hola {nombre} {apellidos}</p>
    );
}

export default Saludo;