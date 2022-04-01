export interface IPaginatorProps {
	length:number,
	currentPage:number,
	pageCount:number,
	setCurrentPage:(option:number) => void,
}

export interface IAvailablePages {
	pages: number[],
}
