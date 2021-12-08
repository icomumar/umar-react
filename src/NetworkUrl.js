import axios from "axios";
import API from "./API";

export const CALL_USERS_ALL_DETAILS = "try.php";
export const CALL_USERS_INSERT = "try2.php";
export const CALL_USERS_EDIT = "edit.php";
export const CALL_COMPANY_ALL_DETAILS = "company.php";

export async function getAllUsers() {    
       return await API.post(CALL_USERS_ALL_DETAILS)    
}
export async function getAllCompanies() {    
       return await  API.post(CALL_COMPANY_ALL_DETAILS)    
}
export async function getEditUser(id) {    
       return await  API.get(CALL_USERS_EDIT+'?id='+id)    
}
export function insertUsers(data) {    
       console.log("insertusers",data);
       return  API.post(CALL_USERS_INSERT,data)    
}