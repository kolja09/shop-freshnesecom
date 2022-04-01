import React  from 'react';

import SectionTitle from "../SectionTitle/SectionTitle";
import Post from "../Post/Post";

import { BlogPostsContainer, PostsContainer, SmallPostContainer } from "./styled";
import { IMainPagePosts } from "./types";

const MainPagePosts = ({ postInfo }: IMainPagePosts) => {
	return (
		<BlogPostsContainer>
			<SectionTitle title="Read our Blog posts" button="Go to Blog"/>
			<PostsContainer>
				<Post blogType={'bigBlogCard'} postInfo={postInfo[0]}/>
				<Post blogType={'middleBlogCard'} postInfo={postInfo[5]}/>
				<SmallPostContainer>
					{
						postInfo.slice(2, 5).map((post: PostProps, idx: number) => (
							<Post blogType={'smallBlogCard'} postInfo={post} key={idx}/>
						))
					}
				</SmallPostContainer>
			</PostsContainer>
		</BlogPostsContainer>
	);
};

export default MainPagePosts;
