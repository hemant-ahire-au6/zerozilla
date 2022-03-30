import React from "react";
import style from "./Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();

  const cartItem = useSelector((state) => state.cartItem);

  const cartCount = cartItem.length;
  return (
    <div className={style.container}>
      <h1 onClick={() => navigate("/")}>LOGO</h1>

      <div className={style.innerDiv}>
        <IconButton onClick={() => navigate("/cart")}>
          <Badge badgeContent={cartCount} color="primary">
            <ShoppingCartIcon color="action" />
          </Badge>
        </IconButton>

        <h5 onClick={() => navigate("/My-Profile")}> My Profile</h5>
      </div>
    </div>
  );
}

export default Navbar;
