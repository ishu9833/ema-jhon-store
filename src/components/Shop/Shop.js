import React, { useState } from "react";
import fakeData from "../../assets/fakeData";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    console.log("added", product);
    const newCart = [...cart, product]
    setCart(newCart)
  };
  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          <ul>
            {products.map((pd) => (
              <Product
                product={pd}
                key={pd.key}
                handleAddProduct={handleAddProduct}
              ></Product>
            ))}
          </ul>
        </div>

        <div className="cart-container">
          <h2>This is cart </h2>
          <h4>Order summary: {cart.length}</h4>
        </div>
      </div>
    </div>
  );
};

export default Shop;
