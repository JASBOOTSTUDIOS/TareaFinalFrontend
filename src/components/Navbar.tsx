import { useEffect, useState } from "react";
import { useNavigate,useLocation, Link } from "react-router-dom";
import { HomeIcon, LoginIcon, PerfilIcon, InfoIcon, WalletIcon, MenuIcon, LogoutIcon } from "./icons/Icons";
import { API_ROUTE } from "../../ENV";

export function Navbar() {
  const API_URL = API_ROUTE;
  const [users, setUser] = useState(Object);
  const [validToken, setToken] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("token"); 
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
      <label className="nav nav-link text-info" htmlFor="btn-sidebar"><MenuIcon/></label>
    <Link className="navbar-brand" to={validToken ? "#": "/"}>{validToken ? ` ${users.nombres}` : `Inicio`}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ul-nav" >
        <li key={1} className="nav-item">
         {!validToken ?  <Link className="nav-link active" aria-current="page" to={"/login"}>Login</Link> : ""}
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
      {/* Sidebar */}
      <nav className="navbar navbar-md navbar-dark ">
        <div className="container-fluid">
          <button id="btn-sidebar" className="d-flex btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"></button>

          {/* Nav Button */}
          {/* Off canvas container start */}
          <section className="offcanvas offcanvas-start bg-dark" id="sidebar" tabIndex={-1}>
            <div className="offcanvas-header">
              <h5 className="text-info fs-4 ">Herramientas</h5>
              <button className="btn-close" type="button" aria-label="close" data-bs-dismiss="offcanvas" data-bs-theme="dark"></button>
            </div>
            {/* OFF CANVAS LIKS */}
            <div className="offcanvas-body d-flex flex-column justify-conten-between px-0">
              <ul className="navbar-nav fs-6 justify-content-evenly">
                <li className="nav-item p-3 py-md-1"><Link className="nav-link text-info" to={"#"}><HomeIcon/> INICIO</Link></li>
                <li className="nav-item p-3 py-md-1"><Link className="nav-link text-info" to={"#"}><PerfilIcon/> PERFIL DE USUARIO</Link></li>
                <li className="nav-item p-3 py-md-1"><Link className="nav-link text-info" to={"#"}><WalletIcon/> VER SUELDO</Link></li>
                <li className="nav-item p-3 py-md-1"><Link className="nav-link text-info" to={"#"}><InfoIcon/> INFORMACIO</Link></li>
              </ul>
            {/* Enlacess */}
              {/* <Link to={"#"}></Link> */}
            </div>
              <div className="d-lg-none aling-self-center pb-5">
              <Link to={"#"}>1</Link>
              <Link to={"#"}>2</Link>
              <Link to={"#"}>3</Link>
              <Link to={"#"}><LoginIcon/></Link>
              </div>
              <Link className="nav-link p-3 mx-4 nav-hover text-info fs-5" to={"#"}><LogoutIcon/>CERRAR SESION</Link>
          </section>


        </div>

      </nav>

  <style>{`.ul-nav{
  --bs-scroll-height: 100px;`}</style>

    </>
  );
}
