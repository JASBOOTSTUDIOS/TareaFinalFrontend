import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
export default function App() {
    return (
        <>
        <div className="container-fluid bg-dark">
            <Navbar/>
            <Routes>
                <Route path="/" element={<><Home /></>} />
                <Route path="/login" element={<><Login /></>} />
                <Route path="/dashboard" element={<><Dashboard /></>} />
            </Routes>
        </div>
        </>
    );
}
