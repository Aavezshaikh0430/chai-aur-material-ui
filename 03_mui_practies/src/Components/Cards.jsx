import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText,
    DialogTitle, 
    Typography 
} from '@mui/material'
import React,{useState}from 'react'


function Cards() {

    const [open, setOpen] = useState(false)
  return (
    <div>

        <Card sx={{maxWidth:300}}>
            <CardMedia 
            component={'img'} 
            height="140"
            image='https://media.istockphoto.com/id/2050780380/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.webp?a=1&b=1&s=612x612&w=0&k=20&c=YiY0YH-8XMysOS3TyLM3wxUOEUd1lPnAtybUtJGr3lg='
            alt='test image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    Web Design
                </Typography>
                <Typography variant='body2' >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime facilis illum voluptas. Asperiores ipsum corporis, molestias reiciendis non reprehenderit aperiam ut, soluta illum aspernatur tenetur aut odio exercitationem tempore!
                </Typography>
            </CardContent>

            <CardActions>
                <Button size='small' color='primary'>
                    Share
                </Button>

                <Button 
                size='small' 
                color='primary' 
                onClick={()=>setOpen(true)}>
                    Delete
                </Button>
            </CardActions>
        </Card>

        <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle>Are You Sure</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are You sure to delete this products ?
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button open={open} onClick={()=>setOpen(false)}>cancel</Button>
                <Button>delete</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default Cards