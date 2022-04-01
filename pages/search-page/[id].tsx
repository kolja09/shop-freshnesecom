import React from 'react';
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import Navigations from "../../components/Navigations/Navigations";
import ProductInfoPage from "../../components/ProductInfoPage/ProductInfoPage";

const ProductCard = () => {

    const products = useSelector((products:RootState) => products.productReducer.productItems);

    const {query} = useRouter();

    const currentProduct = products?.filter((product: ProductsProps) => product.id === query.id)[0];

    return (
        <>
            <Header/>
            <Search/>
            <Navigations/>
            <ProductInfoPage product={currentProduct}/>
            <Footer/>
        </>
    )
}
export default ProductCard;
