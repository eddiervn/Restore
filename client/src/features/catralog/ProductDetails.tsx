import { useParams } from "react-router-dom"
import type { Product } from "../../app/models/product";
import { useEffect, useState } from "react";
import { Button, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";

export default function ProductDetails() {

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
 
   
  const {id} = useParams();
  
  useEffect(() => {
     fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [id])

  if(loading) return  <p>Loading product...</p>

  if(!product) return <p>Product not found</p>;

  const productDetails = [
    {label: 'Name', value: product.name},
    {label: 'Description', value: product.description},
    {label: 'Type', value: product.type},
    {label: 'Brand', value: product.brand},
    {label: 'Quantity in stock', value: product.quantityInStock},
  ]

  return (
   <Grid container 
   spacing={0}
    maxWidth='lg' 
    component={Paper} 
    variant="outlined">
    <Grid size={6}>
      <img src={product.pictureUrl} alt={product.name} style={{width: '100%', display: 'block'}} />
    </Grid>
    <Grid size={6} padding={2}>
        <Typography variant="h5">{product.name}</Typography>
        <Divider sx={{my: 2}} />
        <Typography variant="h6" color="primary">$ {(product.price / 100).toFixed(2)}</Typography>
        <TableContainer>
          <Table sx={{'& td: ': {fontSize: '1rem'}}}>
            <TableBody>
                { productDetails.map((detail, index) => 
                    <TableRow key={index}>
                      <TableCell sx={{fontWeight: 'bold', verticalAlign: 'top', width: 150}}>
                        {detail.label}
                      </TableCell>
                      <TableCell>
                        {detail.value}
                      </TableCell>
                    </TableRow>
                  )}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} marginTop={3}>
          <Grid size={6}>
            <TextField 
              variant="outlined" 
              type="number" 
              label="Quantity in basket" 
              fullWidth defaultValue={1} />
          </Grid>
          <Grid size={6}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              disableElevation 
              fullWidth  sx={{height: '100%'}}> 
                Add to Basket
            </Button>
          </Grid>
        </Grid>
    </Grid>
   </Grid>
  )
}