import { Provider } from "react-redux";
import EmployeeList from "./EmployeeList";
import myContext from "./context";
import { useReducer } from "react";
import {  reducer } from './employeereducer';

const intialState = {
    form : [],
    employees : [],
    loading : true,
    company:[],
    editemployee : {}
}
export default  function App() {
   const[state, dispatch] = useReducer(reducer, intialState);
    return(
        <myContext.Provider value = {{state,dispatch:dispatch}}>
           <EmployeeList />
        </myContext.Provider>
    )
}