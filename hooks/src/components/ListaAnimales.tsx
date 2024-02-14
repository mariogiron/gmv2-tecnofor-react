import { memo, useMemo, useState } from "react";

type ListaProps = { items: string[] };

const Lista = memo(({ items }: ListaProps) => {

    let startTime = performance.now();
    while (performance.now() - startTime < 1000) { }

    return <div>
        <ul>
            {items.map(item => <li>{item}</li>)}
        </ul>
    </div>
})

const FiltroAnimales = () => {
    const [busqueda, setBusqueda] = useState<string>('');
    const [cont, setCont] = useState(0);

    const animalesFiltro = useMemo(() => {
        const animales = ['perro', 'gato', 'loro', 'serpiente'];
        return animales.filter((animal) => animal.includes(busqueda));
    }, [busqueda]);

    return <div>
        <button onClick={() => setCont(cont + 1)}>Incrementa ({cont})</button>
        <input type="text" onChange={(e) => setBusqueda(e.target.value)} />
        <Lista items={animalesFiltro} />
    </div>

}

export default FiltroAnimales;