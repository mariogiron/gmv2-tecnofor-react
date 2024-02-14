import { useEffect, useState } from "react";

type PrecioIvaProps = { precio: number };

const PrecioIva = ({ precio }: PrecioIvaProps) => {
    // const [precioIva, setPrecioIva] = useState(0);

    // useEffect(() => {
    //     setPrecioIva(precio * 1.21);
    // }, []);

    const precioIva = precio * 1.21;
    console.log('Precio IVA')

    return <p>Precio con IVA: {precioIva}</p>
}

export default PrecioIva;