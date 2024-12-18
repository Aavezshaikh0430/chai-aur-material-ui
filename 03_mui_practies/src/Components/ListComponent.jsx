import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

const ListComponent = () => {
  const courses = ['react', 'nodejs', 'mern']
  return (
    <div>
        <List sx={{width: 250, background:'gray' }}>
          {courses.map((course)=>(
            <ListItem>
            <ListItemButton>{'<'}</ListItemButton>
            <ListItemText primary={course} />
        </ListItem>
          ))}
            
        </List>
    </div>
  )
}

export default ListComponent