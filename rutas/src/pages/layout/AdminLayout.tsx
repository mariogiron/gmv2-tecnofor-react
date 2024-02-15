import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return <>
        <h2>Zona de administración</h2>
        <Outlet />
    </>
}

export default AdminLayout;