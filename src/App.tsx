import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
export default function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<><Navbar/><Home /></>} />
            <Route path="/login" element={<><Navbar/><Login /></>} />
            <Route path="/dashboard" element={<><Navbar/><Dashboard /></>} />
        </Routes>
        </>
    );
}
