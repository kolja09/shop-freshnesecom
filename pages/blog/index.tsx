import React from 'react';

import BlogPage from "../../components/BlogPage/BlogPage";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";

const Blog = () => {
	return (
		<>
			<Header/>
			<Search/>
			<BlogPage />
			<Footer/>
		</>
	)
}
export default Blog;