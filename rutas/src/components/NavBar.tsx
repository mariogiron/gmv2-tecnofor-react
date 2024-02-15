import { Link, NavLink, useNavigate } from "react-router-dom"

const isActiveLink = ({ isActive }: { isActive: boolean }) => {
    return {
        color: isActive ? 'red' : 'black'
    }
}

const NavBar = () => {

    const navigate = useNavigate();

    const handleClick = (path: string) => {
        // Realizo más acciones
        navigate(path);
    }

    return <nav>
        <ul>
            <li>
                <NavLink to="/info" style={isActiveLink}>Información</NavLink>
            </li>
            <li>
                <NavLink style={isActiveLink} to="/sobremi">Sobre mi</NavLink>
            </li>
            <li>
                <NavLink style={isActiveLink} to="/contacto">Métodos de contacto</NavLink>
            </li>
            <li>
                <NavLink style={isActiveLink} to="/admin/lista">Listados de la administración</NavLink>
            </li>
            <li>
                <NavLink style={isActiveLink} to="/login">Login de usuario</NavLink>
            </li>
        </ul>
        <div>
            <button onClick={() => handleClick('/info')}>Info</button>
            <button onClick={() => handleClick('/sobremi')}>Sobre mí</button>
            <button onClick={() => handleClick('/contacto')}>Contacto</button>
        </div>
    </nav>
}

export default NavBar;