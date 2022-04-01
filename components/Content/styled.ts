import styled from "styled-components";

export const ContentContainer = styled.div`
  padding: 48px 245px;
  display: flex;
  justify-content: space-between;
`;

export const TagsContainer = styled.div`
  width: 169px;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const Tag = styled.div`
  margin: 4px 4px;
  padding: 4px 10px;
  background-color: #F4F8EC;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #6A983C;
  border-radius: 12px;
`;

export const ButtonBack = styled.div`
  font-size: 15px;
  line-height: 22px;
  font-weight: bold;
  color: #151515;
`;

export const Title = styled.h3`
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
`;

export const FoodRitualContainer = styled.div``;

export const FoodRitual = styled.div`
  width: 569px;
`;

export const Text = styled.p`
  margin-bottom: 48px;
  font-size: 17px;
  line-height: 23px;
  color: #151515;
`;

export const SocialNetworksBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleBlock = styled.div`
  margin-top: 10px;
`;

export const SocialNetworkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  background-color: #F5F5F5;
  border-radius: 12px;
  cursor: pointer;
  
  &:hover {
    background-color: #d1d1d1;
    transition: 0.2s;
  }
`;

export const SocialName = styled.a`
  margin-left: 6px;
  font-size: 15px;
  line-height: 22px;
  font-weight: bold;
  color: #151515;
`;
