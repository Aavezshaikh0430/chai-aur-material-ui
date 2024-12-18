import {Box, Button, Link, Modal, Typography } from '@mui/material'
import React , {useState}from 'react'

const Modals = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        <Button onClick={()=>setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={()=>setOpen(false)}>
            <Box position='absolute' top='50%' left='50%'>
                <Typography>This is a Modal</Typography>
                <Button variant='contained' onClick={()=>setOpen(false)}>cancel</Button>
            </Box>
        </Modal>

        <Link 
        variant='h4' 
        color='secondary' 
        href='https://www.google.com/'
        underline='hover'
        >
        Navlink
        </Link>
    </div>
  )
}

export default Modals