import React from 'react'
import { Container, Typography } from '@mui/material'

const Containers = () => {
  return (
    <>
        <Container sx={{backgroundColor:'green', color:'whitesmoke'}} maxWidth='xs'>
            <Typography variant='body2'>
                This is extra Small
            </Typography>
        </Container>

        <br/>

        <Container sx={{backgroundColor:'green' ,color:'whitesmoke'}} maxWidth='sm'>
            <Typography variant='body2'>
                This is Small
            </Typography>
        </Container>

        <br/>

        <Container sx={{backgroundColor:'green' ,color:'whitesmoke'}} maxWidth='md'>
            <Typography variant='body2'>
                This is medium
            </Typography>
        </Container>

        <br/>

        <Container sx={{backgroundColor:'green' ,color:'whitesmoke'}} maxWidth='lg'>
            <Typography variant='body2'>
                This is larg
            </Typography>
        </Container>

        <br/>

        <Container sx={{backgroundColor:'green' ,color:'whitesmoke'}} maxWidth='xl'>
            <Typography variant='body2'>
                This is extra larg
            </Typography>
        </Container>

        <br/>
    </>
  )
}

export default Containers