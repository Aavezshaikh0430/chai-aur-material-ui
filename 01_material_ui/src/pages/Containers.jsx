import React from 'react'
import {Box, Typography, Container} from '@mui/material'

function Containers() {
  return (
    <div>

      <Container maxWidth='' disableGutters={true}>
      <Box textAlign='center' pt={5}>
            <Typography variant='h4'>Why Choose Us?</Typography>
            <Typography variant= 'subtitle1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ullam omnis perspiciatis tenetur libero unde enim doloremque aspernatur, odit asperiores blanditiis minus, dolor commodi. Assumenda repudiandae unde quasi iusto ea in possimus dolor, inventore sapiente cupiditate? Ab quaerat quas explicabo? Ab tempora magni veritatis molestiae quidem, optio earum dolore recusandae!</Typography>
        </Box>
      </Container>
    </div>
  )
}

export default Containers