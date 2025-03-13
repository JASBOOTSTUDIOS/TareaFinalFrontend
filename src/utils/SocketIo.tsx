import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { API_ROUTE } from "../../ENV";
import { textColorPrimary } from "../components/themesAndColors/TemesAndColors";

const socket = io(`${API_ROUTE}`);

function Chat() {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState<string[]>([]);

  useEffect(() => {
    socket.on("mensaje", (data) => {
      setMensajes((prev) => [...prev, data]);
    });

    return () => {
      socket.off("mensaje");
    };
  }, []);

  const enviarMensaje = () => {
    socket.emit("mensaje", mensaje);
    setMensaje("");
  };

  return (
    <div>
      <h2 className={`${textColorPrimary}`} >Chat en tiempo real</h2>
      <input value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
      <button className={`${textColorPrimary}`} onClick={enviarMensaje}>Enviar</button>
      <ul>
        {mensajes.map((msg, index) => (
          <li className={`${textColorPrimary}`} key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default Chat;
