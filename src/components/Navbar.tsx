import { useEffect, useState } from "react";
import { useNavigate,useLocation, Link } from "react-router-dom";

export function Navbar() {
  const API_URL = "http://localhost:3001";
  const [users, setUser] = useState(Object);
  const [validToken, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token al cerrar sesión
    navigate("/login");
  };

  const getAllUsers = async () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    // alert(data.users.nombres);
    setUser(data.users);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    
        if (!token) {
          setToken("");
        } else {
          setToken(token);
           getAllUsers();
        }
  }, [location]);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
    <Link className="navbar-brand" to={validToken ? "#": "/"}>{validToken ? `Hola Sr. ${users.nombres}` : `Inicio`}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ul-nav" >
        <li key={1} className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/login"}>Login</Link>
        </li>
        <li key={2} className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li key={3} className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
            <button className="nav-link" onClick={handleLogout}>
              {validToken ? "Cerrar Sesion": ""}
            </button>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
      </nav>

  <style>{`.ul-nav{
  --bs-scroll-height: 100px;`}</style>

    </>
  );
}
