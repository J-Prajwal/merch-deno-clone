import { AppDispatch } from "../store";
import { getProductsAPI } from "./product.api";
import * as types from "./product.types";

export const getProducts = (): any => async (dispatch: AppDispatch) => {
  dispatch({ type: types.PRODUCT_LOADING });

  try {
    let data = await getProductsAPI();
    dispatch({ type: types.GET_PRODUCT, payload: data });
  } catch (e) {
    dispatch({ type: types.PRODUCT_ERROR });
  }
};
