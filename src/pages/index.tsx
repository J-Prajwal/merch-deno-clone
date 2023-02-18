import React, {useEffect} from "react";

import { Box } from "@chakra-ui/react";

import NextSEO from "../components/NextSEO";
import ProductCard from "../components/ProductCart";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelctor } from "@/redux/store";
import { getProducts } from "@/redux/product/product.action";

export default function Home() {
  const products = useAppSelctor((store) => store.product.product);
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <NextSEO
        title="homepage"
        description="Home page for my webpage"
        ogImage="/og-image.png"
        url={new URL("http://localhost:3000/")}
      />
      <main>
        <Box
          width="calc(11/12)%"
          maxWidth="5xl"
          mx="auto"
          mt="28"
          aria-labelledby="information-heading"
        >
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              lg: "repeat(3, minmax(0, 1fr))",
            }}
            gap={{ base: 8 }}
            rowGap={{ sm: "10", lg: "12" }}
            columnGap={{ lg: "10" }}
          >
            {products.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
        </Box>
      </main>
    </>
  );
}
