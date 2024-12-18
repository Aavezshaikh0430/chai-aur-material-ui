import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, TextField, Typography } from '@mui/material'
import React from 'react'

export const Accord = () => {


    const courses = ['react', 'nodejs', 'mern', 'nextjs', 'css', 'ui']

  return (
    <div>
        <Accordion>
            <AccordionSummary expandIcon={'>'}>
                <Typography variant='h6'>
                    What is mern Stack?
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, distinctio soluta! Voluptates, blanditiis consectetur. Fugit maiores optio officia quam provident quas aut, aspernatur, laboriosam non mollitia at consectetur, facilis accusamus!</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={'>'}>
                <Typography variant='h6'>
                    What is mern Full-Stack?
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, distinctio soluta! Voluptates, blanditiis consectetur. Fugit maiores optio officia quam provident quas aut, aspernatur, laboriosam non mollitia at consectetur, facilis accusamus!</Typography>
            </AccordionDetails>
        </Accordion>

        {/* auto complete method */}
        <Autocomplete 
        sx={{width:200,
            marginTop: 2
        }} 
        options={courses} 
        renderInput={(params)=>(<TextField {...params} label='Select a course' />)} />
    </div>
  )
}
