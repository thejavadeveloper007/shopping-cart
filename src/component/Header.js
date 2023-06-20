// import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

import { TiShoppingCart } from "react-icons/ti"
import { useContext } from "react";
import { Content } from "./../context/Context";
const Header = () => {
  const {cart,setCart} =useContext(Content);
  return (
<div className="header">
<div className="heading">
    <span>Shopping Cart</span>
</div>
<div className="list">
<ul>
    <li>
        <Link to="/">Home Page</Link>
    </li>
    <li>
        <Link to="/cart"><TiShoppingCart /><span>({cart?.length})</span></Link>
    </li>
</ul>
</div>
</div>
  );
};

export default Header;
