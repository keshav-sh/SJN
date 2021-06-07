import React from 'react';
import Product from './components/Product';
import data from './data'; 
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <a className="brand" href="/">SJN</a>
      </div>
      <div>
        <a href="/cart">Cart</a>
        <a href="/signin">Sign In</a>
      </div>
    </header>
    <main>
      <div className="row center">{
        data.products.map(products => (
         <Product  key={products._id} products={products}></Product>
        ))
      } 
      </div>
    </main>
    <footer className="row center">All Right Reserved</footer>
  </div>
  </BrowserRouter>
  )
}

export default App;
