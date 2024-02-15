import { useEffect, useState } from "react";

function useFetch(url: string, page: number = 1) {

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch(`${url}?page=${page}`)
            .then(response => response.json())
            .then(json => setData(json));
    }, [page]);

    return data;

}

export default useFetch;