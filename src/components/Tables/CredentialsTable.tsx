import { textColorPrimary } from "../themesAndColors/TemesAndColors";
import { UserDetailIcon, UserPlusIcon } from "../icons/Icons";


export function CredentialsTable(){
    return (<>
    <div className="table-responsive">
        <div className="row">
        <button className={`col nav nav-link ${textColorPrimary}`}><UserDetailIcon/><br/>VER USUARIOS</button>
        <button className={`col nav nav-link ${textColorPrimary}`}><UserPlusIcon/><br/>AGREGAR USUARIO</button>
        </div>
        <table className="table table-hover table-sm table-bordered">
            <thead className="table-info">
                <tr className="table-active table-info fw-bold ">
                    <td scope="col">ID</td>
                    <td  scope="col">USUARIO</td>
                    <td scope="col">EMAIL</td>
                    <td scope="col">FECHA DE CREACION</td>
                    <td scope="col">FECHA DE ACTUALIZACION</td>
                    <td scope="col">ACCION</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>JSANCHEZ</td>
                    <td>jamincristina@gmail.com</td>
                    <td>05/2/2025</td>
                    <td>No se ha actualizado.</td>
                    <td>
                        <button className="btn btn-sm  btn-outline-success" type="button">Editar</button>
                        <button className="btn btn-sm  btn-outline-danger" type="button">Borrar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
    </>)
};