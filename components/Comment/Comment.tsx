import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { loadComments } from "../../store/comments/action";
import { RootState } from "../../store/store";

import SectionTitle from "../SectionTitle/SectionTitle";
import NextArrow from '../NextArrow/NextArrow';
import PrevArrow from "../PrevArrow/PrevArrow";
import { commentProps } from "../../static/types";

import {
	CommentContainer,
	UserCommentBlock,
	SectionTitleWrapper,
	UsersCommentsContainer,
	CommentText,
	User,
	ImageContainer,
} from "./styled";

const Comment = () => {
	const dispatch = useDispatch();

	const comments = useSelector((comments:RootState) => comments.commentReducer.comments);

	useEffect(() => {
		dispatch(loadComments())
	}, []);

	const settings = {
		speed: 1500,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		nextArrow: <NextArrow/>,
		prevArrow: <PrevArrow/>
	};

	return (
		<CommentContainer>
			<SectionTitleWrapper>
				<SectionTitle title='Our customers says' button='Button'/>
			</SectionTitleWrapper>
			<UsersCommentsContainer>
				<Slider {...settings}>
					{comments.map((c: commentProps) => (
						<UserCommentBlock key={c.id}>
							<CommentText>{c.message}</CommentText>
							<User>{c.name}</User>
							<ImageContainer>
								<Image width={48} height={48} src={c.img} alt='user-photo'/>
							</ImageContainer>
						</UserCommentBlock>
					))}
				</Slider>
			</UsersCommentsContainer>
		</CommentContainer>
	);
}

export default Comment;

