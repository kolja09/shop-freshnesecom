import { IFilterOptions } from "../ProductCardPage/types";

export interface IAsideFilterProductProps {
	filterOptions: IFilterOptions,
	handleSetFilterOptions: (option: any) => void,
}