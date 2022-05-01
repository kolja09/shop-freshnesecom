import React from 'react';
import Image from "next/image";
import { useRouter } from "next/router";

import { routesPath } from "../../static/routesPath";
import { SocialNetworkProps } from '../../static/types';
import facebook from "../../assets/img/Facebook.svg";
import pinterest from "../../assets/img/Pinterest.svg";
import twitter from "../../assets/img/Twitter.svg";
import linkedin from "../../assets/img/icon-linkedin.svg";
import Tag from '../Tag/Tag';

import { IContentProps } from './types';
import {
  ContentContainer,
  TagsContainer,
  TagsWrapper,
  Button,
  Title,
  DescriptionContainer,
  FoodDescription,
  Text,
  SocialNetworksBlock,
  SocialNetworkContainer,
  SocialName,
  TitleBlock,
  TagBlock
} from "./styled"

const socialNetwork: SocialNetworkProps[] = [
  {
    name: 'Facebook',
    img: facebook,
    link: "https://www.facebook.com/",
  },
  {
    name: 'Pinterest',
    img: pinterest,
    link: "https://www.pinterest.com/",
  },
  {
    name: 'Twitter',
    img: twitter,
    link: "https://www.twitter.com/",
  },
  {
    name: 'Linkedin',
    img: linkedin,
    link: "https://linkedin.com/",
  }
];

const Content = ({ postInfo }: IContentProps) => {
  const router = useRouter();

  const redirectToBlog = () => {
    router.push({ pathname: routesPath.blog })
  };

  return (
    <ContentContainer>
      <TagsWrapper>
        <Title>Tags</Title>
        <TagsContainer>
          {postInfo?.tag.map((t: string, idx: number) => (
            <TagBlock key={idx}>
               <Tag>{t}</Tag>
            </TagBlock>
          ))}
        </TagsContainer>
        <Button onClick={redirectToBlog}>Back to Blog</Button>
      </TagsWrapper>
      <DescriptionContainer>
        {postInfo?.foodRitual.map((el: FoodProps, idx: number) => (
          <FoodDescription key={idx}>
            <Title>{el.title}</Title>
            <Text>{el.text}</Text>
          </FoodDescription>
        ))}
        <SocialNetworksBlock>
          <TitleBlock>
            <Title>Share</Title>
          </TitleBlock>
          {socialNetwork.map((el: SocialNetworkProps, idx: number) => (
            <SocialNetworkContainer key={idx}>
              <Image width={16} height={16} src={el.img} alt={`${el.name}`}/>
              <SocialName href={el.link}>{el.name}</SocialName>
            </SocialNetworkContainer>
          ))}
        </SocialNetworksBlock>
      </DescriptionContainer>
    </ContentContainer>
  );
};

export default Content;
