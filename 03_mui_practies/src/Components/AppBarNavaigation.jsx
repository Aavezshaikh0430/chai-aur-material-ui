import React,{useState} from 'react'
import { AppBar, Button, Typography, Toolbar, Tabs, Tab } from '@mui/material'

function AppBarNavaigation() {
  const [value, setValue] = useState('0')
  return (
    <div>
      <AppBar color='secondary'>
       <Toolbar>
       <Typography variant='h4'>
          LOGO
        </Typography>

        <Tabs sx={{marginLeft:'auto'}} 
        textColor='inherit' 
        indicatorColor='primary'
        value={value}
        onChange={(e, val)=> setValue(val)}
        >
            <Tab label = 'Home'/>
            <Tab label = 'About'/>
            <Tab label = 'Contact'/>
        </Tabs>

        <Button variant='contained' color='success' sx={{marginLeft:'auto'}}>SingIn</Button>

       </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppBarNavaigation