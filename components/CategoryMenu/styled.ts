import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h4`
  margin: 65px 0 16px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

export const Link = styled.a`
  cursor: pointer;
  color: #6A983C;
  max-width: 100%;
  
  &:hover {
    text-decoration: underline;
  }

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;
