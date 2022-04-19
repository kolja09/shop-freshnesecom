import styled from "styled-components";
import Image from "next/image";

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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartEmpty = styled.div`
  font-weight: bold;
  padding: 40px;
  display: flex;
	justify-content: center;
  color: #46760A;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: #151515;
`;

export const CloseBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div``;

export const ImageContainer = styled.div``;

export const CartItemContainer = styled.div``;

export const CartItemBlock = styled.div`
  display: flex;
  margin-top:24px;
`;

export const ProductPicture = styled(Image)`
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
	justify-content: flex-end;
  margin: 25px 0 50px;
`;

export const PriceBlock = styled.div`
  margin-right: 50px;
`;

export const NumberProducts = styled.div`
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
	align-items: center;
  width: 30px;
  height: 30px;
  font-size: 23px;
  font-weight: bold;
  border-radius: 100%;
  border: 1px solid #A9A9A9;

  &:hover {
    background-color: #d1d1d1;
    transition: 0.2s;
  }
`;

export const SubtotalBlock = styled.div``;

export const Text = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #000000;
`;

export const Subtotal = styled.p`
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: #151515;
  margin-top: 8px;
`;

export const Footer  = styled.div`
  padding-top: 16px;
	width: 100%;
  margin-top: 30px;
  border-top: 1px solid #EBEBEB;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RedirectButton = styled.a`
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
  color: #151515;
	
	&:hover{
    color: #46760A;
    transition: 0.2s;
	}
`;

export const Button = styled.button`
  background-color: #6A983C;
  border: 2px solid #46760A;
  border-radius: 12px;
  padding: 12px 16px;
	color: #fff;
  font-weight: 700;
  font-size: 17px;
  line-height: 22px;
	cursor: pointer;
	
	&:hover{
		background-color: #fff;
    transition: 0.2s;
    color: #46760A;
	}
`;
