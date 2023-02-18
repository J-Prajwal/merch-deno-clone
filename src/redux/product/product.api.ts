import { Product } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getProductsAPI = async () => {
  let res: AxiosResponse<Product[]> = await axios.get(
    "https://gleaming-seal-button.cyclic.app/products"
  );
  return res.data;
};

export const getProductAPI = async (id: string) => {
  let res: AxiosResponse<Product> = await axios.get(
    `https://gleaming-seal-button.cyclic.app/products/${id}`
  );
  return res.data;
};
