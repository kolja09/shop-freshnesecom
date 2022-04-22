import React from 'react';
import { useRouter } from "next/dist/client/router";

import Button from "../Button/Button";

import { ISectionTitle } from "./types";
import { HeadlineContainer, Headline } from "./styled";

const SectionTitle = ({ title, button, linkToPage }: ISectionTitle) => {
	const router = useRouter();

	const redirectToPage = () => {
		router.push({pathname: linkToPage})
	};

	return (
		<HeadlineContainer>
			<Headline>{title}</Headline>
			{ button && <Button redirectToPage={redirectToPage}>{button}</Button> }
		</HeadlineContainer>
	);
};

export default SectionTitle;
