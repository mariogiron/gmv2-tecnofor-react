import { Navigate, Outlet, useNavigate } from "react-router-dom";

type ProtectedRouteProps = {
    isAllowed: boolean,
    redirectPath?: string
}

const ProtectedRoute = ({ isAllowed, redirectPath = '/login' }: ProtectedRouteProps) => {

    const navigate = useNavigate();

    if (!isAllowed) {
        // return navigate('/login', {
        //     replace: true,
        //     state: {}
        // })
        return <Navigate to={redirectPath} replace state={{}} />
    }
    return <Outlet />
}

export default ProtectedRoute;