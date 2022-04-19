import React from 'react';
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

import { RootState } from "../../store/store";
import { removeCartItem, plusCartItem, minusCartItem } from "../../store/cart/action";

import { routesPath } from "../../static/routesPath";
import StarRating from "../StarRating/StarRating";
import close from './../../assets/img/close.svg';
import remove from './../../assets/img/close.svg';

import { ICartProps } from './types';
import {
  CartContainer,
  CartContent,
  Header,
  Title,
  CloseBlock,
  CartEmpty,
  CartItemContainer,
  ImageContainer,
  CartItemBlock,
  ProductPicture,
  ProductContent,
  Wrapper,
  InfoFrame,
  InfoBlock,
  ItemText,
  ItemTitle,
  NameItem,
  ProductPrice,
  ProductBuyBlock,
  PriceBlock,
  NumberProducts,
  IconBlock,
  TextIcon,
  CountProduct,
  SubtotalBlock,
  Text,
  Subtotal,
  Footer,
  RedirectButton,
  Button,
  Container,
} from "./styled";

const Cart = ({ setCartIsEmpty }: ICartProps) => {
  const dispatch = useDispatch();

  const router = useRouter();

  const totalPrice = useSelector((totalPrice: RootState) => totalPrice.cartReducer.totalPrice);
  const items = useSelector((items: RootState) => items.cartReducer.items);

  const addProducts = Object.keys(items).map(key => {
    return items[key].items[0]
  });

  const redirectToProduct = () => {
    router.push({pathname: `${routesPath.searchPage}`})
  };

  const handleCartIsEmpty = () => {
    setCartIsEmpty(false)
  }

  return (
    <CartContainer>
      <CartContent onClick={e => e.stopPropagation()}>
        <Header>
          <Title>Shopping cart</Title>
          <CloseBlock>
            <Image
              onClick={handleCartIsEmpty}
              src={close}
              alt={'close-btn'}
            />
          </CloseBlock>
        </Header>
        {addProducts.length === 0 && <CartEmpty>Cart is empty</CartEmpty>}
        <CartItemContainer>
          {addProducts.map((item: ProductsProps) => (
            <Wrapper key={item.id}>
              <CartItemBlock>
                <ImageContainer>
                  <ProductPicture
                    src={item.productPhoto}
                    alt={`${item.productPhoto}`}
                    width={100}
                    height={67}
                  />
                  <IconBlock>
                    <Image
                      onClick={() => dispatch(removeCartItem(item.id))}
                      width={14}
                      height={14}
                      src={remove}
                      alt='remove-button'
                    />
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
                </ProductContent>
              </CartItemBlock>
              <ProductBuyBlock>
                <PriceBlock>
                  <ProductPrice>{items[item.id].totalPrice.toFixed(2)} USD</ProductPrice>
                </PriceBlock>
                <CountProduct onClick={() => dispatch(plusCartItem(item.id))}>+</CountProduct>
                <NumberProducts>{items[item.id].items.length}</NumberProducts>
                <CountProduct onClick={() => dispatch(minusCartItem(item.id))}>-</CountProduct>
              </ProductBuyBlock>
            </Wrapper>
          ))}
        </CartItemContainer>
        <SubtotalBlock>
          <Text>Subtotal</Text>
          <Subtotal> {totalPrice.toFixed(2)} USD</Subtotal>
        </SubtotalBlock>
        <Footer>
          <Container>
            <RedirectButton onClick={redirectToProduct}>Continue shopping</RedirectButton>
            <Button>Go to Checkout</Button>
          </Container>
        </Footer>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
