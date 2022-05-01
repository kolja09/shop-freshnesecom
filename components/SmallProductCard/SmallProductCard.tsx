import React from 'react';
import { useRouter } from "next/router";

import StarRating from "../StarRating/StarRating";
import { routesPath } from "../../static/routesPath";

import { IProductCardProps } from "./types";
import {
	ProductContainer,
	OldPrice,
	PriceBlock,
	ProductButton,
	ProductBuyBlock,
	ProductPrice,
	ProductPromotion,
	Text,
	Title,
	StarBlock,
	ProductImg,
	ImageBlock
} from "./styled";

const ProductCard = ({ product }: IProductCardProps) => {
	const router = useRouter();

	const redirectToProduct = () => {
		router.push({pathname: `${routesPath.searchPage}/${product?.id}`})
	};

	return (
		<ProductContainer>
			{product.promotion && <ProductPromotion>{product.promotion}</ProductPromotion>}
			<ImageBlock onClick={redirectToProduct}>
				{product.productPhoto &&
					<ProductImg
						width={236}
						height={180}
						src={product.productPhoto}
						alt={`${product.productPhoto}`}
					/>}
			</ImageBlock>
			<Title>{product.title}</Title>
			<Text>{product.text}</Text>
			<StarBlock>
				<StarRating rating={product.numberStar}/>
			</StarBlock>
			<ProductBuyBlock>
				<PriceBlock>
					<ProductPrice>{product.price} USD</ProductPrice>
					<OldPrice>{product.oldPrice}</OldPrice>
				</PriceBlock>
				<ProductButton onClick={redirectToProduct}>Buy now</ProductButton>
			</ProductBuyBlock>
		</ProductContainer>
	);
};

export default ProductCard;
