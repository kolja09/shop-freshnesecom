import React from 'react';
import Image from "next/image";

import view1 from './../../assets/img/ic-layout-square-grid.svg';
import view2 from './../../assets/img/ic-layout-sections.svg';

import { IHeadlineSectionProps } from "./types";
import {
    HeadlineContainer,
    Title,
    ViewBlock,
    ViewsContainer,
    ViewText,
    ProductsCountWrapper,
    Text,
    Tag
} from "./styled";

const HeadlineSection = ({ length, setGridView }: IHeadlineSectionProps) => {
    return (
        <HeadlineContainer>
            <Title>Fruit and vegetables</Title>
            <ViewsContainer>
                <ViewBlock onClick={() => setGridView && setGridView(false)}>
                    <Image src={view1} />
                    <ViewText>Grid view</ViewText>
                </ViewBlock>
                <ViewBlock onClick={() => setGridView && setGridView(true)}>
                    <Image src={view2} />
                    <ViewText>List view</ViewText>
                </ViewBlock>
                <ProductsCountWrapper>
                    <Tag>{length}</Tag>
                    <Text>Products</Text>
                </ProductsCountWrapper>
            </ViewsContainer>
        </HeadlineContainer>
    );
};

export default HeadlineSection;
