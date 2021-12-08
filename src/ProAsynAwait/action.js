import { getAllUsers, getEditUser } from "../NetworkUrl";

export const ACTION_CALL_LIST = "ACTION_CALL_LIST";
export const INSERT_ACTION = "ACTION_INSERT";
export const ACTION_EDIT = "ACTION_EDIT";
export const ACTION_CLOSE_MODAL = "ACTION_CLOSE_MODAL";
export const ACTION_OPEN_MODAL = "ACTION_OPEN_MODAL";
export const ACTION_CALL_COMPANY_LIST = "ACTION_CALL_COMPANY_LIST";
 export const editClick = (id) => {
    getEditUser(id).then(res=>{
       //  setEdit(res.data);
        console.log("edituseredituser", res.data);
     
    })
}




export const getUserAction = (data) => {
  
    return {
        type: "ACTION_CALL_LIST",
        data :data
    }
}

export const getCompanyAction = (data) => {  
    return {
        type: "ACTION_CALL_COMPANY_LIST",
        company :data
    }
}

export const insertUserAction = (data) => {  
    return {
        type: "ACTION_INSERT",
        data :data
    }
}

export const ediEmployeeAction = (data) => {  
    return {
        type: "ACTION_EDIT",
        data :data
    }
}

export const modalClose = () => {  
    return {
        type: "ACTION_CLOSE_MODAL",
     
    }
}

export const modalOpen= (data) => {  
    return {
        type: "ACTION_OPEN_MODAL",
        data:data
    }
}
