import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVER_ITEM } from "../constants/cartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInstock: data.countInstock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItem));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVER_ITEM, payload: productId });
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItem));
};
