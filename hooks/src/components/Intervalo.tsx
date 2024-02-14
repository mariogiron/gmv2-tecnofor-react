import { useEffect, useState } from "react";

const Intervalo = () => {

    const [currDate, setCurrDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrDate(new Date());
            console.log('Intervalo!');
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return <>
        <p>{currDate.toString()}</p>
    </>
}

export default Intervalo;