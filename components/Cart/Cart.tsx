import React from 'react';
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { removeCartItem, plusCartItem, minusCartItem } from "../../store/cart/action";
import StarRating from "../StarRating/StarRating";
import close from './../../assets/img/close.svg';
import remove from './../../assets/img/close.svg';
import { RootState } from "../../store/store";

import {
  CartContainer,
  CartContent,
  CartHeader,
  Headline,
  CloseBlock,
  CartItemContainer,
  ImageContainer,
  CartItemBlock,
  ImageBlock,
  ProductContent,
  InfoFrame,
  InfoBlock,
  ItemText,
  ItemTitle,
  NameItem,
  ProductPrice,
  ProductBuyBlock,
  PriceBlock,
  NumberProductsAdded,
  IconBlock,
  TextIcon,
  CountProduct,
} from "./styled";
import { ICartProps } from './types';

const Cart = ({ setCartIsEmpty }: ICartProps) => {
  const dispatch = useDispatch();
  const totalPrice = useSelector((totalPrice: RootState) => totalPrice.cartReducer.totalPrice);
  const items = useSelector((items: RootState) => items.cartReducer.items);

  const addProducts = Object.keys(items).map(key => {
    return items[key].items[0]
  });

  return (
    <CartContainer onClick={() => setCartIsEmpty(true)}>
      <CartContent onClick={e => e.stopPropagation()}>
        <CartHeader>
          <Headline>Shopping cart</Headline>
          <CloseBlock>
            <Image onClick={() => setCartIsEmpty(true)} src={close} alt={'close-btn'}/>
          </CloseBlock>
        </CartHeader>
        {addProducts.length === 0 && ('No items')}
        <CartItemContainer>
          {addProducts.map((item: ProductsProps) => (
            <CartItemBlock key={item.id}>
              <ImageContainer>
                <ImageBlock>
                </ImageBlock>
                <IconBlock>
                  <Image onClick={() => dispatch(removeCartItem(item.id))} width={14} height={14} src={remove} alt=''/>
                  <TextIcon>Remove</TextIcon>
                </IconBlock>
              </ImageContainer>
              <ProductContent>
                <NameItem>{item.title}</NameItem>
                <InfoFrame>
                  <InfoBlock>
                    <ItemTitle>Freshness:</ItemTitle>
                    <ItemText>{item.freshness}</ItemText>
                  </InfoBlock>
                  <InfoBlock>
                    <ItemTitle>Farm:</ItemTitle>
                    <ItemText>{item.farm}</ItemText>
                  </InfoBlock>
                </InfoFrame>
                <StarRating rating={item.numberStar}/>
                <ProductBuyBlock>
                  <PriceBlock>
                    <ProductPrice>{items[item.id].totalPrice.toFixed(2)} USD</ProductPrice>
                  </PriceBlock>
                  <CountProduct onClick={() => dispatch(plusCartItem(item.id))}>+</CountProduct>
                  <NumberProductsAdded>{items[item.id].items.length}</NumberProductsAdded>
                  <CountProduct onClick={() => dispatch(minusCartItem(item.id))}>-</CountProduct>
                </ProductBuyBlock>
              </ProductContent>
            </CartItemBlock>
          ))}
        </CartItemContainer>
        {totalPrice.toFixed(2)}
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
