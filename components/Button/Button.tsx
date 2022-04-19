import React from 'react';
import Image from "next/image";

import ArrowGreen from '../../assets/img/Vector-green.svg'

import { IButtonProps } from "./types";
import { ButtonBlock } from "./styled";

const Button = ({ children }: IButtonProps) => {
    return (
        <ButtonBlock>
            {children} <Image src={ArrowGreen} />
        </ButtonBlock>
    );
};

export default Button;
