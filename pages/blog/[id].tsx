import React from 'react';
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";

import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import Navigations from "../../components/Navigations/Navigations";
import Post from "../../components/Post/Post";
import Content from '../../components/Content/Content';
import SendComment from "../../components/SendComment/SendComment";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { routesPath } from "../../static/routesPath";

import { RelatedTopicsContainer, RelatedTopicsBlock } from './styled';

const Blog = () => {
  const postInfo = useSelector((blog: RootState) => blog.blogReducer.blogs);

  const { query } = useRouter();

  const currentPost = postInfo?.filter((post: PostProps) => post.id === query.id)[0];

  return (
    <>
      <Header/>
      <Search/>
      <Navigations nameLink={'Blog'} link={`${routesPath.blog}`} id={currentPost.id}/>
      <Post blogType={'openedBlog'} postInfo={currentPost}/>
      <Content postInfo={currentPost}/>
      <SendComment/>
      <RelatedTopicsContainer>
        <SectionTitle title={'Related topics'} button={'Button'}/>
        <RelatedTopicsBlock>
          {postInfo.slice(2, 6).map((el: PostProps, idx: number) => (
            <Post blogType={'middleBlogCard'} postInfo={el} key={idx}/>
          ))}
        </RelatedTopicsBlock>
      </RelatedTopicsContainer>
      <Footer/>
    </>
  )
}
export default Blog;
