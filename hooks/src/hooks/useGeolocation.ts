import { useEffect, useState } from "react";

function useGeolocation():
    [GeolocationPosition | undefined, GeolocationPositionError | undefined] {

    const [position, setPosition] = useState<GeolocationPosition>();
    const [error, setError] = useState<GeolocationPositionError>();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
                console.log(position);
                setPosition(position);
            },
            (error: GeolocationPositionError) => {
                setError(error);
            }
        );
    }, []);

    return [position, error];

}

export default useGeolocation;