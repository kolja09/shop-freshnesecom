import React from 'react';
import styled from "styled-components";
import { useRouter } from "next/router";
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

const RelatedTopicsContainer = styled.div`
  padding: 53px 45px 48px 45px;
`;

const RelatedTopicsBlock = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
`;


const Blog = () => {
  const postInfo = useSelector((blog: RootState) => blog.blogReducer.blogs);

  const { query } = useRouter();

  const currentPost = postInfo?.filter((post: PostProps) => post?.id === query.id)[0];

  return (
    <>
      <Header/>
      <Search/>
      <Navigations nameLink={'Blog'} link={`${routesPath.blog}`} id={currentPost?.id}/>
      <Post blogType={'openedBlog'} postInfo={currentPost}/>
      <Content postInfo={currentPost}/>
      <SendComment/>
      <RelatedTopicsContainer>
        <SectionTitle title={'Related topics'} button={'More blogs'} linkToPage={`${routesPath.blog}`}/>
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
