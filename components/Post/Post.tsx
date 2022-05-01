import React  from 'react';
import Image from "next/image";
import { useRouter } from "next/router";

import Tag from "../Tag/Tag";
import { routesPath } from "../../static/routesPath";

import { IPostProps } from "./types";
import {
    Author,
    OpenedBlog,
    Date,
    ImageInfoBlock,
    PostDate,
    PostTitle,
    MiddleBlogCard,
    MiddleBlogTitle,
    BlogDate,
    HeadlineTitle,
    ImageBlock,
    InfoContainer,
    PostBlock,
    BigBlogCard,
    ImageContainer,
    InfoBlock,
    DateContainer,
    Title,
    Text,
    TextBlock,
    TitleText,
    BigBlogTag,
    MiddleBlogTag
} from "./styled";

const Post = ({ blogType, postInfo, isBlog = false }: IPostProps) => {
    const router = useRouter();

    const redirectToBlog = () => {
        router.push({pathname: `${routesPath.blog}/${postInfo.id}`})
    };

    const getPost = () => {
        switch (blogType) {
            case 'bigBlogCard':
                return (
                    <BigBlogCard onClick={redirectToBlog}>
                        <ImageInfoBlock>
                            <Image
                                src={postInfo.imgBlog}
                                alt={`${postInfo.imgBlog}`}
                                height={400}
                                width={isBlog ? 569 : 469}
                            />
                            <BigBlogTag>
                                <Tag>{postInfo?.tag[0]}</Tag>
                            </BigBlogTag>
                            <PostTitle>{postInfo?.title}</PostTitle>
                            <PostDate>
                                <Image
                                  width={32}
                                  height={32}
                                  src={postInfo.userPhoto}
                                  alt={`${postInfo.userPhoto}`}
                                />
                                <Author $marginLeft={true} $color={true}>{postInfo.author}</Author>
                                <Date $color={true}>{postInfo.date}</Date>
                            </PostDate>
                        </ImageInfoBlock>
                    </BigBlogCard>
                )
            case 'middleBlogCard':
                return (
                    <MiddleBlogCard>
                        <ImageBlock>
                            <Image
                              src={postInfo.imgBlog}
                              alt={`${postInfo.imgBlog}`}
                              width={269}
                              height={180}
                              onClick={redirectToBlog}
                            />
                        </ImageBlock>
                        <MiddleBlogTag>
                            <Tag>{postInfo?.tag[0]}</Tag>
                        </MiddleBlogTag>
                        <MiddleBlogTitle onClick={redirectToBlog}>{postInfo.title}</MiddleBlogTitle>
                        <BlogDate>
                            <Author $marginLeft={false} $color={false}>{postInfo.author}</Author>
                            <Date $color={false}>{postInfo.date}</Date>
                        </BlogDate>
                    </MiddleBlogCard>
                )
            case 'smallBlogCard':
                return (
                    <PostBlock key={postInfo.id} onClick={redirectToBlog}>
                        <InfoContainer>
                            <HeadlineTitle>{postInfo.title}</HeadlineTitle>
                            <BlogDate>
                                <Author $marginLeft={false} $color={false}>{postInfo.author}</Author>
                                <Date $color={false}>{postInfo.date}</Date>
                            </BlogDate>
                        </InfoContainer>
                        <ImageBlock>
                            <Image
                              width={96}
                              height={96}
                              alt={`${postInfo.imgBlog}`}
                              src={postInfo.imgBlog}
                            />
                        </ImageBlock>
                    </PostBlock>
                )
            case 'openedBlog':
                return (
                    <OpenedBlog>
                        <ImageContainer>
                            <Image
                              src={postInfo && postInfo.imgBlog}
                              alt={`${postInfo.imgBlog}`}
                              height={480}
                              width={1170}
                            />
                        </ImageContainer>
                        <InfoBlock>
                            <DateContainer>
                                <TextBlock>
                                    <TitleText>Date:</TitleText>
                                    <Text>{postInfo.date}</Text>
                                </TextBlock>
                                <TextBlock>
                                    <TitleText>Category:</TitleText>
                                    <Text>{postInfo.category}</Text>
                                </TextBlock>
                                <TextBlock>
                                    <TitleText>Author:</TitleText>
                                    <Text>{postInfo.author}</Text>
                                </TextBlock>
                            </DateContainer>
                            <Title>{postInfo.title}</Title>
                        </InfoBlock>
                    </OpenedBlog>
                )
            default:
                return <h1>No post match</h1>
        }
    }

    return (
        <>
            {!postInfo ? <></> : getPost()}
        </>
    )
};

export default Post;
