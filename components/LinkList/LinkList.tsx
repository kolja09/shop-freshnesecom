import React from 'react';

import {
    LinkListContainer,
    CategoryContainer,
    LinksContainer,
    Title,
    LinkBlock,
    LinkArchives,
    LinkCategory,
    JoinOurList,
    SubscribeBlock,
    Subscribe,
    Text,
    Input
} from "./styled";

const archives:string[] = [
    "March 2020",
    "February 2020",
    "January 2020",
    "November 2019",
    "December 2019"
];

const category:string[] = [
    "Food",
    "Chefs specialities",
    "Vegetable",
    "Meat",
    "Recommendations"
];

const LinkList = () => {
    return (
        <LinkListContainer>
            <CategoryContainer>
                <Title>Archives</Title>
                <LinksContainer>
                    {archives.map((archive:string, idx:number) => (
                        <LinkBlock key={idx}>
                            <LinkArchives>{archive}</LinkArchives>
                        </LinkBlock>
                    ))}
                </LinksContainer>
            </CategoryContainer>
            <CategoryContainer>
                <Title>Category</Title>
                <LinksContainer>
                    {category.map((c:string, idx:number) => (
                        <LinkBlock key={idx}>
                            <LinkCategory>{c}</LinkCategory>
                        </LinkBlock>
                    ))}
                </LinksContainer>
            </CategoryContainer>
            <JoinOurList>
                <Title>Join our list</Title>
                <Text>
                    Signup to be the first to hear about exclusive deals, special offers, recepies from our masters and others.
                </Text>
                <SubscribeBlock>
                    <Input placeholder={'Your email address'}/>
                    <Subscribe>Subscribe</Subscribe>
                </SubscribeBlock>
            </JoinOurList>
        </LinkListContainer>
    );
};

export default LinkList;
