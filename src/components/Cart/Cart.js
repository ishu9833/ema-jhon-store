import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  const total = cart.reduce((total, prd) => total + prd.price, 0);
  // let total = 0;
  // for (let i = 0; i <cart.length; i++) {
  //     const product =cart[i];
  //     const total = total + product.price

  // }
  let shipping = 0;
  if (total > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tax = (total / 10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-center">Order Summary</h5>
          <h6 className="text-center">Items Ordered: {cart.length}</h6>
          <div className="card-text">
            <p>
              <small>Shipping Cost: {shipping}</small>
            </p>
            <p>
              <small>VAT + Tax: {tax}</small>
            </p>
            <p>Product Price: {total.toFixed(2)}</p>
            <p>Total Price: {grandTotal}</p>
          </div>
          <button type="button" className="btn btn-warning btn-sm">
                  <i class="fas fa-shopping-cart"></i> &nbsp;Add To Cart
                </button>
          {/* <a href="/" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
