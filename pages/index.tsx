import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { NextPage } from 'next';

import { RootState } from "../store/store";
import { loadProducts} from "../store/products/action";
import { loadBlogs } from "../store/blogs/action";

import Header from "../components/Header/Header";
import Search from '../components/Search/Search';
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Comment from "../components/Comment/Comment";
import CategoryFood from "../components/CategoryFood/CategoryFood";
import MainPagePosts from "../components/MainPagePosts/MainPagePosts";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {

  const dispatch = useDispatch();

  const products = useSelector((products: RootState) => products.productReducer.productItems);
  const postInfo = useSelector((blog: RootState) => blog.blogReducer.blogs);

  useEffect(() => {
    dispatch(loadProducts())
  }, []);

  useEffect(() => {
    dispatch(loadBlogs())
  }, []);

  return (
    <>
      <Header/>
      <Search/>
      <ProductsSection products={products.slice(0, 3)}/>
      <ProductsSection products={products.slice(3, 6)}/>
      <ProductsSection products={products.slice(6, 9)}/>
      <Comment/>
      <CategoryFood products={products}/>
      <MainPagePosts postInfo={postInfo}/>
      <Footer/>
    </>
  )
}

export default Home
