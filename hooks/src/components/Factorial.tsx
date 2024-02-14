import { useMemo, useState } from "react";

function factorialOf(n: number): number {
    console.log('factorialOf!');
    return n <= 0 ? 1 : n * factorialOf(n - 1);
}

const Factorial = () => {

    const [num, setNum] = useState<number>(1);
    const [cont, setCont] = useState(0);

    const factorial = useMemo(() => {
        return factorialOf(num)
    }, [num]);

    return <div>
        <p>Factorial de {num} es {factorial}</p>
        <input type="number" onChange={(e) => setNum(Number(e.target.value))} />
        <button onClick={() => setCont(cont + 1)}>Incrementa ({cont})</button>
    </div>

}

export default Factorial;