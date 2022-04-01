import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { loadTags } from "../../store/tags/action";
import { LinkProps } from '../../static/types';

import {
	FooterContainer,
	LinksBlock,
	LinkItem,
	LinksContainer,
	Title,
	ItemsContainer,
	ItemBlock,
	ProductTagsContainer,
	TitleProduct,
	Tag,
	TagsContainer,
	TextBlog
} from "./styled";

const links: LinkProps[] = [
	{
		title: "Get in touch",
		item: [
			{
				name: "About Us",
				link: ""
			},
			{
				name: "Careers",
				link: ""
			},
			{
				name: "Press Releases",
				link: ""
			},
			{
				name: "Blog",
				link: ""
			}
		]
	},
	{
		title: "Connections",
		item: [
			{
				name: "Facebook",
				link: ""
			},
			{
				name: "Twitter",
				link: ""
			},
			{
				name: "Instagram",
				link: ""
			},
			{
				name: "Youtube",
				link: ""
			},
			{
				name: "LinkedIn",
				link: ""
			}
		]
	},
	{
		title: "Earnings",
		item: [
			{
				name: "Become an Affiliate",
				link: ""
			},
			{
				name: "Advertise your product",
				link: ""
			},
			{
				name: "Sell on Market",
				link: ""
			}
		]
	},
	{
		title: "Account",
		item: [
			{
				name: "Your account",
				link: ""
			},
			{
				name: "Returns Centre",
				link: ""
			},
			{
				name: "100% purchase protection",
				link: ""
			},
			{
				name: "Chat with us",
				link: ""
			},
			{
				name: "Help",
				link: ""
			}
		]
	}
]

const Footer = () => {
	const dispatch = useDispatch();
	
	const tags = useSelector((tags: RootState) => tags.tagReducer.tags);

	useEffect(() => {
		dispatch(loadTags())
	}, []);

	return (
		<FooterContainer>
			<LinksContainer>
				{links.map((el: LinkProps, idx: number) => (
					<LinksBlock key={idx}>
						<Title>{el.title}</Title>
						<ItemsContainer>
							{el.item.map((i, idx) => (
								<ItemBlock key={idx}>
									<LinkItem>{i.name}</LinkItem>
								</ItemBlock>
							))
							}
						</ItemsContainer>
					</LinksBlock>
				))}
			</LinksContainer>
			<ProductTagsContainer>
				<TitleProduct>Product tags</TitleProduct>
				<TagsContainer>
					{tags.map((t: string, idx: number) => (
						<Tag key={idx}>{t}</Tag>
					))}
				</TagsContainer>
				<TextBlog>Copyright © 2022 Kolja09@github</TextBlog>
			</ProductTagsContainer>
		</FooterContainer>
	);
};

export default Footer;
