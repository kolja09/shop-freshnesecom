import React from 'react';

import { ITagsProps } from './types';

import { TagsContainer } from "./styled";

const Tag = ({children}:ITagsProps) => {
    return (
        <TagsContainer>
            {children}
        </TagsContainer>
    );
};

export default Tag;
