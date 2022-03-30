import React from "react";
import style from "./ProductItem.module.css";
import { useNavigate } from "react-router-dom";

function ProductItem({ id, title, price, image }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/Product-details/${id}`);
  };
  return (
    <div className={style.container} onClick={handleClick}>
      <img src={image} className={style.image} alt="Product" />
      <div className={style.contentDiv}>
        <h1>{title}</h1>
        <h5> Price: {price}</h5>
      </div>
    </div>
  );
}

export default ProductItem;
