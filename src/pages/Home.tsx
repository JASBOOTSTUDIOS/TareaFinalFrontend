import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
     useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token) navigate("/dashboard");
      },[]);
    return (
        <div className="row text-center vh-100 bg-dark">
            <h1 className="">Bienvenido a la App</h1>
            <p className="mt-4">Por favor, inicia sesión para continuar.</p>
        </div>
    );
}
