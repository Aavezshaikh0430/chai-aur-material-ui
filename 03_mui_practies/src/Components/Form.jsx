import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  
  InputLabel,
  Select,
  MenuItem,
  Checkbox, FormLabel, FormHelperText,
  RadioGroup,
  Radio,
} from "@mui/material";

function Form() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    courses:'',
    gendar: '',
  });

  //input change funtion

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  //form hadling

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          type="text"
          placeholder="Enter name"
          variant="outlined"
          sx={{ margin: "20px" }}
          value={input.name}
          onChange={handleChange}
        />
        <br />

        <TextField
          name="email"
          type="email"
          placeholder="Enter email"
          sx={{ margin: "20px" }}
          value={input.email}
          onChange={handleChange}
          variant="outlined"
        />
        <br />

        <TextField
          name="password"
          type="password"
          variant="outlined"
          sx={{ margin: "20px" }}
          value={input.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        <br />

       {/* checkboxes */}
       
       <FormGroup sx={{margin: '20px'}}>
        <FormControlLabel 
        label = 'I Agree Terms & Condition'
        control={<Checkbox onChange={()=> setInput(prevState=>({
          ...prevState,
          terms: !input.terms
        }))}/>}
        />
       </FormGroup>

        <br />

        {/* dropdown menu */}
         <FormControl fullWidth>
            <InputLabel id ='menu'>Courses</InputLabel>

            <Select 
            labelId="menu" 
            id='menu-list' 
            label='courses' 
            value={input.courses}
            onChange={handleChange}
            name="courses"
            
            >
              <MenuItem value={'Mongodb'}>Mongodb</MenuItem>
              <MenuItem value={'Express'}>Express</MenuItem>
              <MenuItem value={'Node'}>Node</MenuItem>
              <MenuItem value={'React'}>React</MenuItem>

            </Select>
         </FormControl>
        <br />
        <br />

        {/* radio button */}

        <FormControl>
          <FormLabel>Gendar</FormLabel>
          
          <RadioGroup name="gendar" onChange={handleChange}>
            <FormControlLabel
            value={'male'}
            label='Male'
            control={<Radio />} />

            <FormControlLabel
            value={'female'}
            label='Female'
            control={<Radio />} />

            <FormControlLabel
            value={'other'}
            label='Other'
            control={<Radio />} />
             
             
          </RadioGroup>
        </FormControl>

        <br />
        <br />

        <Button type="submit" variant="contained" color="secondary">Submit</Button>
      </form>
    </>
  );
}

export default Form;
