import { textColorPrimary } from "../../../components/themesAndColors/TemesAndColors";
import { CredentialsTable } from "../../../components/Tables/CredentialsTable";


export default function UsuariosDashboard(){
    return (<>
       
            <div className="row" >
                    <h1 className={`${textColorPrimary}`}>Tabla de Usuarios</h1>
                    <CredentialsTable/>
            </div>  
    </>)
}