import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { ProductCard } from '@components';
import { Iproduct } from '@typings';

interface Iprops {
  products: Iproduct[];
}

const Home: NextPage<Iprops> = ({ products }) => {
  return (
    <>
      <Head>
        <title>mimi - Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-20 mx-auto max-w-7xl  px-4 sm:mt-28 sm:px-6 md:mt-36 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl sm:tracking-tight md:text-6xl md:tracking-tight">
            <span className="block xl:inline">Data to enrich your</span>{' '}
            <span className="block text-indigo-600 xl:inline">
              online business
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 mx-auto  sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-5 sm:mt-8 flex justify-center ">
            <div className="rounded-md shadow">
              <Link href="/products">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  View Products
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <div className="products-heading">
        <h2>mimi</h2>
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

export default Home;

export const getServerSideProps = async () => {
  const products = await fetch(
    'https://fakestoreapi.com/products?limit=6'
  ).then((res) => res.json());

  return {
    props: {
      products,
    },
  };
};
