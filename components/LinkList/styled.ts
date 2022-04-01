import styled from "styled-components";

export const LinkListContainer = styled.div``;

export const CategoryContainer = styled.div``;

export const LinksContainer = styled.div`
  margin-bottom: 48px;
`;

export const Title = styled.h5`
  font-weight: 600; 
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 16px;
  color: #151515;
`;

export const LinkBlock = styled.div`
  cursor: pointer;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;  

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export const LinkArchives = styled.a`
  color: #6A983C;
`;

export const LinkCategory = styled.a`
  color: #A9A9A9;
`;

export const JoinOurList = styled.div`
  width: 269px;
`;

export const Text = styled.span`
  font-size: 14px;
  line-height: 19px;
  color: #A9A9A9;
`

export const SubscribeBlock = styled.div`
  padding: 11px 16px 12px 21px;
  width: 269px;
  background: #F9F9F9;
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const Input = styled.input`
  border:none;
  outline: none;
  background: #F9F9F9;
   
  &::placeholder{
    color: #A9A9A9;
  }
`;

export const Subscribe = styled.span`
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #151515;
  cursor: pointer ;
`;