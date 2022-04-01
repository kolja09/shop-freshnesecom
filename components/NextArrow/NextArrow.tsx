import React from 'react';
import Image from "next/image";

import nextArrow from "../../assets/img/arrow-black-right.svg";

import { ArrowRight } from './styled';

const NextArrow = ({onClick}:any) => {
    return (
        <ArrowRight onClick={onClick}>
            <Image src={nextArrow} alt='next-arrow'/>
        </ArrowRight>
    );
};

export default NextArrow;