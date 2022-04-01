import React from 'react';
import { useSelector } from "react-redux";

import {RootState} from "../../store/store";
import {setBlogsCurrentPage} from "../../store/blogs/action";

import Navigations from "../Navigations/Navigations";
import HeadlineSection from "../HeadlineSection/HeadlineSection";
import LinkList from "../LinkList/LinkList";
import Paginator from "../Paginator/Paginator";
import Post from "../Post/Post";

import {
	BlogPostsInfo,
	BlogPostsWrapper,
	PostInfoFoodContainer,
	MainBlock
} from "./styled";

const BlogPage = () => {
	
	const postInfo = useSelector((blog: RootState) => blog.blogReducer.blog);
	const currentPage = useSelector((currentPage:RootState) => currentPage.blogReducer.currentPage);
	const perPage = useSelector((perPage:RootState) => perPage.blogReducer.perPage);

	const pageCount = Math.ceil(postInfo.length / perPage);
	const pagesVisited = currentPage * perPage;

	return (
		<>
			<Navigations/>
			<HeadlineSection length={postInfo.length}/>
			<BlogPostsWrapper>
				{postInfo.slice(0, 2).map((el: PostProps) => (
					<BlogPostsInfo key={el.id}>
						<Post postInfo={el} isBlog={true} blogType={'bigBlogCard'}/>
					</BlogPostsInfo>
				))}
			</BlogPostsWrapper>
			<MainBlock>
				<LinkList/>
				<PostInfoFoodContainer>
					{postInfo.slice(pagesVisited, pagesVisited + perPage).map((el: PostProps, id: number) => (
						<Post key={id} postInfo={el} blogType={'middleBlogCard'}/>
					))}
				</PostInfoFoodContainer>
			</MainBlock>
			<Paginator
				currentPage={currentPage}
				pageCount={pageCount}
				setCurrentPage={setBlogsCurrentPage}
				length={postInfo.length}
			/>
		</>
	);
};

export default BlogPage;
