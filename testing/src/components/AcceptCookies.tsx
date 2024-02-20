import { useState } from "react";

const AcceptCookies = () => {
    const [cookies, setCookies] = useState(false);

    return <div>
        <label htmlFor="cookieCheckbox">Acepta las cookies</label>
        <input
            type="checkbox"
            id="cookieCheckbox"
            onClick={() => setCookies(!cookies)}
        />
        <article title="confirmación cookies">
            {cookies ? 'Cookies aceptadas' : 'Debes aceptar las cookies'}
        </article>
    </div>
}

export default AcceptCookies;