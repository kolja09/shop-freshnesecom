import React from 'react';
import Image from "next/image";

import { SocialNetworkProps } from '../../static/types';
import facebook from "../../assets/img/Facebook.svg";
import pinterest from "../../assets/img/Pinterest.svg";
import twitter from "../../assets/img/Twitter.svg";
import linkedin from "../../assets/img/icon-linkedin.svg";

import { IContentProps } from './types';
import {
  ContentContainer,
  TagsContainer,
  Tags,
  Tag,
  ButtonBack,
  Title,
  FoodRitualContainer,
  FoodRitual,
  Text,
  SocialNetworksBlock,
  SocialNetworkContainer,
  SocialName,
  TitleBlock,
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
  return (
    <ContentContainer>
      <TagsContainer>
        <Title>Tags</Title>
        <Tags>
          {postInfo?.tag.map((t: string, idx: number) => (
            <Tag key={idx}>{t}</Tag>
          ))}
        </Tags>
        <ButtonBack>Back to Blog</ButtonBack>
      </TagsContainer>
      <FoodRitualContainer>
        {postInfo?.foodRitual.map((el: any, idx: number) => (
          <FoodRitual key={idx}>
            <Title>{el.title}</Title>
            <Text>{el.text}</Text>
          </FoodRitual>
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
      </FoodRitualContainer>
    </ContentContainer>
  );
};

export default Content;
