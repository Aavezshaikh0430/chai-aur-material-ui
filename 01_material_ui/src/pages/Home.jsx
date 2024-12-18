import React from 'react'
import {Button, Box, Typography} from '@mui/material';


function Home() {
  return (
    <div>
          <Box m={5}>
  <h1>Hello react-mui with vite</h1>
    <button>Click me</button>
    <Button color='primary'>Mui button</Button>

    <Button variant='contained'>Default</Button>
    <Button variant='contained' color='primary'>Primary</Button>
    <Button variant='contained' color='secondary'>Secoundary</Button>
    <Button variant='contained' disabled>Disable</Button>
    <Button variant='contained' color='primary' href='#contained-buttons'>Link</Button>
    <Button variant='contained' color='primary' href='#contained-buttons'>Link2</Button>
  </Box>

    {/* box components. */}
    <Box width={500} boxShadow={2} p={3} m={5} component='section'>
      <h1>Get Started!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci eum quam eaque quae placeat cupiditate aspernatur eos magnam consequuntur omnis, dolore quibusdam!
      </p>
    </Box>

    <div>
      <Typography variant='h1'>Heading 1</Typography>
      <Typography variant='h2'>Heading 2</Typography>
      <Typography variant='h3'>Heading 3</Typography>
      <Typography variant='h4'>Heading 4</Typography>
      <Typography variant='h5'>Heading 5</Typography>
      <Typography variant='h6'>Heading 6</Typography>
      <Typography variant='p'>Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Typography>
      <Typography variant='body1'>Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit. body1</Typography>
      <Typography variant='body2'>Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit. body2</Typography>
      <br />

      <Typography variant='subtitle1'>Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit. subtitle1</Typography>
      <Typography variant='subtitle2'>Heading Lorem ipsum dolor sit, amet consectetur adipisicing elit. subtitle2</Typography>

    </div>
    </div>
  )
}

export default Home