import React from 'react';
import Image from "next/image";

import whiteArrow from './../../assets/img/white-arrow.svg';
import heart from './../../assets/img/heart.svg';
import StarRating from '../StarRating/StarRating';

import { IBigProductCard } from './types';
import {
  BigProductCardContainer,
  ImageProductBlock,
  ProductInfoBlock,
  ProductInfoWrapper,
  ProductTitle,
  ProductText,
  StarRatingBlock,
  InfoBlock,
  InfoFrame,
  ItemText,
  ItemTitle,
  PriceBlock,
  ProductPrice,
  InfoAboutDelivery,
  DeliveryItem,
  DeliveryText,
  DetailButton,
  OldPrice,
  AddButton
} from "./styled";

const BigProductCard = ({ product }: IBigProductCard) => {
  return (
    <BigProductCardContainer>
      <ImageProductBlock/>
      <ProductInfoBlock>
        <ProductInfoWrapper>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductText>{product.text}</ProductText>
          <StarRatingBlock>
            <StarRating rating={product.numberStar}/>
          </StarRatingBlock>
          <InfoFrame>
            <InfoBlock>
              <ItemTitle>Freshness</ItemTitle>
              <ItemText>{product.freshness}</ItemText>
            </InfoBlock>
            <InfoBlock>
              <ItemTitle>Farm</ItemTitle>
              <ItemText>{product.farm}</ItemText>
            </InfoBlock>
            <InfoBlock>
              <ItemTitle>Delivery</ItemTitle>
              <ItemText>{product.deliveryArea}</ItemText>
            </InfoBlock>
            <InfoBlock>
              <ItemTitle>Stock</ItemTitle>
              <ItemText>{product.stock}</ItemText>
            </InfoBlock>
          </InfoFrame>
        </ProductInfoWrapper>
        <ProductInfoWrapper>
          <PriceBlock>
            <ProductPrice>{product.price} USD</ProductPrice>
            <OldPrice>{product.oldPrice}</OldPrice>
          </PriceBlock>
          <InfoAboutDelivery>
            <DeliveryItem>Free Shipping</DeliveryItem>
            <DeliveryText>Delivery in 1 day</DeliveryText>
          </InfoAboutDelivery>
          <DetailButton>
            Product Detail <Image src={whiteArrow}/>
          </DetailButton>
          <AddButton><Image src={heart}/>Add to wish list</AddButton>
        </ProductInfoWrapper>
      </ProductInfoBlock>
    </BigProductCardContainer>
  );
};

export default BigProductCard;

