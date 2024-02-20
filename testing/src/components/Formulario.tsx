import { ChangeEvent, FormEvent, useState } from "react"

type FormularioProps = {
    creaTarea: (nuevaTarea: any) => void
}

const Formulario = ({ creaTarea }: FormularioProps) => {

    const [nuevaTarea, setNuevaTarea] = useState({});

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setNuevaTarea({ ...nuevaTarea, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        creaTarea(nuevaTarea);
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="inputTitle">Título</label>
            <input type="text" name="title" id="inputTitle" onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="inputTexto">Texto</label>
            <input type="text" name="text" id="inputTexto" onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="selectCategory">Categoría</label>
            <select name="category" id="selectCategory" onChange={handleChange}>
                <option value="diaria">Diaria</option>
                <option value="mensual">Mensual</option>
                <option value="anual">Anual</option>
            </select>
        </div>
        <input type="submit" value="Crea nueva tarea" />
    </form>
}

export default Formulario;
