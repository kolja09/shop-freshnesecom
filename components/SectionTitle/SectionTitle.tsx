import React from 'react';

import Button from "../Button/Button";

import { ISectionTitle } from "./types";
import { HeadlineContainer, Headline } from "./styled";

const SectionTitle = ({ title, button }: ISectionTitle) => {
    return (
        <HeadlineContainer>
            <Headline>{title}</Headline>
            <Button>{button}</Button>
        </HeadlineContainer>
    );
};

export default SectionTitle;
