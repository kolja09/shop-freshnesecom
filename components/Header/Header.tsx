import React from 'react';
import { useRouter } from "next/router";

import { routesPath } from "../../static/routesPath";

import {
  HeaderContainer,
  LinksContainer,
  LinkWrapper,
  HeaderLink,
} from "./styled";

const Header = () => {
  const router = useRouter();

  const redirectToBlog = () => {
    router.push({ pathname: routesPath.blog })
  };

  const redirectToProducts = () => {
    router.push({ pathname: routesPath.searchPage })
  }

  return (
    <HeaderContainer>
      <LinksContainer>
        <LinkWrapper>
          <HeaderLink>Chat with us</HeaderLink>
        </LinkWrapper>
        <LinkWrapper>
          <HeaderLink href="tel:+380 97 404 23 56" $color="#151515">
            +380 97 404 23 56
          </HeaderLink>
        </LinkWrapper>
        <LinkWrapper>
          <HeaderLink href="mailto: info@freshnesecom.com" $color="#151515">
            kolja9062005@gmail.com
          </HeaderLink>
        </LinkWrapper>
      </LinksContainer>
      <LinksContainer>
        <LinkWrapper>
          <HeaderLink onClick={redirectToBlog}>Blog</HeaderLink>
        </LinkWrapper>
        <LinkWrapper>
          <HeaderLink onClick={redirectToProducts}>Products</HeaderLink>
        </LinkWrapper>
        <LinkWrapper>
          <HeaderLink>About Us</HeaderLink>
        </LinkWrapper>
        <LinkWrapper>
          <HeaderLink>Careers</HeaderLink>
        </LinkWrapper>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
