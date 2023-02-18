import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/react";
import { MdKeyboardBackspace } from "react-icons/md";

import NextSEO from "../../components/NextSEO";
import ProductDetails from "../../components/ProductDetails";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProductAPI, getProductsAPI } from "@/redux/product/product.api";
import { Product } from "@/utils/types";

type ProductDetailProps = {
  product: Product;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <>
      <NextSEO
        title='homepage'
        description='Home page for my webpage'
        ogImage='/og-image.png'
        url={new URL("http://localhost:3000/")}
      />
      <Box
        w='calc(11/12)%'
        mt='16'
        maxW='5xl'
        mx='auto'
        display='flex'
        alignItems='center'
        justifyContent='space-between'
        position='relative'
      >
        <Link href='/'>
          <Text
            display='flex'
            alignItems='center'
            gap={2}
            textColor='gray.400'
            transition='text-color'
            transitionDuration='200s'
            _hover={{
              textColor: "gray.800",
            }}
          >
            <MdKeyboardBackspace />
            Back to shop
          </Text>
        </Link>
      </Box>
      <ProductDetails product={product} />
    </>
  );
};

export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getProductsAPI();

  return {
    paths: data.map((product: Product) => ({ params: { id: String(product.id) } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const id: any = ctx.params?.id;
  const data = await getProductAPI(id || "");

  return {
    props: {
      product: data,
    },
  };
};
