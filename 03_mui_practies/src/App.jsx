import { useState } from 'react'

// import Form from './Components/Form'

import { Typography } from '@mui/material'
import AppBarNavaigation from './Components/AppBarNavaigation'
import Cards from './Components/Cards'
import Modals from './Components/Modals'
import Containers from './Components/Containers'
import ListComponent from './Components/ListComponent'
import { Accord } from './Components/Accord'

function App() {
 

  return (
    <>
    {/* <Typography 
    variant='h1' 
    component={'h1'} 
    sx={{color: 'red', fontWeight:''}}
    >
    TeachInfo YT
    </Typography> */}
   <AppBarNavaigation />

   <div style={{marginTop: 100}}>
    {/* <Cards /> */}

    {/* <Modals/> */}

    {/* <Containers /> */}

    {/* <ListComponent /> */}

    <Accord />
   </div>
  
    </>
  )
}

export default App
