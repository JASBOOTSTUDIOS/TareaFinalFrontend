import { jwtDecode } from "jwt-decode";
import { API_ROUTE } from "../../ENV";

export function validToken(): boolean {
  const token = localStorage.getItem("token");
  let vail_Token: boolean = false;
  if (!token) {
    console.log(`No hay token para validar.`);
  } else {
    try {
      const isTokenExpired = (token: string): boolean => {
        const decode = jwtDecode<{ exp: number }>(token);
        // console.info(decode);
        return decode.exp * 1000 < Date.now();
      };
      if (token && isTokenExpired(token)) {
        console.info(`El token expiró.`);
        localStorage.removeItem("token");
      } else {
        vail_Token = true;
      }
    } catch (error) {}
  }
  return vail_Token;
}

export async function getUser() {
  const token = localStorage.getItem("token");
  const decode = jwtDecode<{
    id: number;
    nombres: string;
    apellidos: string;
    telefono: string;
    userName: string;
    userEmail: string;
  }>(token!);
  return decode;
}

export async function getAllUser() {
  console.info("getAllUsers");
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_ROUTE}/credentials`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return;
  }
}
