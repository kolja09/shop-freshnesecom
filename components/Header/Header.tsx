import React from 'react';
import { useRouter } from "next/dist/client/router";

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
  }

  return (
    <HeaderContainer>
      <LinksContainer>
        <LinkWrapper>
          <HeaderLink>Chat with us</HeaderLink>
        </LinkWrapper>
        <LinkWrapper>
          <HeaderLink href="tel: 420 336 775 664" $color="#151515">
            +420 336 775 664
          </HeaderLink>
        </LinkWrapper>
        <LinkWrapper>
          <HeaderLink href="mailto: info@freshnesecom.com" $color="#151515">
            info@freshnesecom.com
          </HeaderLink>
        </LinkWrapper>
      </LinksContainer>
      <LinksContainer>
        <LinkWrapper>
          <HeaderLink onClick={redirectToBlog}>Blog</HeaderLink>
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
