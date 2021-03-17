import React, { useState } from "react";
import fakeData from "../../assets/fakeData";
import Cart from "../Cart/Cart";
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
              />
            ))}
          </ul>
        </div>
        <div className="cart-container ">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
