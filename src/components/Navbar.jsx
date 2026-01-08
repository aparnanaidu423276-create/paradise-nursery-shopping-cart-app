import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assests/logo.png";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav
      style={{
        padding: "12px 20px",
        background: "#2e7d32",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo + Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={logo} alt="Paradise Nursery" style={{ height: "40px" }} />
        <div>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>
            Paradise Nursery
          </div>
          <div style={{ fontSize: "12px", fontStyle: "italic" }}>
            Bringing Nature to Your Home
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div>
        <Link to="/" style={{ marginRight: "20px", color: "white" }}>
          Home
        </Link>
        <Link to="/plants" style={{ marginRight: "20px", color: "white" }}>
          Plants
        </Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart ({totalCount})
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
