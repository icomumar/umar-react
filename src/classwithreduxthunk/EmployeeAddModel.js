import React, { useCallback, useEffect, useState } from "react";
import { getAllCompanies, getAllUsers, insertUsers } from "../NetworkUrl";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ediEmployeeAction, editClick, getCompanyAction, getUserAction, insertUserAction, modalClose, modalOpen } from './action';
import Modal from '@mui/material/Modal';
import { Autocomplete, FormLabel } from '@mui/material';
import { Checkbox, FormControlLabel, Grid, Radio, RadioGroup, TextareaAutosize, TextField } from "@material-ui/core";
import Autocomplete2 from "../AutoComplete";

import { connect } from "react-redux";
import _ from 'lodash';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const submit  = {
        textAlign:'center',
  }
  
 
 class EmployeeAddModel extends React.Component {
  state = {
   
      name:"", 
      age:"",
      validUser:"N",
      employeeImage:"", 
      date:"",
      editValue: [],
      gender:"Y",
      id:0
   
  }
 
  componentDidMount() {
    //alert(this.props.editvalue.name)
  }
  componentWillReceiveProps(nextProps){ 
   this.setState(nextProps.editemployee)
  }
   
     handleInput =(event) => {
     
      var name = event.target.name;
      var vall = event.target.value;
      this.setState(  {...this.state,  [name]:vall }  );      
     
      console.log("form====>",this.state) 
    }
     handleCheckBox =(target) => {   
      let validUser = "";
 //     this.setState(  {...this.state,  validUser: ![validUser]  } );      
      
      
        console.log("form====>",this.state) 
      }
      
       dropDownChange = (target) => {
        alert(target.id)    
      }
      
       handleFileChange = (event) => {
        console.log("form====>",this.state)  
        this.setState( {...this.state, employeeImage : event.target.files[0]});
      
        
      }
    
    render() {
      



      const {handleOpen, handleClose, subform,company,scene,editvalue} = this.props
      const defaultProps = {
        options: company,
        getOptionLabel: (option) => option.name,
      };
     
      return (
        <Modal
        open={handleOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    label="Employee Name"
                    id="outlined-required"
                    helperText="Please Enter Name"
                    onChange = {this.handleInput}
                    name = "name"
                    value={this.state.name}
                    InputLabelProps = {{
                        shrink : true
                    }}
                        
                    ></TextField>
            </Grid>
            <Grid item xs={6}>
            <TextField
                    label="Age"
                    id="outlined-required"
                    helperText="Please Enter Age"
                    onChange = {this.handleInput}
                    name = "age"
                    value={this.state.age}
                    InputLabelProps = {{
                        shrink : true
                    }}
                        
                    ></TextField>
            </Grid>
        <Grid item xs={6}>
            <RadioGroup row aria-label="Gender" value={this.state.gender}>
                <FormControlLabel control={<Radio/>}  onClick = {this.handleInput} name = "gender" label="Male" value = "Y"   />
                <FormControlLabel control={<Radio/>} onClick = {this.handleInput} name = "gender"  label="FeMale" value = "N"/>
            </RadioGroup>
        </Grid>
        <Grid item xs={6}>
            <RadioGroup row aria-label="Valid User" >
                <FormControlLabel control={<Checkbox />} onChange = {this.handleCheckBox} name = "validUser"  label="Valid User" />
             </RadioGroup>
        </Grid>
    
     <Grid item xs={6}>
        <FormLabel>Photo</FormLabel>
        <Button variant="contained" component="label"  >Upload File <input  type="file" onChange = {this.handleFileChange} name = "uploadFile"  hidden  /> </Button>
     </Grid>
       
     <Grid item xs={6}>
     <Autocomplete
{...defaultProps}
id="disable-close-on-select"

onChange={(event, value)=> {let companyName=0 ;this.setState(sta=>({  ...sta, companyName:value.id}))}} 

// prints the selected value
renderInput={(params) => (
  <TextField {...params} label="Company Name" variant="standard" />
)}
/>
     </Grid>
<Grid item sx={12}>
     <TextareaAutosize
maxRows={4}
aria-label="Address"
placeholder="Please Enter Address"
onChange = {this.handleInput} 
name = "address"
value={this.state.address}
fullWidth
/>
      </Grid></Grid>
     
     <Grid item xs={12}>
     <Grid item xs={6} style={{submit}}>
      { scene==='add' ?( <Button type='button'  variant="success"  onClick={()=>subform(this.state)}>Submit</Button>)
     :  ( <Button type='button'  variant="success"  onClick={()=>subform(this.state)}>Update</Button>) }<Button type='button' variant="success" onClick={handleClose}>Close</Button>
     </Grid>
     </Grid>
          </Typography>
         
        </Box>
      </Modal>
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
modalClose :modalClose,
modalOpen:modalOpen
 
}
 export default connect(mapStateToProps, mapDispatchToProps)(EmployeeAddModel);