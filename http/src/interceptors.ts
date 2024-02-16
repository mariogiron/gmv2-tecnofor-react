const { fetch: originalFetch } = window;

window.fetch = async (...args) => {

    let [resource, config = {}] = args;

    // Agregar un Token de autorización para todas las peticiones
    config.headers = {
        ...config.headers,
        'Authorization': 'TOKEN DEL BACK'
    }

    const response = await originalFetch(resource, config)

    return response;
}