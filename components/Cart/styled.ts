import styled from "styled-components";

export const CartContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background:rgba(0,0,0, 0.4);
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  height: 700px;
  width: 450px;
  overflow-y: auto;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Headline = styled.h1`
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: #151515;
`;

export const CloseBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div``;

export const CartItemContainer = styled.div``;

export const CartItemBlock = styled.div`
  display: flex;
  margin-top:24px;
  margin-bottom: 48px;
`;

export const ImageBlock = styled.div`
  width: 100px;
  height: 67px;
  background: #F9F9F9;
  border-radius: 12px;
  margin-bottom: 12px;
`;

export const ProductContent = styled.div`
  margin-left: 25px;
`;

export const NameItem = styled.h3`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #151515;
  margin-bottom: 4px;

`;

export const InfoFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 7px;
`;

export const ItemTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #A9A9A9;
`;

export const ItemText = styled.p`
  color: #151515;
  font-size: 12px;
  line-height: 16px;
`;

export const ProductBuyBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
`;

export const PriceBlock = styled.div`
  margin-right: 45px;
`;

export const NumberProductsAdded = styled.div`
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #D1D1D1;
  background: #F9F9F9;
  margin:0 14px;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #6A983C;
`;

export const IconBlock = styled.div`
  display: flex;
  margin-bottom: 7px;
`;

export const TextIcon = styled.span`
  margin-left: 7px;
  font-size: 14px;
  line-height: 16px;
  color: #A9A9A9;
`;

export const CountProduct = styled.div`
  display: flex;
  justify-content: center;
  width: 30px;
  height: 30px;
  font-size: 23px;
  font-weight: bold;
  border-radius: 100%;
  border: 1px solid #A9A9A9;
`;
