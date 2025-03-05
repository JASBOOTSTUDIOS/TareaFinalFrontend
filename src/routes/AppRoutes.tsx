import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/Login";
import { Navbar } from "../components/Navbar";
import { InicioDashboard } from "../pages/dashboard/routesDashboard/InicioDashboard";
import NotFound from "../pages/NotFund";
import UsuariosDashboard from "../pages/dashboard/routesDashboard/UsuaiosDashboard";
export default function AppRoutes(){
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" element={<><Home /></>} />
                <Route path="/login" element={<><Login /></>} />
                <Route path="/dashboard" element={<><Dashboard/></>}/>
                {/* Routes Dashboard */}
                <Route path="/dashboard/inicio" element={<InicioDashboard/>}/>
                <Route path="/dashboard/usuarios" element={<UsuariosDashboard/>}/>
                

            </Routes>
        </>
    );
}
