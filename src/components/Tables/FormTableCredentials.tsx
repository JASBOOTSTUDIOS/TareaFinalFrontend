import { textColorPrimary } from "../themesAndColors/TemesAndColors";
import { useState } from "react";

export default function FormTableCredentials(){
    const [userName, setUserName] = useState("");
    const [userPassword, setPassword] = useState("");
    const handlerUpdate = async () => {
        alert(`La contraseña es: ${userPassword} \nEl usuario es: ${userName}`);

    }
return (<>

<form onSubmit={handlerUpdate}>
    <div className="row mb-3">
        <div className="col-sm-5 m-1">
            <label htmlFor="userName" className={`${textColorPrimary}`}>USUARIO</label>
            <input className={`bg-dark form-control ${textColorPrimary}` } onChange={(e) => setUserName(e.target.value)} placeholder="Usuario" type="text" id="userName" />
        </div>
        <div className="col-sm-5 m-1">
            <label htmlFor="userEmail" className={`${textColorPrimary}`}>Email</label>
            <input className={`bg-dark form-control ${textColorPrimary}`} placeholder="Email" type="text" id="userEmail" />
        </div>
        <div className="col-sm-10 m-1">
            <label htmlFor="userEmail" className={`${textColorPrimary}`}>EMAIL</label>
            <input value={userPassword} onChange={(e) => setPassword(e.target.value)} required className={`bg-dark form-control ${textColorPrimary}`} placeholder="Email" type="text" id="userEmail" />
        </div>
        <div className="col-sm-5 m-1">
            <label htmlFor="userPassword" className={`${textColorPrimary}`}>CONTRASEÑA</label>
            <input value={userPassword} onChange={(e) => setPassword(e.target.value)} required className={`bg-dark form-control ${textColorPrimary}`} placeholder="Usuario" type="text" id="userPassword" />
        </div>
        <div className="col-sm-5 m-1">
            <label htmlFor="telefono" className={`${textColorPrimary}`}>Fecha de actualización</label>
            <input className={`bg-dark form-control ${textColorPrimary}`} disabled placeholder="Telefono" type="text" id="telefono"/>
        </div>
        <div className="row m-1">
            <div className="col"><button type="submit" className="btn btn-outline-success">Guardar</button></div>
            <div className="col"><button  className="btn btn-outline-danger" >Cancelar</button></div>
        </div>
    </div>

</form>
</>)
}