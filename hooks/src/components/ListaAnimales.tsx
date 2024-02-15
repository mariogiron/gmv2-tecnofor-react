import { memo, useCallback, useMemo, useState } from "react";

type ListaProps = {
    items: string[],
    onItemClicked: (item: string) => void
};

const Lista = memo(({ items, onItemClicked }: ListaProps) => {

    let startTime = performance.now();
    while (performance.now() - startTime < 1000) { }

    return <div>
        <ul>
            {items.map(item => <li onClick={() => onItemClicked(item)}>{item}</li>)}
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

    const handleOnItemClicked = useCallback((item: string) => {
        console.log(item);
    }, []);

    return <div>
        <button onClick={() => setCont(cont + 1)}>Incrementa ({cont})</button>
        <input type="text" onChange={(e) => setBusqueda(e.target.value)} />
        <Lista items={animalesFiltro} onItemClicked={handleOnItemClicked} />
    </div>

}

export default FiltroAnimales;