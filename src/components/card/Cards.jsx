import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards({data}) {
// console.log(data);
    const {
      snippet,
      id
    }= data;

  return (
    <>
    <Card sx={{ maxWidth: 345, marginTop:"10vh" }}>
      <a href={"https://www.youtube.com/watch?v=" + id.videoId} target="_blank">
      <CardMedia
        component="img"
        height="140"
        image={snippet.thumbnails.medium.url}
        alt="green iguana"
        />
      </a>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {snippet.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {snippet.description}
        </Typography>
      </CardContent>
     
    </Card>

        </>
  )
}
