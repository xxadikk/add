import { Box, Grid } from '@mui/material';
import React from 'react';
import ProductsList from '../components/Products/ProductsList';

const ProductPage = () => {
    return (
        <Box>
            ProductsPage
            <Grid container spacing={3} ><ProductsList/></Grid>
            
        </Box>
    );
};

export default ProductPage;