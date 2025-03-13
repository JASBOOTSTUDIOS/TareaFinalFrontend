import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { textColorPrimary } from "../components/themesAndColors/TemesAndColors";
import Chat from "../utils/SocketIo";
export default function Home() {
    const navigate = useNavigate();
     useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token) navigate("/dashboard");
      },[]);
    return (
        <div className="row text-center vh-100 bg-dark">
            <h1 className={`${textColorPrimary}`}>Bienvenido a la App</h1>
            <Chat/>
            <p className={`${textColorPrimary}`}>Por favor, inicia sesión para continuar.</p>
        </div>
    );
}
