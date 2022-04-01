import React from 'react';

import starYellow from './../../assets/img/ic-actions-star.svg';
import starWhite from './../../assets/img/ic-actions-star-white.svg';

import { IStarRatingProps } from "./types";
import {
    StarRatingContainer,
    Label,
    StyledImage,
    StarImageBlock
} from "./styled";

const StarRating = ({ rating, size = 16 }: IStarRatingProps) => {
    return (
        <StarRatingContainer>
            {[ ...Array(5)].map((star, idx) => {
                const ratingValue: number = idx + 1;
                return <Label key={idx}>
                    <StarImageBlock>
                        <StyledImage src={ratingValue <= rating ? starYellow : starWhite} width={size} height={size}/>
                    </StarImageBlock>
                </Label>
            })}
        </StarRatingContainer>
    );
};

export default StarRating;
