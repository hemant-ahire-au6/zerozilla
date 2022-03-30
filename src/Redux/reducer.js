let initialState = {
  products: [],
  category: [],
  cartItem: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_CARDS":
      return { ...state, category: payload, products: payload };

    case "GET_BY_CATEGORY":
      return { ...state, category: payload, products: payload };

    case "SET_CART_ITEM":
      return { ...state, cartItem: [...state.cartItem, payload] };

    case "SEARCH_ITEM":
      const productNew = [...state.products];

      let filterData = productNew.filter((data) => {
        return data.title.toLowerCase().includes(payload);
      });

      console.log(filterData);
      return { ...state, category: filterData };

    default:
      return state;
  }
};

export default reducer;
