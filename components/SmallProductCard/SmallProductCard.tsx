import React from 'react';
import { useRouter } from "next/dist/client/router";

import StarRating from "../StarRating/StarRating";
import { routesPath } from "../../static/routesPath";

import { IProductCardProps } from "./types";
import {
	OldPrice,
	PriceBlock,
	ProductBlock,
	ProductButton,
	ProductBuyBlock,
	ProductPrice,
	ProductPromotion,
	ProductText,
	ProductTitle,
	StarContainer,
	ProductImg,
	ProductImageBlock
} from "./styled";

const ProductCard = ({ product }: IProductCardProps) => {
	const router = useRouter();

	const handleClick = () => {
		router.push({pathname: `${routesPath.searchPage}/${product?.id}`})
	};

	return (
		<ProductBlock onClick={handleClick}>
			{product.promotion && <ProductPromotion>{product.promotion}</ProductPromotion>}
			<ProductImageBlock>
				{product.productPhoto &&
					<ProductImg width={236} height={180} src={product.productPhoto} alt={'product-photo'}/>}
			</ProductImageBlock>
			<ProductTitle>{product.title}</ProductTitle>
			<ProductText>{product.text}</ProductText>
			<StarContainer>
				<StarRating rating={product.numberStar}/>
			</StarContainer>
			<ProductBuyBlock>
				<PriceBlock>
					<ProductPrice>{product.price} USD</ProductPrice>
					<OldPrice>{product.oldPrice}</OldPrice>
				</PriceBlock>
				<ProductButton>Buy now</ProductButton>
			</ProductBuyBlock>
		</ProductBlock>
	);
};

export default ProductCard;
