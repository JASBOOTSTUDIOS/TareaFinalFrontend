import { jwtDecode } from "jwt-decode";
import { API_ROUTE } from "../../ENV";


export function validToken():boolean{
     const token = localStorage.getItem("token");
     let vail_Token:boolean = false;
        
            if (!token) {
             
            } else {
              try{
                const isTokenExpired = (token: string): boolean =>{
                  const decode = jwtDecode<{exp:number }>(token);
                  return decode.exp * 1000 < Date.now();
                }
                if(token && isTokenExpired(token)){
                  console.info(`El token expiró.`);
                  localStorage.removeItem("token");
                }else{
                    vail_Token = true;
                }
              }catch(error){
        
              }
              
            }
return vail_Token;
}

export async function  getUser(){
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const res = await fetch(`${API_ROUTE}/users/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  };