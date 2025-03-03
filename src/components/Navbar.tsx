import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const API_URL = "http://localhost:300";
  const [users, setUser] = useState("");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token al cerrar sesión
    navigate("/login");
  };

  // const getAllUsers = async () => {
  //   const token = localStorage.getItem("token");
  //   const res = await fetch(`${API_URL}/users`, {
  //     method: "GET",
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  // };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Si no hay token, redirigir al Login
    } else {
      setUser("Usuario Autenticado"); // Puedes reemplazar esto con datos reales
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Cerrar Sesión
            </button>
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="darkMode"
              />
            </div>

            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
