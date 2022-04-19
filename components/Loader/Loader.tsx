import React from 'react';
import Image from "next/image";

import loader from './../../assets/img/loader.gif'

import { LoaderContainer } from './styled';

const Loader = () => {
	return (
		<LoaderContainer>
			<Image src={loader} alt={'loader'}/>
		</LoaderContainer>
	);
};

export default Loader;
