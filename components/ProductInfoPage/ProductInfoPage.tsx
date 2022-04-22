import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';

import { RootState } from "../../store/store";
import { addProductToCart } from "../../store/cart/action";

import { routesPath } from "../../static/routesPath";
import StarRating from "../StarRating/StarRating";
import ProductCard from "../SmallProductCard/SmallProductCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import { IProductInfoPageProps } from './types';
import {
	ProductInfoContainer,
	ImageWrapper,
	ProductInfoWrapper,
	TagsContainer,
	ProductTag,
	Headline,
	DescriptionText,
	ItemTitle,
	ItemText,
	InfoFrame,
	InfoBlock,
	PriceBlock,
	ProductBuyBlock,
	AddProductCart,
	ProductPrice,
	OldPrice,
	AddProductCarBlock,
	ProductsContainer,
	ProductBlock,
	NumberProductsAdded
} from "./styled";

const ProductInfoPage = ({ product }: IProductInfoPageProps) => {

	const dispatch = useDispatch();

	const cartItems = useSelector((cart: RootState) => cart.cartReducer.items);
	const products = useSelector((products: RootState) => products.productReducer.productItems);

	const handleAddProductToCart = () => {
		dispatch(addProductToCart(product))
	};

	return (
		<>
			{!product ? <></> :
				<ProductInfoContainer>
					<ImageWrapper>
						<Image
							width={569}
							height={436}
							src={product.productPhoto}
							alt={`${product.productPhoto}`}
						/>
						<TagsContainer>
							{product.promotion && <ProductTag>{product.promotion}</ProductTag>}
							<ProductTag>{product.tag}</ProductTag>
						</TagsContainer>
					</ImageWrapper>
					<ProductInfoWrapper>
						<Headline>{product.title}</Headline>
						<StarRating rating={product.numberStar}/>
						<DescriptionText>{product.description}</DescriptionText>
						<InfoFrame>
							<InfoBlock>
								<ItemTitle>SKU:</ItemTitle>
								<ItemText>{product.SKU}</ItemText>
							</InfoBlock>
							<InfoBlock>
								<ItemTitle>Freshness</ItemTitle>
								<ItemText>{product.freshness}</ItemText>
							</InfoBlock>
							<InfoBlock>
								<ItemTitle>Category:</ItemTitle>
								<ItemText>{product.category}</ItemText>
							</InfoBlock>
							<InfoBlock>
								<ItemTitle>Buy by:</ItemTitle>
								<ItemText>{product.buyBy}</ItemText>
							</InfoBlock>
							<InfoBlock>
								<ItemTitle>Stock:</ItemTitle>
								<ItemText>{product.stock}</ItemText>
							</InfoBlock>
							<InfoBlock>
								<ItemTitle>Delivery:</ItemTitle>
								<ItemText>{product.deliveryArea}</ItemText>
							</InfoBlock>
							<InfoBlock>
								<ItemTitle>Delivery area:</ItemTitle>
								<ItemText>{product.deliveryArea}</ItemText>
							</InfoBlock>
							<InfoBlock>
								<ItemTitle>Farm:</ItemTitle>
								<ItemText>{product.farm}</ItemText>
							</InfoBlock>
						</InfoFrame>
						<ProductBuyBlock>
							<PriceBlock>
								<ProductPrice>{product.price} USD</ProductPrice>
								<OldPrice>{product.oldPrice}</OldPrice>
							</PriceBlock>
							<AddProductCarBlock>
								<NumberProductsAdded>{cartItems[product.id] ? cartItems[product.id].items.length : 0}</NumberProductsAdded>
								<AddProductCart onClick={handleAddProductToCart}>+ Add to cart</AddProductCart>
							</AddProductCarBlock>
						</ProductBuyBlock>
					</ProductInfoWrapper>
				</ProductInfoContainer>
			}
			<ProductsContainer>
				<SectionTitle title={'Related products'} button={'More products'} linkToPage={`${routesPath.searchPage}`}/>
				<ProductBlock>
					{products.slice(3, 7).map((p: ProductsProps) => (
						<ProductCard key={p.id} product={p}/>
					))}
				</ProductBlock>
			</ProductsContainer>
		</>
	);
};

export default ProductInfoPage;


