import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

import { IAvailablePages, IPaginatorProps } from './types';
import {
	PaginatorContainer,
	ProductsCountWrapper,
	Text,
	StyledPaginateContainer,
	StyledPageIndex,
	ButtonPage
} from "./styled";
import Tag from '../Tag/Tag';

const Paginator = ({ currentPage, length, pageCount, setCurrentPage }: IPaginatorProps) => {
	const dispatch = useDispatch();
	const [availablePages, setAvailablePages] = useState<IAvailablePages>({pages: []});

	useEffect(() => {
		setAvailablePages({pages: []});

		for (let i = 1; i <= pageCount; i++) {
			setAvailablePages(prevState => ({
				pages: [...prevState.pages, i]
			}))
		}
	}, [pageCount]);

	let disabledNextPage = availablePages.pages.length <= currentPage + 1;
	let disabledPrevPage = currentPage <= 0;

	return (
		<PaginatorContainer>
			<StyledPaginateContainer>
				<ButtonPage
					$color={disabledPrevPage}
					$background={disabledPrevPage}
					$cursor={disabledPrevPage}
					disabled={disabledPrevPage}
					onClick={() => dispatch(setCurrentPage(currentPage - 1))}
				>Prev Page</ButtonPage>
				{availablePages.pages
					.map((p: number, index: number) =>
						<StyledPageIndex
							$fontWeight={currentPage === p - 1 ? true : false}
							$background={currentPage === p - 1 ? true : false}
							key={index}
							onClick={() => dispatch(setCurrentPage(p - 1))}
						>{p}</StyledPageIndex>
					)}
				<ButtonPage
					$color={disabledNextPage}
					$background={disabledNextPage}
					$cursor={disabledNextPage}
					disabled={disabledNextPage}
					onClick={() => dispatch(setCurrentPage(currentPage + 1))}
				>Next Page</ButtonPage>
			</StyledPaginateContainer>
			<ProductsCountWrapper>
				<Tag>{length}</Tag>
				<Text>articles</Text>
			</ProductsCountWrapper>
		</PaginatorContainer>
	);
};

export default Paginator;
