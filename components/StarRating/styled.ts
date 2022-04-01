import styled from "styled-components";
import Image from "next/image";

export const StarRatingContainer = styled.div`
  display: flex;
`;

export const Label = styled.label``;

export const StarImageBlock = styled.div`
  position: relative;
  margin-right: 5px;
  display: flex;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  left: 50%;
  top: 50%;
  min-width: 30px;
`;
