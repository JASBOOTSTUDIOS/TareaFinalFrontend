import { API_ROUTE } from "../../ENV";

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
