import axios from "axios";

export const callAllCategories = (data) => {
  return async (dispatch) => {
    dispatch({ type: "CALL_ALL_PRODUCTS" });
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log(res);

    dispatch({ type: "GET_ALL_CARDS", payload: res.data });
  };
};

// const res = await axios.get("https://fakestoreapi.com/products");

export const getAllCategories = (data) => {
  console.log(data);
  return {
    type: "GET_ALL_CARDS",
    payload: data,
  };
};

export const callGetByCategories = (data) => {
  return async (dispatch) => {
    dispatch({ type: "CALL_GET_BY_CATEGORY" });
    const res = await axios.get(
      `https://fakestoreapi.com/products/category/${data}`
    );
    console.log(res);

    dispatch({ type: "SET_LOADING" });
    dispatch({ type: "GET_BY_CATEGORY", payload: res.data });
  };
};

export const getByCategory = (data) => {
  return {
    type: "GET_BY_CATEGORY",
    payload: data,
  };
};

export const setCartItem = (data) => {
  return {
    type: "SET_CART_ITEM",
    payload: data,
  };
};

export const searchItem = (data) => {
  return {
    type: "SEARCH_ITEM",
    payload: data,
  };
};
