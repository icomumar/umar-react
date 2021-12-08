import react from 'react';
import { ACTION_CALL_COMPANY_LIST, ACTION_CALL_LIST, ACTION_CLOSE_MODAL, ACTION_EDIT, ACTION_OPEN_MODAL, INSERT_ACTION } from './action';

const intialState = {
    form : [],
    employees : [],
    loading : true,
    company:[],
    editemployee : {}
}

export function reducer(state=intialState, action) {
  //  console.log("action",action)
    switch(action.type)  {
        case ACTION_CALL_LIST:
        return {
            ...state, 
            employees: action.data,  
            loading : false
        }
        case ACTION_CALL_COMPANY_LIST:
            return {
                ...state, 
                company: action.company,  
                loading : false
            }
        case INSERT_ACTION: 
            return {
                ...state,
                loading:false,
                employees:[...state.employees, action.data]
            }
        
        case ACTION_EDIT:
            return {
                ...state,
                loading:false,
                editemployee:action.data
            }
        
        case ACTION_CLOSE_MODAL:
            return {
                ...state,
                loading:false,
                editemployee:null
            }
        
        case ACTION_OPEN_MODAL:
            return {
                ...state,
                loading:false,
                editemployee:action.data
            }
        
        
    }
    return state
}