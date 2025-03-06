import { textColorPrimary } from "../../../components/themesAndColors/TemesAndColors";
import { CredentialsTable } from "../../../components/Tables/CredentialsTable";


export default function UsuariosDashboard(){
    return (<>
        <center>
            <CredentialsTable/>
            <h1 className={`${textColorPrimary}`}>Usuarios</h1>
        </center>
    
    </>)
}