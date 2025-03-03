import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Si no hay token, redirigir al Login
    } else {
      setUser("Usuario Autenticado"); // Puedes reemplazar esto con datos reales
    }
  }, []);


  return (<>
  
  
    {/* <Navbar/> */}
  <div className="row text-center vh-100 bg-dark">
            <div className="col-12">
            <h1 className="text-info">Bienvenido al Dashboard</h1>
            <p className="text-info">Usuario: {user}</p>
            </div>
           
        </div>
  </>);
}
