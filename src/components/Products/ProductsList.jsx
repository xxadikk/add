import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { useProducts } from '../contexts/productsContext';

export default function ProductsList() {
    const {moreProducts} = useProducts()
    console.log(moreProducts)
  return (
    <Box>
        {moreProducts.map((item)=>(
                <Card sx={{ maxWidth: 345 }} key= {item.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.price}com
                    </Typography>
                    <Typography>
                        {item.category}
                    </Typography>
                    <Typography>
                        {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          
        ))}
    </Box>
  );
}