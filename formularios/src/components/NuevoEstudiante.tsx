import { useForm } from "react-hook-form";

interface Student {
    name: string;
    surname: string;
    country: string;
}

const NuevoEstudiante = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Student>();

    const onSubmit = (values: Student) => {
        console.log(values);
    }

    return <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
            <label>Nombre</label>
            <input type="text" {...register('name', {
                required: 'El campo nombre es requerido', maxLength: { value: 15, message: 'El campo nombre debe tener un tamaño máximo de 15 caracteres' }
            })} />

            {errors.name &&
                <p>{errors.name.message}</p>}


        </div>
        <div>
            <label>Apellidos</label>
            <input type="text" {...register('surname')} />
        </div>
        <div>
            <label>País</label>
            <input type="text" {...register('country')} />
        </div>
        <input type="submit" value="Enviar" />
    </form>

}

export default NuevoEstudiante;