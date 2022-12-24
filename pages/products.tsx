import { ProductCard } from "@components";
import { Iproduct } from "@typings";
import React, { FC } from "react";

interface Iprops {
  products: Iproduct[];
}

const products: FC<Iprops> = ({ products }) => {
  return (
    <>
      <div className="products-heading">
        <h2>DIVA</h2>
        <p>Everything on your finger tip's</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default products;

export const getServerSideProps = async () => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
};
