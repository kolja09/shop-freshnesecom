import styled from "styled-components";

export const NavigationsContainer = styled.div`
  padding: 16px 45px;
`;

export const NavigateBlock = styled.div`
  display: flex;
`;

export const NavigateLink = styled.a`
  font-size: 12px;
  line-height: 16px;
  color: #A9A9A9;
  cursor: pointer;
  margin-right: 8px;

  &:not(:first-of-type) {
    margin-left: 8px;
  }

  &:hover{
    color: #6A983C;
  }
`;
