import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 45px;
`;

export const BannersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Banner = styled.div`
  width: 420px;
  height: 280px;
  background: #F4F8EC;
  margin: 65px 0;
  padding-left:33px;
  padding-top: 48px;
  border-radius: 12px;
  
  &:not(:last-of-type) {
    margin-right: 31px;
  }
`;

export const Subtitle = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #6A983C;
  margin-bottom: 8px;
`;

export const Headline = styled.h1`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  margin-bottom: 94px;
  margin-top: 8px;
`;

export const Button = styled.a`
  padding: 12px 16px;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #151515;
  border: 2px solid #46760A;
  border-radius: 12px;
  background: transparent;
  cursor: pointer;
	
	&:hover{
		background: #6A983C;
    transition: 0.2s;
		color: #fff;
	}
`;
