import './App.css';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import { LiMensaje, UlMensajes } from './ui-components';

const socket = io('http://localhost:3000');

function Chat() {

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [mensajes, setMensajes] = useState<any>([]);
    const [nuevoMensaje, setNuevoMensaje] = useState('');

    useEffect(() => {
        socket.emit('TEST');

        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('chat_message', data => {
            console.log(data);
            setMensajes((mensajes: any) => [...mensajes, data])
        });

        return () => {
            socket.off('connect');
            socket.off('chat_message');
        };
    }, []);

    const enviaMensaje = (event: KeyboardEvent) => {
        if (event.type === 'keydown' && event.code !== 'Enter') {
            return;
        }
        socket.emit('chat_message', {
            usuario: socket.id,
            texto: nuevoMensaje
        });
    }

    return (
        <div className="App">
            <h2>Estado: {isConnected ? 'CONECTADO' : 'NO HAY CONEXIÓN'}</h2>
            <h3>ID: {socket.id}</h3>
            <UlMensajes>
                {mensajes.map(mensaje => (
                    <LiMensaje>{mensaje.usuario} {mensaje.texto}</LiMensaje>
                ))}
            </UlMensajes>
            <input
                type="text"
                onChange={e => setNuevoMensaje(e.target.value)}
                onKeyDownCapture={enviaMensaje}
            />
            <button onClick={enviaMensaje}>Enviar</button>
        </div>
    );
}

export default Chat;