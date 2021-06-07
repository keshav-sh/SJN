import React from 'react'
import Rating from './Rating';

function Product(props) {
    const { products } =props;
    return (
    < div key={products._id} className="card">
          <a href={`/products/${products.id}`}>
            <img className="medium" src={products.image} alt={products.name}/>
          </a>
          <div className="card-body">
             <a href={`/products/${products.id}`}>
              <h2>{products.name}</h2>
            </a>
            <Rating 
            rating={products.rating} 
            numReviews = {products.numReviews}
            ></Rating>
            <div className="price">${products.price}</div>
          </div>
        </div>
    )
}

export default Product
