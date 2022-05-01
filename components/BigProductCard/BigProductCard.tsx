import React from 'react';
import Image from "next/image";
import { useRouter } from "next/router";

import whiteArrow from './../../assets/img/white-arrow.svg';
import heart from './../../assets/img/heart.svg';
import StarRating from '../StarRating/StarRating';
import { routesPath } from "../../static/routesPath";

import { IBigProductCard } from './types';
import {
  BigProductCardContainer,
  ImageProduct,
  InfoContainer,
  InfoWrapper,
  Title,
  Text,
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
  const router = useRouter();

  const redirectToProduct = () => {
    router.push({pathname: `${routesPath.searchPage}/${product?.id}`})
  };

  return (
    <BigProductCardContainer>
      <ImageProduct
        onClick={redirectToProduct}
        width={268} height={279}
        src={product.productPhoto}
        alt={`${product.productPhoto}`}
      />
      <InfoContainer>
        <InfoWrapper>
          <Title>{product.title}</Title>
          <Text>{product.text}</Text>
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
        </InfoWrapper>
        <InfoWrapper>
          <PriceBlock>
            <ProductPrice>{product.price} USD</ProductPrice>
            <OldPrice>{product.oldPrice}</OldPrice>
          </PriceBlock>
          <InfoAboutDelivery>
            <DeliveryItem>Free Shipping</DeliveryItem>
            <DeliveryText>Delivery in 1 day</DeliveryText>
          </InfoAboutDelivery>
          <DetailButton onClick={redirectToProduct}>
            Product Detail <Image src={whiteArrow} alt={"arrow"}/>
          </DetailButton>
          <AddButton><Image src={heart} alt={"heart"}/>Add to wish list</AddButton>
        </InfoWrapper>
      </InfoContainer>
    </BigProductCardContainer>
  );
};

export default BigProductCard;

