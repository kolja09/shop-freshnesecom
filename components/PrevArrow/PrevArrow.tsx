import React  from 'react';
import Image from "next/image";

import prevArrow from "../../assets/img/arrow-black-left.svg";

import { ArrowLeft } from './styled';

const PrevArrow = ({onClick}:any) => {
    return (
        <ArrowLeft onClick={onClick}>
            <Image src={prevArrow} alt='prev-arrow'/>
        </ArrowLeft>
    );
};

export default PrevArrow;
