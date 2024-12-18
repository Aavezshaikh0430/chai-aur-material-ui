import React from 'react'
import {makeStyles} from '@mui/styles'
import { Typography } from '@mui/material';

const useStyle = makeStyles({
  blue : {
    color: 'blue',
    fontSize: '20px'
  }
})

function Contact() {
  const classes = useStyle();
  return (
    <div>
      <Typography
       variant='h3' 
       className={classes.blue}
       >
        Hello Material UI
        </Typography>
    </div>
  )
}

export default Contact