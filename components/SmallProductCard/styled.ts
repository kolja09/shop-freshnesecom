import styled from "styled-components";
import Image from "next/image";

export const ProductBlock = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  cursor:pointer;
  
  &:not(:last-of-type) {
    margin-right: 32px;
  }
`;

export const ProductPromotion = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  background: #F4F8EC;
  border-radius: 12px;
  color: #6A983C;
`;

export const ProductImageBlock = styled.div`
  margin-bottom: 16px;
`;

export const ProductImg = styled(Image)`
  border-radius: 12px;
`;

export const ProductTitle = styled.h5`
  font-size: 15px;
  line-height: 22px;
  color: #151515;
  margin-bottom: 4px;
`;

export const ProductText = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #575757;
  margin-bottom: 16px;
`;

export const ProductBuyBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
`;

export const PriceBlock = styled.div`
  max-height: 36px;
`;

export const OldPrice = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #A9A9A9;
`;

export const ProductButton = styled.button`
  max-height: 36px;
  padding: 5px 12px;
  margin-left: 71px;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
  background: #6A983C;
  border: 2px solid #46760A;
  border-radius: 12px;
  cursor: pointer;
`;

export const StarContainer = styled.div`
  margin-bottom: 12px;
`;