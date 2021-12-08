import React, { useCallback, useContext, useEffect, useState } from "react";
import { getAllCompanies, getAllUsers, insertUsers } from "../NetworkUrl";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Autocomplete, FormLabel } from '@mui/material';
import { Checkbox, FormControlLabel, Grid, Radio, RadioGroup, TextareaAutosize, TextField } from "@material-ui/core";
import Autocomplete2 from "../AutoComplete";
import myContext from "./context";


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

 
 
export default function EmployeeAddModel(props) {
  console.log("props  =>",props);
    const [company,setCompanies] = useState([]);
  
    const context = useContext(myContext);
    // const context = myContext(MYCON);
     console.log("GET STATE == >", context.state);
     const {open, close} = context.state;   
     const { dispatch} = context;   


    const [form2,setForm2] = React.useState({name:"", age:"",validUser:false, employeeImage:"", date:""});
   
    useEffect(() =>{
     // setForm2(props.editvalue)
     console.log("props", props.editvalue);
     setForm2(props.editvalue);
    
    },[props.editvalue])
    
    
     console.log("form2 with props",form2);
    
    const handleInput =(event) => {
     
        var name = event.target.name;
        var vall = event.target.value;
        setForm2(  {...form2,  [name]:vall }  );      
        console.log("form====>",form2) 
    }
    const handleCheckBox =(target) => {   
     let validUser = "";
      setForm2(s => ({ ...s, validUser: !s[validUser] }));
    
        console.log("form====>",form2) 
    }

    const dropDownChange = (target) => {
        alert(target.id)    
     }
  
      const handleFileChange = (event) => {
        console.log("form====>",form2) 
        setForm2(s => ({ ...s, employeeImage : event.target.files[0] }));
        
      }
      const handleCloseFn = () => {
        dispatch({ type: "ACTION_OPEN_MODAL_FOR_CLOSE"});
    }
      const defaultProps = {
        options: props.company,
        getOptionLabel: (option) => option.name,
      };
      console.log("defaultProps        ",defaultProps)

    return (
    
            <div>
             
              <Modal
                open={open}
                onClose={close}
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
                            onChange = {handleInput}
                            name = "name"
                            value={form2.name}
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
                            onChange = {handleInput}
                            name = "age"
                            value={form2.age}
                            InputLabelProps = {{
                                shrink : true
                            }}
                                
                            ></TextField>
                    </Grid>
                <Grid item xs={6}>
                    <RadioGroup row aria-label="Gender" value={form2.gender}>
                        <FormControlLabel control={<Radio/>}  onClick = {handleInput} name = "gender" label="Male" value = "Y"   />
                        <FormControlLabel control={<Radio/>} onClick = {handleInput} name = "gender"  label="FeMale" value = "N"/>
                    </RadioGroup>
                </Grid>
                <Grid item xs={6}>
                    <RadioGroup row aria-label="Valid User" >
                        <FormControlLabel control={<Checkbox />} onChange = {handleCheckBox} name = "validUser"  label="Valid User" />
                     </RadioGroup>
                </Grid>
            
             <Grid item xs={6}>
                <FormLabel>Photo</FormLabel>
                <Button variant="contained" component="label"  >Upload File <input  type="file" onChange = {handleFileChange} name = "uploadFile"  hidden  /> </Button>
             </Grid>
               
             <Grid item xs={6}>
             <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
      
        onChange={(event, value)=> {let companyName=0 ;setForm2(sta=>({  ...sta, companyName:value.id}))}} 
      
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
      onChange = {handleInput} 
      name = "address"
      value={form2.address}
    fullWidth
    />
              </Grid></Grid>
             
             <Grid item xs={12}>
             <Grid item xs={6} style={{submit}}>
               <Button type='button'  variant="success"  onClick={()=>props.subform(form2)}>Submit</Button>
               <Button type='button' variant="success" onClick={handleCloseFn}>Close</Button>
             </Grid>
             </Grid>
                  </Typography>
                 
                </Box>
              </Modal>
            </div>
          );
        
}