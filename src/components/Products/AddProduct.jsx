import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useProducts } from '../contexts/productsContext';
import ProductsList from './ProductsList';

const AddProduct = () => {

    const [product, setProduct] = useState({
        name: "",
        title: "",
        image: "",
        category: "",
        price: "",
    })

    const {addProducts} = useProducts()
    
    return (
        <Box >
      <Box sx={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",

      }} >
           <TextField sx={{
            width: "350px",
            marginRight: "100px"
           }}
  helperText="Please enter Name"
  id="demo-helper-text-misaligned"
  label="Name"
  value={product.name} 
  onChange={(e)=>setProduct({...product, name: e.target.value})}
/>
           <TextField 
           sx={{
            width: "350px",
            marginRight: "100px"
           }}
  helperText="Please enter Title"
  id="demo-helper-text-misaligned"
  label="Title"
  onChange={(e)=>setProduct({...product, title: e.target.value})}
/>
           <TextField
           sx={{
            width: "350px",
            marginRight: "100px"
           }}
  helperText="Please enter Image"
  id="demo-helper-text-misaligned"
  label="Image"
  onChange={(e)=>setProduct({...product, image: e.target.value})}

/>
           <TextField
           sx={{
            width: "350px",
            marginRight: "100px"
           }}
  helperText="Please enter your Category"
  id="demo-helper-text-misaligned"
  label="Category"
  onChange={(e)=>setProduct({...product, category: e.target.value})}
/>
           <TextField
           sx={{
            width: "350px",
            marginRight: "100px"
           }}
  helperText="Please enter Category"
  id="demo-helper-text-misaligned"
  label="Price"
  onChange={(e)=>setProduct({...product, price: e.target.value})}
/>
<Button onClick={()=>addProducts(product)} sx={{
      width: "350px",
      marginRight: "100px"
}} variant="contained" color="success">
  Success
</Button>
</Box>
<Box sx={{
    marginTop: "25px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
}}>
<ProductsList />  
</Box>
</Box> 
    );
};

export default AddProduct;