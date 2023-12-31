import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  // never use your useState hook inside a condition, inside a function or inside loops
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  console.log("Header render");

  // if no dependency array => useEffect is called on every render
  // if empty dependency array => [] => useEffect is called on initial render(just once)
  // if dependency array is [btnName] => called everytime btnName is updated
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="flex justify-between bg-lime-50 shadow-md mb-4 items-center">
      <div>
        <img src={LOGO_URL} className="w-28" />
      </div>
      <div className="menu">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
