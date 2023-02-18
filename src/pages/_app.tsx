import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import {ChakraProvider} from "@chakra-ui/react"
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/global.css";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </Provider>
  );
}
