import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  margin: 0 45px;
  border-bottom: 1px solid rgba(21, 21, 21, 0.05);
`;

export const LinksContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  max-height: 16px;
  vertical-align: middle;

  &:not(:last-of-type) {
    margin-right: 33px;
  }
`;

export const HeaderLink = styled.a<{ $color?: string }>`
  font-size: 12px;
  line-height: 16px;
  color: ${({ $color }) => $color ? $color : "#6A983C"};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


