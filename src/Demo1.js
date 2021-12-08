import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeAddModel from "./EmployeeAddModel";
import { getAllCompanies, getAllUsers, getEditUser, insertUsers } from "./NetworkUrl";
import DataTable from "./Table";
import Table from "./Table";



export default function Demo1() {
    const[employees, setEmployees] = useState([]);
    const [company,setCompanies] = useState([]);
    const [handleOpen, setHandleOpen] =useState(false)  ; 
    const [handleClose, setHandleClose] =useState(true)  ; 
    const[loading, setLoading] = useState(false);
    const [edit,setEdit] = useState([]);
    const[scene, setScene] = useState(null);
  
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'age', headerName: 'Age', width: 130 },
        { field: 'gender', headerName: 'Gender', width: 130 },
        { field: 'company', headerName: 'Company', width: 230 },
        { field: 'editaction', headerName: 'Edit', width: 130,  renderCell:(params)=> {
           return  <Button type='button' variant="contained" onClick = {()=>editClick(params.id)} color="failure">EDIT</Button>
        }},
    ]  
    useEffect(() => {
        getAllUsers().then(res=>{
            const usersres = res.data;
            console.log("users res data =>",usersres)
            setEmployees(res.data);
            console.log("employees  =>",employees);
            setLoading(true);
        })     
    },[])

    useEffect(() =>{
        getAllCompanies().then(res=>{
        const resdata = res.data;
           setCompanies(resdata);
           setScene("add");
           console.log("company  =>",company);
        })    
        },[])

    const handleOpenFn = () => {
        setHandleOpen(true);
        setHandleClose(false);
        
    }
    const handleCloseFn = () => {
        setHandleOpen(false);
        setHandleClose(true);
    }
  
    const editClick = (id) => {
        getAllCompanies().then(res=>{
            const resdata = res.data;
        });
        getEditUser(id).then(res=>{
             setEdit(res.data);
            console.log("edituseredituser", edit);
         
            setHandleOpen(true);
            setHandleClose(false);
          //  setScene("edit");
        })
    }
    const submitForm = (form2) => {
        console.log("form====>",form2) 
     //   alert(form2.name);
        insertUsers(form2).then(res=>{
         alert(res.data.msg);
         setHandleOpen(false);
         setHandleClose(true);
         getAllUsers().then(res=>{
            const usersres = res.data;
            console.log("users res data =>",usersres)
            setEmployees(res.data);
            console.log("employees  =>",employees);
            setLoading(true);
        })  
        })
      }
    console.log("handleOpen",handleOpen);
    return (
       <div>
     <Button onClick={handleOpenFn}>Create Employee</Button>
      <EmployeeAddModel subform = {submitForm} editvalue={edit} scene = {scene} company={company} handleOpen ={handleOpen} handleClose={handleCloseFn} />
      {loading === false ? <h3>Loading........</h3> :  <DataTable rows = {employees} columns = {columns} /> }
     
        </div>
    )
}