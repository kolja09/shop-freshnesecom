import styled from "styled-components";

export const BigProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 869px;
  height: 280px;
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  margin: 0 32px 32px auto;
`;

export const ImageProductBlock = styled.div`
  background: #F9F9F9;
  border-radius: 12px;
  border: 1px solid #D1D1D1;
  width: 268px;
  height: 280px;
`;

export const ProductInfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 32px;
`;

export const ProductInfoWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 128px;
  }
`;

export const ProductTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
  margin-bottom: 4px;
`;

export const ProductText = styled.p`
  font-size: 12px;
  color: #575757;
  margin-bottom: 10px;
`;

export const StarRatingBlock = styled.div`
  margin-bottom: 27px;
`;

export const InfoFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 12px;
`;

export const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ItemTitle = styled.h2`
  color: #A9A9A9;
`;

export const ItemText = styled.p`
  color: #6A983C;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
`;

export const PriceBlock = styled.div`
  max-height: 36px;
  margin-bottom: 16px;
`;

export const OldPrice = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #A9A9A9;
`;

export const InfoAboutDelivery = styled.div`
  margin-bottom: 26px;
`;

export const DetailButton = styled.button`
  background: #6A983C;
  border: 2px solid #46760A;
  border-radius: 12px;
  padding: 12px 20px;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #FFFFFF;
  cursor: pointer;
  margin-bottom: 12px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  background: #F5F5F5;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #151515;
  border-radius: 12px;
  padding: 6px 12px;
  cursor: pointer;
`;

export const DeliveryItem = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #A9A9A9;
`;

export const DeliveryText = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #A9A9A9;
`;
