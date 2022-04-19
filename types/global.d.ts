declare interface ProductsProps {
	id: string,
	title: string,
	text: string,
	promotion: string | null,
	price: number,
	oldPrice: string | null,
	freshness: string,
	farm: string,
	deliveryArea: string,
	stock: string,
	numberStar: number,
	description: string,
	SKU: string,
	category: string,
	delivery: string,
	buyBy: string,
	tag: string,
	origins: string,
	howToCook: string,
	productPhoto: string | StaticImageData,
}

declare interface CategoryMenuProps {
	name: string,
	path: string,
	numberOfProducts: number,
}

interface FoodProps {
	title: string,
	text: string,
}

declare interface PostProps {
	id: string,
	title: string,
	tag: string[],
	author: string,
	date: string,
	imgBlog: StaticImageData,
	userPhoto: StaticImageData,
	category: string,
	text: string,
	foodRitual: FoodProps[],
}

declare interface CommentProps {
	id: string,
	message: string,
	name: string,
	img: StaticImageData,
}

declare interface BannerProps {
	subtitle: string,
	title: string,
}
