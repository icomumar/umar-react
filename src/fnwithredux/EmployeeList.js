import React, { useContext, useEffect, useState } from "react";
import DataTable from "../Table";
import {  getAllCompanies, getAllUsers, getEditUser, insertUsers } from "../NetworkUrl";
import { ediEmployeeAction, editClick, getCompanyAction, getUserAction, insertUserAction, modalClose, modalOpen } from '../action';

import EmployeeAddModel from './EmployeeAddModel'

import MUIDataTable from "mui-datatables";
import myContext from "./context";


 export const  submitForm = (form2) => {
    //console.log("form====>",form2) 
  
       // props.insertUserAction(form2);
    //   alert(form2.name);
        insertUsers(form2).then(res=>{
        const message = res.data.msg;
        alert( res.data.msg)
        
        // alert(res.status)
        if(res.status == 200){
        //  alert(res.status)
    //     const employeeList = state.employees.push(form2)
        
        
        }
        else{
            alert("failed")
        }
        })
    
    
  }
  
export default function EmployeeList (props) {

    const context = useContext(myContext);
   // const context = myContext(MYCON);
    console.log("GET STATE == >", context.state);
    const {employees,open, company,editemployee} = context.state;   
    const { dispatch} = context;   
   
  
    const[scene, setScene] = useState(null);
    const openPopup = () => {
         dispatch({ type: "ACTION_OPEN_MODAL_FOR_OPEN"});
    }
    const editdetail =(id) =>{
        alert(id.id);
        getEditUser(id.id).then(res=>{
            const resdata =res.data;
            dispatch({type: "ACTION_EDIT",data :resdata})  
          })
      }
    
    const columns = [
        {
            name:'name',
            Label:"Name",
            options: {
                filter: true,
                sort: true,
               }
        },
        {
            name:'age',
            Label:"Age",
            options: {
                filter: true,
                sort: true,
               }
        },
        {
            name:'gender',
            Label:"Gender",
            options: {
                filter: true,
                sort: true,
               }
        } ,
        {
            name:'validUser',
            Label:"validUser",
            options: {
                filter: true,
                sort: true,
               }
        }, 
        {
            name:"company",
            Label:"Company",
            options: {
                filter: true,
                sort: true,
               }
        },
        {
            name: "id",
            label:"Actions",
            options: {
              filter: false,
              sort: false,
              customBodyRender: value => {
                  const userid = employees.find(employee=>employee.id === value);
                 // console.log("user id =>",userid.id);
                  
                return (
                    <input type='button' value='Edit' className='btn btn-primary'  aria-label="edit" onClick={() =>editdetail(userid)}/>
                      
                 
                    
                );
             }
          }}
          ];
    const options = {
        filterType: 'checkbox',
      
      };
    useEffect(() => {
        getAllUsers().then(res=>{
            const usersres = res.data;
            dispatch({ type: "ACTION_CALL_LIST",data :usersres});
           // console.log("users res data =>",usersres)
            
        })     
    },[])

    useEffect(() =>{
        getAllCompanies().then(res=>{
        const resdata = res.data;
            console.log("companycompanycompany",resdata);
            dispatch({type: "ACTION_CALL_COMPANY_LIST",company :resdata})
        })    
        },[])

 
    const submitForm = (form2) => {
        insertUsers(form2).then(res=>{
         alert(res.data.msg);
         dispatch({type: "ACTION_INSERT",data :form2})
         dispatch({type: "ACTION_OPEN_MODAL_FOR_CLOSE"})
        })
      }
    //console.log("handleOpen",handleOpen);
    return (
       <div>
  
      <EmployeeAddModel subform = {submitForm} editvalue={editemployee} scene = {scene} company={company}/>
      {context.state.loading === true ? <h3>Loading........</h3> :  
      <MUIDataTable
       title={<div><h3 style={{display: 'inline-block'}}>Function Component - Employee List</h3><button onClick={openPopup} type='button'>Create</button></div>}
       data={employees}
       columns={columns}
       options={options}
       
      />  }
     
        </div>
    )
}