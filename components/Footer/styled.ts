import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 64px 45px;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinksBlock = styled.div``;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemBlock = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const Title = styled.h2`
  margin:0 0 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
`;

export const LinkItem = styled.a`
  font-size: 14px;
  line-height: 19px;
  color: #6A983C;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProductTagsContainer = styled.div`
  
`;

export const TitleProduct = styled.h1`
  margin: 48px 0 20px;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.button`
  padding: 4px 10px;
  background: #F5F5F5;
  border-radius: 12px;
  border:none;
  margin-right: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
	
	&:hover{
		color: #6A983C;
		background: #F4F8EC;
    transform: scale(1.1);
		transition: 0.2s;
    animation-duration: 0.5s;
	}
`;

export const TextBlog = styled.div`
  margin-top: 48px;
`;

