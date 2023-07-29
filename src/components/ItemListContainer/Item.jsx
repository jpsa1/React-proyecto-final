import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Item({producto, id}) {


  return (
    <Card sx={{ maxWidth: 345, textAlign: 'center', margin: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={producto.imagen}
          alt={producto.titulo}
          height={350}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {producto.titulo}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Precio: ${producto.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ maxWidth: 345, justifyContent: 'center' }}>
        <Link to={`/item/${id}`}>
          <Button size="small" color="primary" >
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}