import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material"
import type { Product } from "../../app/models/product"

type Props = {
    product: Product
}
export default function ProductCard({product} : Props) {
  return (
    <Card variant="outlined">
         <CardHeader sx={{px:1, py:2}}
            avatar={
            <Avatar sx={{ bgcolor: 'orangered', fontWeight: 'light', width: 36, height: 36}} aria-label="product">
                {product.name.charAt(0).toUpperCase()}
            </Avatar>
            }
            title={product.name}
            subheader={`${product.brand} / ${product.type}`}/>
        <CardMedia 
            component="img"
            image={product.pictureUrl}
            sx={{ height: 260, objectFit: 'cover' , bgcolor: '#03a9f4'}}
            alt="Paella dish"/>
        <CardContent sx={{pb: 0}}>
            <Typography variant="body1" color="secondary">
                { product.price.toFixed(2) }$
            </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: 'space-between'}}>
            <Button size="small" disableElevation color="success" variant="contained">Add to cart</Button>
            <Button size="small">Details</Button>
        </CardActions>
    </Card>
  )
}