import React from 'react'
import {Box, Typography} from '@mui/material' 
import { makeStyles } from '@mui/styles'




// const useStyles= makeStyles({
//     container:{
//         maxWidth: '100vw',
//         maxHeight: '100vh',
//         display : 'flex',
//         justifyContent: 'space-evenly',
//         alignItems: 'flex-start',
//         padding: 20,
//     },

//     mybox:{
//         width : 300, //300px ki jagaha sirf 300 bhi likh sakte. 3rem
//         backgroundColor : 'red',
//         padding: 50,
//         color : 'white',
//         borderRadius: 12,
//         boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.4)'

//     }
// })


//default theme



const useStyles= makeStyles((theme)=>(
    {
        container:{
            maxWidth: '100vw',
            maxHeight: '100vh',
            display : 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            padding: 20,
        },
    
        mybox:{
            width : 300, //300px ki jagaha sirf 300 bhi likh sakte. 3rem
            backgroundColor : "red",
            padding: 50,
            color : 'white',
            borderRadius: 12,
            boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.4)'
    
        }
    }
))

function Containers2() {
    const classes = useStyles()
  return (
    <div>

    <Box className= {classes.container}>
        <Box className = {classes.mybox}>
            <Typography variant='h4'>Heading 1</Typography>
            <Typography variant='subtitle1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et earum adipisci accusantium vero, expedita saepe possimus tempora ipsum, magni nostrum quia deserunt?</Typography>
        </Box>

        <Box className = {classes.mybox}>
            <Typography variant='h4'>Heading 2</Typography>
            <Typography variant='subtitle1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et earum adipisci accusantium vero, expedita saepe possimus tempora ipsum, magni nostrum quia deserunt?</Typography>
        </Box>

        <Box className = {classes.mybox}>
            <Typography variant='h4'>Heading 3</Typography>
            <Typography variant='subtitle1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et earum adipisci accusantium vero, expedita saepe possimus tempora ipsum, magni nostrum quia deserunt?</Typography>
        </Box>

    </Box>
    </div>
  )
}

export default Containers2