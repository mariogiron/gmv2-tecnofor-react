import useWebSocket from 'react-use-websocket';
import './App.css'
import { useRef } from 'react';

interface Report {
  user: string,
  text: string
}

type ServerResponse = {
  user: string[],
  reports: Report[]
}

function App() {

  const wsUrl = 'ws://127.0.0.1:8000';
  const inputRef = useRef<HTMLInputElement>(null)

  const { sendJsonMessage, lastJsonMessage } = useWebSocket<ServerResponse>(wsUrl, {
    share: true,
    queryParams: { username: 'mario' }
  });

  const handleClick = () => {
    sendJsonMessage(inputRef.current?.value)
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Envía report</button>
      {lastJsonMessage && lastJsonMessage.reports.map(report => (
        <p>{report.text}</p>
      ))}
    </>
  )
}

export default App
