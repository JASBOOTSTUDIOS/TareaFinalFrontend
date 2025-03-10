import { MenuIcon, PerfilIcon } from "../icons/Icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser, validToken } from "../../utils/jwt";
import {
  BgContent,
  NavColor,
  textColorPrimary,
} from "../themesAndColors/TemesAndColors";

export function LoginAndDashboardNavbar() {
  const location = useLocation();
  const [users, setUsers] = useState(Object);
  const valid_Token = validToken();
  useEffect(() => {
    if (valid_Token) {
      const fetchUser = async () => {
        try {
          const user = await getUser();
          setUsers(user);
        } catch (error) {
          console.info(`Error al obtener el usuario:`);
          console.info(error);
        }
      };
      fetchUser();
    }
  }, [location]);

  return (
    <>
      <nav className={`navbar navbar-expand-sm ${NavColor} ${BgContent}`}>
        <div className="container-fluid">
          {valid_Token ? (
            <label
              className={`nav nav-link ${textColorPrimary}`}
              htmlFor="btn-sidebar"
            >
              <MenuIcon />
            </label>
          ) : (
            ""
          )}
          <Link className="navbar-brand" to={valid_Token ? "#" : "/"}>
            {valid_Token ? ` ${users.nombres}` : `Inicio`}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ul-nav">
              <li key={1} className="nav-item">
                {!valid_Token ? (
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/login"}
                  >
                    Login
                  </Link>
                ) : (
                  ""
                )}
              </li>
              <li key={2} className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li key={3} className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to={"#"}></Link>
              </li>
            </ul>

            {valid_Token ? (
              <>
                <center>
                  <p
                    style={{ fontSize: "8px" }}
                    className={`${textColorPrimary}`}
                  >
                    <PerfilIcon />
                    <br /> {` ${users.nombres}`}{" "}
                  </p>
                </center>
              </>
            ) : (
              `Inicio`
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
