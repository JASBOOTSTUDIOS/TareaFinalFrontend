import { Link } from "react-router-dom";
import { validToken } from "../utils/jwt";
import { useNavigate } from "react-router-dom";
import { HomeIcon,UserDetailIcon,PerfilIcon, WalletIcon, InfoIcon,LoginIcon,LogoutIcon } from "./icons/Icons";

export function Sidebar(){
    const navigate = useNavigate();
    const valid_Token:boolean = validToken();
    
    const handleLogout = () => {
        localStorage.removeItem("token"); 
        navigate("/login");
      };
    return (<>
    
     {/* Sidebar */}
     <nav className="navbar navbar-md navbar-dark ">
        <div className="container-fluid">
          {valid_Token ? <button id="btn-sidebar" className="d-flex btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar"></button> : ""}
          {/* Nav Button */}
          {/* Off canvas container start */}
          <section className="offcanvas offcanvas-start bg-dark" id="sidebar" tabIndex={-1}>
            <div className="offcanvas-header">
              <h5 className="text-info fs-4 ">Herramientas</h5>
              <button id="closed" className="btn-close" type="button" aria-label="close" data-bs-dismiss="offcanvas" data-bs-theme="dark"></button>
            </div>
            {/* OFF CANVAS LIKS */}
            <div className="offcanvas-body d-flex flex-column justify-conten-between px-0">
              <ul className="navbar-nav fs-6 justify-content-evenly">
                <li className="nav-item p-3 py-md-1"><Link className="nav-link text-info" to={"/dashboard"}><HomeIcon/> INICIO</Link></li>
                <li className="nav-item p-3 py-md-1"><Link className="nav-link text-info" to={"/dashboard/usuarios"}><UserDetailIcon/> USUARIOS</Link></li>
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
              <button className="nav-link p-3 mx-4 nav-hover text-info fs-5" onClick={handleLogout}><label htmlFor="btn-sidebar"><LogoutIcon/>CERRAR SESION</label></button>
          </section>
        </div>
      </nav>

  <style>{`.ul-nav{
  --bs-scroll-height: 100px;`}</style>

    
    </>)
}