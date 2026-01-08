import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Your cart is empty</h2>
        <Link to="/plants">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Shopping Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #ccc",
            padding: "10px 0",
          }}
        >
          <img src={item.image} alt={item.name} width="80" />

          <div style={{ marginLeft: "20px", flex: 1 }}>
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
            <p>Total: ₹{item.price * item.quantity}</p>

            <button onClick={() => dispatch(updateQuantity({ id: item.id, change: -1 }))}>
              -
            </button>
            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, change: 1 }))}>
              +
            </button>

            <button
              onClick={() => dispatch(removeItem(item.id))}
              style={{ marginLeft: "20px" }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h3>Total Amount: ₹{totalAmount}</h3>

      <button style={{ marginRight: "20px" }}>Checkout (Coming Soon)</button>
      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;
