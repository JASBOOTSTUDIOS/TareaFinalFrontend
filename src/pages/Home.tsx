import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="row text-center vh-100 bg-dark">
            <h1 className="">Bienvenido a la App</h1>
            <p className="mt-4">Por favor, inicia sesión para continuar.</p>
            <Link to="/login" className="">
                Ir a Login
            </Link>
        </div>
    );
}
