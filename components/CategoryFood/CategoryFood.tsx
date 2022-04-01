import React from 'react';

import ProductCard from "../SmallProductCard/SmallProductCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import { ICategoryFood } from './types';
import {
    CategoryFoodContainer,
    ProductsContainer
} from "./styled";

const CategoryFood = ({ products }: ICategoryFood) => {
    return (
        <CategoryFoodContainer>
            <SectionTitle title={'Section Headline'} button={'Button'}/>
            <ProductsContainer>
                {products.slice(0,4).map((p:ProductsProps) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </ProductsContainer>
        </CategoryFoodContainer>
    );
};

export default CategoryFood;
