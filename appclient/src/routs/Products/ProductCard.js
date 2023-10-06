import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Products.css';



// Sample array of products (you can replace this with your actual data)

const products = [
  { "_id": "1", "name": "Product 1", "price": "10.99", "description": "Description of Product 1" },
  { id: 2, name: 'Product 2', price: 19.99, description: 'Description of Product 2' },
  {
    "_id": {
      "$oid": "64d13b0b9365465536b28640"
    },
    "image_url": "./../appapi/AssetsDB/basewab/ Baseweb.png",
    "name": "BaseWebMaster",
    "short_description": "**Base** is a design system comprised of modern, responsive, living components. Base Web is the React implementation of Base.",
    "download_link": "#",
    "demo_link": "https://baseweb.design"
  }
  
  // Add more products as needed
];

// ProductCard component
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image_url}></img>
      <h2>{product.name}</h2> 
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    <Card sx={{ maxWidth: 345 }}>
     0<CardMedia
        key={product.id}
        product={product}
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
          />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

// Main component where you map over the products array and render ProductCard components
function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;