import { useFormik } from "formik";
import * as yup from 'yup';

function validate(values: any) {
    const errors: any = {};

    if (!values.username) {
        errors.username = 'requerido';
    }

    return errors;
}

function createSchema() {
    return yup.object({
        username: yup.string()
            .required('El campo username es requerido')
            .max(15, 'El tamaño máximo del username es 15 caracteres'),
        email: yup.string()
            .required('El campo email es requerido')
            .email('El formato del email es incorrecto')
    })
}

const Registro = () => {

    const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
        initialValues: { username: '', email: '', password: '' },
        // validate,
        validationSchema: createSchema(),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input type="text" name="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
            {(errors.username && touched.username) &&
                <p>{errors.username}</p>}
        </div>
        <div>
            <label>Email</label>
            <input type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {(errors.email && touched.email) &&
                <p>{errors.email}</p>}
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
        </div>
        <input type="submit" value="Enviar" />
    </form>
}

export default Registro;