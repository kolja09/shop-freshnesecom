import React from 'react';
import Image from "next/image";

import ArrowGreen from '../../assets/img/Vector-green.svg'

import { IButtonProps } from "./types";
import { ButtonBlock } from "./styled";

const Button = ({ children, redirectToPage }: IButtonProps) => {
	return (
		<ButtonBlock onClick={redirectToPage}>
			{children} <Image src={ArrowGreen} alt={"arrow"}/>
		</ButtonBlock>
	);
};

export default Button;
