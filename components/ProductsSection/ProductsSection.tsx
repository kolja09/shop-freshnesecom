import React from 'react';

import ProductCard from "../SmallProductCard/SmallProductCard";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

import { IBestSellingProductsProps } from "./types";
import {
  SectionContainer,
  ProductsContainer,
} from "./styled";

const ProductsSection = ({ products }: IBestSellingProductsProps) => {
  return (
    <SectionContainer>
      <CategoryMenu title={'Best selling products'}/>
      <ProductsContainer>
        {products.map((p: ProductsProps) => (
          <ProductCard key={p.id} product={p}/>
        ))}
      </ProductsContainer>
    </SectionContainer>
  );
};

export default ProductsSection
