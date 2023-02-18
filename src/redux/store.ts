import {
  combineReducers,
  legacy_createStore,
  compose,
  applyMiddleware,
} from "redux";
import { reducer as productReducer } from "./product/product.reducer";
import { reducer as cartReducer } from "./cart/cart.reducer";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFn = () => AppDispatch;
export const useAppDispatch: DispatchFn = useDispatch;
export const useAppSelctor: TypedUseSelectorHook<RootState> = useSelector;
