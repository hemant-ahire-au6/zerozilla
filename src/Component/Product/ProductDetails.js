import React, { useEffect, useState } from "react";
import style from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { setCartItem } from "../../Redux/action";

function ProductDetails() {
  const param = useParams();
  const [product, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAllProducts() {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${param.id}`
      );

      setProduct(res.data);
    }

    getAllProducts();
  }, [param.id]);

  setTimeout(() => {
    setLoader(false);
  }, 1000);

  return (
    <>
      {loader ? (
        <div className={style.loaderDiv}>
          <CircularProgress size={150} />
        </div>
      ) : (
        <div className={style.container}>
          {console.log(product)}
          <div className={style.imageSection}>
            <img src={product.image} alt="product" />
          </div>

          <div className={style.productDesription}>
            <h1>{product.title}</h1>

            <p>{product.description}</p>
            <h5>Price: {product.price}</h5>

            <button onClick={() => dispatch(setCartItem(product))}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
