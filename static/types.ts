export interface commentProps {
	id: string,
	message: string,
	name: string,
	img: StaticImageData,
}

export interface BannerProps {
	subtitle: string,
	title: string,
}

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
