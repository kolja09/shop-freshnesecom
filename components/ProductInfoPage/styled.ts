import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  padding: 16px 45px;
  display: flex;
`;

export const ImageWrapper = styled.div`
  border-radius: 12px;
  width: 100%;
	
  position: relative;
`;

export const ProductInfoWrapper = styled.div`
  padding-left: 32px;
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
`;

export const ProductTag = styled.div`
  margin-right: 12px;
  background: #F4F8EC;
  border-radius: 12px;
  padding: 4px 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #6A983C;
`;

export const Headline = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 140%;
  color: #151515;
  margin-bottom: 10px;
`;

export const DescriptionText = styled.div`
  margin-top: 42px;
  margin-bottom: 40px;
  font-size: 17px;
  line-height: 23px;
  color: #151515;
`;

export const InfoFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 40px;
`;

export const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 12px;
`;

export const ItemTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #A9A9A9;
`;

export const ItemText = styled.p`
  color: #6A983C;
`;

export const ProductBuyBlock = styled.div`
  width: 534px;
  padding: 16px;
  border: 3px solid #F5F5F5;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceBlock = styled.div``;

export const AddProductCarBlock = styled.div`
  max-height: 47px;
  display: flex;
`;

export const NumberProductsAdded = styled.div`
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 19px;
  border: 1px solid #D1D1D1;
  background: #F9F9F9;
  border-radius: 12px;
`;

export const AddProductCart = styled.button`
  padding: 12px 16px;
  background-color: #6A983C;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #FFFFFF;
  border: 2px solid #46760A;
  border-radius: 12px;
  cursor: pointer;
  margin-left: 24px;
	
	&:hover{
		background-color: #fff;
		transition: 0.2s;
		color: #46760A; 
	}
`;

export const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: #6A983C;
`;

export const OldPrice = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  text-decoration-line: line-through;
  color: #A9A9A9;
`;

export const ProductsContainer = styled.div`
  padding: 70px 45px;
`;

export const ProductBlock = styled.div`
  margin-top: 37px;
  display: flex;
  justify-content: space-between;
`;

