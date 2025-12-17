import api from "./api";

import type { Users } from "../@types/github";

export async function getUsers(username: string) {
  try {
    const response = await api.get<Users>(`users/${username}`);
    
    if(response.status === 200){
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}