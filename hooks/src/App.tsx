import { useEffect, useState } from 'react';
import './App.css'
import useFetch from './hooks/useFetch'
import useGeolocation from './hooks/useGeolocation';
import useEnterEscButtons from './hooks/useEnterEscButton';

function App() {

  const [page, setPage] = useState(1);

  const data = useFetch('https://peticiones.online/api/products', page);
  const [position, error] = useGeolocation();
  useEnterEscButtons({
    handleCancel: () => console.log('Se pulsa el ESC'),
    handleConfirm: () => console.log('Se pulsa el ENTER')
  });

  return (
    <>
      <div>
        {!error &&
          <>
            <p>LAT: {position?.coords.latitude}</p>
            <p>LNG: {position?.coords.longitude}</p>
          </>
        }
      </div>
      <div>
        <button onClick={() => setPage(page - 1)}>Anterior</button>
        <span>Página: {page}</span>
        <button onClick={() => setPage(page + 1)}>Siguiente</button>
      </div>
      {data && data.results.map((item: any) => (
        <div>
          <h3>{item.name}</h3>
          <img width={200} src={item.image} alt="" />
        </div>
      ))}
    </>
  )
}

export default App
