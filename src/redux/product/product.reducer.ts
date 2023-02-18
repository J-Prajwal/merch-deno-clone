import { Product } from "@/utils/types";
import * as types from "./product.types";

interface ProductState {
  loading: boolean;
  error: boolean;
  product: Product[];
}

interface ProductAction {
  type: string;
  payload?: any;
}

const initialState: ProductState = {
  loading: false,
  error: false,
  product: [],
};

export const reducer = (
  state: ProductState = initialState,
  { type, payload }: ProductAction
) => {
  switch (type) {
    case types.PRODUCT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case types.GET_PRODUCT: {
      return { ...state, loading: false, error: false, product: payload };
    }
    case types.PRODUCT_ERROR: {
      return { ...state, error: true, loading: false };
    }
    default:
      return state;
  }
};
