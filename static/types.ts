interface LinkItemProps {
	name: string,
	link: string,
}

export interface LinkProps {
	title: string,
	item: LinkItemProps[],
}

export interface SocialNetworkProps {
	name: string,
	img: StaticImageData,
	link: string,
}
