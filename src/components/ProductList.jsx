import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  // Indoor Plants
  { id: 1, name: "Snake Plant", price: 299, category: "Indoor", image: "https://via.placeholder.com/120" },
  { id: 2, name: "Peace Lily", price: 349, category: "Indoor", image: "https://via.placeholder.com/120" },
  { id: 3, name: "ZZ Plant", price: 399, category: "Indoor", image: "https://via.placeholder.com/120" },
  { id: 4, name: "Pothos", price: 199, category: "Indoor", image: "https://via.placeholder.com/120" },
  { id: 5, name: "Spider Plant", price: 179, category: "Indoor", image: "https://via.placeholder.com/120" },
  { id: 6, name: "Rubber Plant", price: 459, category: "Indoor", image: "https://via.placeholder.com/120" },

  // Succulents
  { id: 7, name: "Aloe Vera", price: 249, category: "Succulent", image: "https://via.placeholder.com/120" },
  { id: 8, name: "Jade Plant", price: 299, category: "Succulent", image: "https://via.placeholder.com/120" },
  { id: 9, name: "Haworthia", price: 199, category: "Succulent", image: "https://via.placeholder.com/120" },
  { id: 10, name: "Echeveria", price: 189, category: "Succulent", image: "https://via.placeholder.com/120" },
  { id: 11, name: "Sedum", price: 159, category: "Succulent", image: "https://via.placeholder.com/120" },
  { id: 12, name: "Cactus", price: 139, category: "Succulent", image: "https://via.placeholder.com/120" },

  // Flowering
  { id: 13, name: "Anthurium", price: 499, category: "Flowering", image: "https://via.placeholder.com/120" },
  { id: 14, name: "Orchid", price: 699, category: "Flowering", image: "https://via.placeholder.com/120" },
  { id: 15, name: "Rose Plant", price: 299, category: "Flowering", image: "https://via.placeholder.com/120" },
  { id: 16, name: "Begonia", price: 259, category: "Flowering", image: "https://via.placeholder.com/120" },
  { id: 17, name: "Geranium", price: 229, category: "Flowering", image: "https://via.placeholder.com/120" },
  { id: 18, name: "Kalanchoe", price: 219, category: "Flowering", image: "https://via.placeholder.com/120" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const categories = ["Indoor", "Succulent", "Flowering"];

  return (
    <div style={{ padding: "20px" }}>
      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat} Plants</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {plants
              .filter((p) => p.category === cat)
              .map((plant) => (
                <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px", width: "180px" }}>
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>₹{plant.price}</p>
                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
