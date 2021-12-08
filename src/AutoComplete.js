import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

export default function Autocomplete2(props) {
    const [value, setValue] = React.useState(null);
    console.log("props        ",props)
    const defaultProps = {
        options: props.company,
        getOptionLabel: (option) => option.name,
      };
      console.log("defaultProps        ",defaultProps)
    return(  
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        name ="companyName"
        onChange={(event, value) => props.dropDownChange(value.id)} 
      
        // prints the selected value
        renderInput={(params) => (
          <TextField {...params} value={params.id} label="Company Name" variant="standard" />
        )}
      />
    )
}