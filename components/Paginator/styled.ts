import styled from "styled-components";

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 45px;
`;

export const StyledPaginateContainer = styled.div`
  display: flex;
  align-items: center;
	margin:0 auto;
`;

export const ButtonPage = styled.button<{
	$cursor: boolean;
	$background:boolean;
	$color:boolean;
}>`
  margin: 0 20px;
  padding: 12px 16px;
  background: ${({$background}) => $background ? '#A9A9A9' : '#6A983C'};
  border: 2px solid #46760A;
  border-radius: 12px;
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
  color: #FFFFFF;
  cursor: ${({$cursor}) => $cursor ? null : 'pointer'};
	
  &:hover{
    background: ${({$background}) => $background ? '#A9A9A9' : '#fff'};
    color: ${({$color}) => $color ? '#fff' : '#6A983C'};
  }
`;

export const ProductsCountWrapper = styled.div`
  display: flex;
`;

export const StyledPageIndex = styled.span<{
	$background: boolean;
	$fontWeight:boolean;
}>`
	font-weight: ${({$fontWeight}) => $fontWeight ? 'bold' : null};
  font-size: 20px;
	border: 1px solid #A9A9A9;
	padding: 8px;
	cursor: pointer;
  background: ${({$background}) => $background ? "#A9A9A9" : null};
	
  &:not(:first-of-type) {
    margin-left: 5px;
  }
`;

export const Tags = styled.div`
  background: #F4F8EC;
  border-radius: 12px;
  padding: 0 8px;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #6A983C;
`;

export const Text = styled.div`
  margin-left: 3px;
  font-size: 12px;
  line-height: 16px;
  color: #A9A9A9;
`;

