import React,{useState} from 'react'
import { TextField,Button } from '@mui/material'


 

function Form() {
  const [input, setInput] = useState({
    name: '',
    email:'',
    password: '',
  })

  //input change funtion

  const handleChange = (e)=>{
    setInput(prevState=>({
      ...prevState,
      [e.targert.name]:[e.target.value],
    }))
  }
  return (
    <>
    <form>
      <TextField
        name='name'
        type='text'
        placeholder='Enter name'
        variant='outlined'
        sx={{margin:'20px'}}
        value={input.name}
        onChange={handleChange}
      />
      <br />

     <TextField
        name='email'
        type='email'
        placeholder='Enter email'
        sx={{margin:'20px'}}
        value={input.email}
        onChange={handleChange}
        variant='outlined'
     /> 
      <br />


     <TextField
        name='password'
        type='password'
        variant='outlined'
        sx={{margin:'20px'}}
        value={input.password}
        onChange={handleChange}
        placeholder='Enter password'
      />  
      <br />

    </form>
    </>
  )
}

export default Form;