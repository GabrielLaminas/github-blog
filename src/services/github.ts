import api from "./api";

import type { Users, Issues } from "../@types/github";

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

export async function getSearchIssues(query: string){
  try {
    const response = await api.get<Issues>(`search/issues?q=${query}`);
    
    if(response.status === 200){
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
}