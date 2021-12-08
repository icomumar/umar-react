import React from 'react';
import DataTable from "../Table";
import {  getAllCompanies, getAllUsers, getEditUser, insertUsers } from "../NetworkUrl";
import { ediEmployeeAction, editClick, getCompanyAction, getUserAction, insertUserAction, modalClose, modalOpen } from './action';
import { connect } from 'react-redux';
import { DataGrid } from '@material-ui/data-grid';
import MUIDataTable from 'mui-datatables';
import EmployeeAddModel from './EmployeeAddModel'
import { Button } from 'bootstrap';


class EmployeeList extends React.Component {
   
    state = {
            employees : [],
            loading:true,
            scene:'add',
            edit: {
                name : "",
                age: "",
                validUser:"N",
            },
            open:false,
            close:true
        }
      
       handleCloseFn = () => {
         this.props.modalClose();
         this.setState({open:false, scene:'edit'})
         this.setState({close:true})
    }
    
    openPopup = () => {
       
        this.setState({open:true,scene:'add'})
        this.setState({close:false})
       
    }
       submitForm = (form2) => {
        console.log("form====>",form2) 
        if(this.state.scene == "add") {
            this.props.insertUserAction(form2);
        //   alert(form2.name);
            insertUsers(form2).then(res=>{
            const message = res.data.msg;
            alert( res.data.msg)
            
            // alert(res.status)
            if(res.status == 200){
            //  alert(res.status)
        //     const employeeList = this.state.employees.push(form2)
            
            
            }
            else{
                alert("failed")
            }
            })
        }
        else {
        //   const
        }
      }
      editdetail =(id) =>{
     //alert(id.name)
        this.setState({open:true,scene:'edit'})
        this.setState({close:false})
        this.setState({edit:id})
        this.props.ediEmployeeAction(id);
      //  this.props.modalOpen(id);
       // console.log("edivalyefromparent",this.state.edit)
      }
    async getAllDetail() {
       /*await getAllCompanies().then(res=>{
            const company = res.data;
            console.log("Company",company)
            this.props.getCompanyAction(company);
        })
        await getAllUsers().then(res=>{
            const usersres = res.data;
           console.log("response data",res.data);
            this.props.userDetail(res.data)
            console.log("usersres=>",usersres);            
        }) */
       
        Promise.allSettled([ getAllCompanies(),getAllUsers()])
        .then(res=>{
            const company = res[0].data;
            console.log("Company",company)
          
            
            const usersres = res[1].data;
            console.log("response data",usersres);
            this.props.userDetail(usersres)
            this.props.getCompanyAction(company);
        })
      }
    componentDidMount() {
        this.state.loading = this.props.loading;
       this.getAllDetail();
       
       
    }
   
  render(){
    const {employees, company} = this.props;
    //console.log("employeesemployeesemployees",employees);
   // this.state.employees =employees;
    console.log(" this.state.employees", this.state.employees);
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
                    <input type='button' value='Edit' className='btn btn-primary'  aria-label="edit" onClick={() =>this.editdetail(userid)}/>
                      
                 
                    
                );
             }
          }}
          ];
    const options = {
        filterType: 'checkbox',
      
      };
      return(
        
        <div>
          <MUIDataTable
       title={<div><h3 style={{display: 'inline-block'}}>Employee List</h3><button onClick={this.openPopup} type='button'>Create</button></div>}
       data={employees}
       columns={columns}
       options={options}
       
      /> 
      <EmployeeAddModel scene={this.state.scene} subform = {this.submitForm}  company={company} editvalue={this.state.edit}  handleOpen ={this.state.open} handleClose={this.handleCloseFn} />
        </div>
    )
  }

}
function mapStateToProps(state) {
    return {
        loading : state.loading,
        employees:state.employees,
        company: state.company,
        editemployee: state.editemployee
    };
}
const mapDispatchToProps  = {
  userDetail: getUserAction,
  getCompanyAction :getCompanyAction,
  insertUserAction:insertUserAction,
  ediEmployeeAction:ediEmployeeAction,
  modalClose:modalClose,
  modalOpen:modalOpen
   
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);