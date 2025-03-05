import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="fs-3">¡Oops! Página no encontrada</h2>
            <p className="text-muted">Parece que la página que buscas no existe.</p>
            <Link to="/" className="btn btn-primary mt-3 px-4 py-2">
                Volver al Inicio
            </Link>
            <div className="mt-4">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-5562811-4649656.png"
                    alt="404 Not Found"
                    className="img-fluid w-50"
                />
            </div>
        </div>
    );
}
