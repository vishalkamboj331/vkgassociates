import React from 'react'
import ProductCard from './ProductCard'
import './Products.css'

const Products = () => {
  return (
    <div>
        <h1 className='productsTagLine'>Empower Your Vision with Our Digital Arsenal <br /> Unveil Possibilities in Our Product Collection</h1>
        <div className='productContainer'>
          <div class="product-filter">
            <div class="filter-buttons">
                 <button class="filter-btn" data-category="all">All</button>
                 <button class="filter-btn" data-category="electronics">Electronics</button>
                 <button class="filter-btn" data-category="clothing">Clothing</button>
                 <button class="filter-btn" data-category="accessories">Accessories</button>
            </div>
          </div>

          <div className='products'><ProductCard/></div>
       </div>
    </div>
  )
}

export default Products

