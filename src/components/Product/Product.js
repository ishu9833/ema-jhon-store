import React from "react";
import "./Product.css";
const Product = ({ product, handleAddProduct }) => {
  //   console.log(product);
  const { name, img, seller, price, stock, star, features } = product;

  return (
    <div>
      <div className="container">
        <div className="row products">
          <div className="col">
            <img src={img} alt="" />
          </div>
          <div className="col-8">
            <p>{name}</p>
            <br />
            <div className="row">
              <div className="col-6">
                <p>by: {seller}</p>
                <p>
                  <small>$ {price}</small>
                </p>
                <p>Only {stock} left in stock - order soon</p>
                <button
                  type="button"
                  className="btn btn-warning btn-sm"
                  onClick={() => handleAddProduct(product)}
                >
                  <i class="fas fa-shopping-cart"></i> &nbsp;Add To Cart
                </button>
              </div>
              <div className="col-6">
                <p>
                  <b>Popularity:</b> {star} out of 5
                </p>
                <ul>
                  <b>Features: </b>
                  {features.map((ds) => (
                    <li>
                      {ds.description}, {ds.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
