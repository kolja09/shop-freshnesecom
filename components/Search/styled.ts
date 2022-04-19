import styled from "styled-components";
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 45px;
  padding: 40px 0;
`;

export const Logo = styled(Image)`
  cursor: pointer
`;

export const SearchContainer = styled.div<{ $focus?: boolean }>`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 16px;
  width: 100%;
  max-width: 500px;
  background: #F9F9F9;
  border: ${({ $focus }) => $focus ? "1px solid #151515" : "1px solid #d1d1d1"};
  border-radius: 12px;
`;

export const SearchInput = styled.input`
  width: 262px;
  font-size: 16px;
  line-height: 20px;
  background-color: #F9F9F9;
  border: none;
  outline: none;
  
  &::placeholder {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const SearchIcon = styled(Image)`
  cursor: pointer;
`;

export const IconsContainer = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 50px;
  }
`;

export const ProductsInCartCount = styled.div`
  position: absolute;
  padding: 3px;	
  top: 13px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #E5704B;
  border-radius: 50%;
  z-index: 11;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  
  &:hover {
    transform: scale(1.1);
    animation-duration: 0.5s;
  }
`;
