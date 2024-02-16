import { useEffect, useState } from "react";
import { Producto } from "../interfaces/Producto";

const ProductList = () => {

    const [productos, setProductos] = useState<Producto[]>([]);

    // useEffect(() => {
    //     fetch('https://peticiones.online/api/products')
    //         .then(response => response.json())
    //         .then(data => setProductos(data.results))
    //         .catch(error => console.log(error));
    // }, []);

    useEffect(() => {
        async function getData() {
            const response = await fetch('https://peticiones.online/api/products')
            const data = await response.json()
            setProductos(data.results);
        }
        getData();
    }, []);

    const handleClick = async () => {
        const newProduct: Producto = { _id: '', name: 'Thermomix', description: 'Hace cosas con ingredientes', price: 1000, image: '', category: 'cocina', active: true };

        const response = await fetch('https://peticiones.online/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
        const data = await response.json();
        console.log(data);
    }

    return <>
        <div>
            <button onClick={handleClick}>Creo Producto</button>
        </div>
        <div className="lista-productos">
            {productos.map(producto => (
                <div className="producto" key={producto._id}>
                    <h2>{producto.name}</h2>
                    <img src={producto.image} alt="" />
                    <p>{producto.description}</p>
                    <p>Precio: {producto.price}€</p>
                </div>
            ))}
        </div>
    </>

}

export default ProductList;