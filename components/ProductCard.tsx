import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Iproduct } from '../typings';

interface Iprops {
  product: Iproduct;
}
const ProductCard: FC<Iprops> = ({ product }) => {
  // TODO: change id to slug
  const { id, title, price, category, image } = product;
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={`/product/${id}`}>
        <div className="product-card">
          <Image
            src={image && image}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{title}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
