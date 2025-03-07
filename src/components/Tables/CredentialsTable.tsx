import { textColorPrimary } from "../themesAndColors/TemesAndColors";
import { EditAltIcon, TrashIcon, UserDetailIcon, UserPlusIcon } from "../icons/Icons";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { getAllUser, validToken } from "../../utils/jwt";
import FormTableCredentials from "./FormTableCredentials";

export type Credentials = {
    id:number;
    userName:string;
    userEmail:string;
    create_at:string;
    update_at:string;
}


export function CredentialsTable(){
    const navigate = useNavigate();
    const [Users, useUsers] = (useState<Credentials[]>([]));

    const validTokens = validToken();
    if(!validTokens){
        navigate("/login");
    };
    const getAllUsers = async () =>{
        const dataUsers:(Credentials[]) = await getAllUser();
        if(dataUsers){
            useUsers(dataUsers);
        }
    }

    return (<>
    <div className="table-responsive" style={{fontSize:"10px"}}>
        <div className="row">
            <div className="col-sm-4">
                <div className="row">

                    <button onClick={getAllUsers} className={`col nav nav-link ${textColorPrimary}`}><UserDetailIcon/><br/>VER USUARIOS</button>
                    <button className={`col nav nav-link ${textColorPrimary}`}><UserPlusIcon/><br/>AGREGAR USUARIO</button>
                </div>
            </div>
            <div className={`col-sm-8 ${textColorPrimary}`}>
                <FormTableCredentials/>
            </div>
        </div>
        <table className="table table-dark table-hover table-striped table-sm table-bordered">
            <thead className="">
                <tr className="fw-bold ">
                    <td scope="col">ID</td>
                    <td  scope="col">USUARIO</td>
                    <td scope="col">EMAIL</td>
                    <td scope="col">FECHA DE CREACION</td>
                    <td scope="col">FECHA DE ACTUALIZACION</td>
                    <td scope="col">ACCION</td>
                </tr>
            </thead>
            <tbody>
                {Users.map(user =>
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>{user.userEmail}</td>
                    <td>{user.create_at}</td>
                    <td>{user.update_at}</td>
                    <td>
                                                  
                        <button className="btn btn-sm  btn-outline-success" type="button"><EditAltIcon/></button>
                        <button className="btn btn-sm  btn-outline-danger" type="button"><TrashIcon/></button>
                        
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
    
    </>);
};