import React from 'react';

import { ITagsProps } from './types';

import { TagsContainer } from "./styled";

const Tags = ({children}:ITagsProps) => {
    return (
        <TagsContainer>
            {children}
        </TagsContainer>
    );
};

export default Tags;
