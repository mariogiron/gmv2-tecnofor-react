import { Outlet } from "react-router-dom";

const AuthLayout = () => {

    return <>
        <h2>Zona de AUTENTICACIÓN</h2>
        <Outlet />
    </>
}

export default AuthLayout;