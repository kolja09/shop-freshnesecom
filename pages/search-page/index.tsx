import React from 'react';

import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import ProductCardPage from "../../components/ProductCardPage/ProductCardPage";

const SearchPage = () => {
    return (
        <>
            <Header />
            <Search />
            <ProductCardPage />
            <Footer />
        </>
    )
}

export default SearchPage;