import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { imgLoginSensible } from "../assets/imgs";
import { API_ROUTE } from "../../ENV";
export default function Login() {
  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // Verificacion del token.
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_ROUTE}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, userPassword }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.msg);
      }

      const data = await response.json();
      console.info(data);
      localStorage.setItem("token", data.token); // Guardar el token en localStorage
      navigate("/dashboard"); // Redirigir al Dashboard
    } catch (err: any) {
      setError(err.message);
      setPassword("");
      setUsername("");
    }
  };

  return (
    <div className=" text-center">
      {/* <Navbar/> */}

      <div className="col-12"></div>
      <div className="col"></div>
      <div className="col-lg-8 rounded-start row">
        {/* Imagen del Login */}
        <div className="col-lg-7 ">
          <img
            className="img-fluid"
            src={imgLoginSensible.src}
            alt={imgLoginSensible.alt}
          />
        </div>
        {/* Imagen del Login */}
        {/* Login */}
        <div className="col-lg-5">
          <form onSubmit={handleLogin} className="">
            <h2 className="text-primary pt-5">Iniciar Sesión</h2>
            <input
              type="text"
              placeholder="Usuario"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form form-control mb-5"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={userPassword}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form form-control"
            />
            {error && <p className="text-danger fs-7">{error}</p>}
            <button
              type="submit"
              className="btn btn-outline-primary col-7 mt-5"
            >
              Ingresar
            </button>
          </form>
        </div>
        {/* Login */}
      </div>
      <div className="col"></div>
    </div>
  );
}
