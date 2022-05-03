import React from 'react';
import Image from "next/image";

import underDevelopment from './../../assets/img/6ELx.gif';

import { Container, Text } from './styled';

const PageUnderDevelopment = () => {
	return (
		<Container>
			<Text>
				At the moment this page is under development
			</Text>
			<Image src={underDevelopment} alt={'under-development'}/>
		</Container>
	);
};

export default PageUnderDevelopment;
