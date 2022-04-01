import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";

import { RootState } from "../../store/store";
import Cart from '../Cart/Cart';
import imgLogo from '/assets/img/logo.svg';
import searchIcon from '/assets/img/ic-actions-search.svg';
import userIcon from '/assets/img/user-icon.svg';
import basketIcon from '/assets/img/basket.svg';
import { routesPath } from "../../static/routesPath";

import {
  Container,
  Logo,
  SearchContainer,
  SearchInput,
  SearchIcon,
  IconsContainer,
  IconWrapper,
  ProductsInCartCount,
  StyledImage
} from "./styled";

const Search = () => {
  const router = useRouter();
  const [inputIsSelected, setInputIsSelected] = useState<boolean>(false);
  const [cartIsEmpty, setCartIsEmpty] = useState<boolean>(true)

  const totalCartCount = useSelector((totalCount: RootState) => totalCount.cartReducer.totalCount);

  const redirectToHomePage = () => {
    router.push({pathname: routesPath.home})
  };

  const handleSearch = () => {
    router.push({pathname: routesPath.searchPage})
  };

  const handleInputFocus = () => {
    setInputIsSelected(true);
  };

  const handleInputBlur = () => {
    setInputIsSelected(false);
  };

  return (
    <Container>
      <Logo src={imgLogo} alt='logo' onClick={redirectToHomePage}/>
      <SearchContainer $focus={inputIsSelected}>
        <SearchInput type='text' placeholder='Search...' onFocus={handleInputFocus} onBlur={handleInputBlur}/>
        <SearchIcon src={searchIcon} alt='search' onClick={handleSearch}/>
      </SearchContainer>
      <IconsContainer>
        <IconWrapper>
          <StyledImage src={userIcon} alt='user-icon'/>
        </IconWrapper>
        <IconWrapper>
          <StyledImage onClick={() => setCartIsEmpty(false)} src={basketIcon} alt='basket-icon'/>
          {totalCartCount === 0 ? '' : <ProductsInCartCount>{totalCartCount}</ProductsInCartCount>}
          {!cartIsEmpty ? <Cart
            setCartIsEmpty={setCartIsEmpty}
          /> : null}
        </IconWrapper>
      </IconsContainer>
    </Container>
  );
}

export default Search;
