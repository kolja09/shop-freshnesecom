import axios from "axios";

class ApiService{
	instance = axios.create({
		baseURL:'../static/'
	})

	getProducts = () => this.instance.get('productsData.json')

	getBlogs = () => this.instance.get('blogsData.json')

	getComments = () => this.instance.get('commentsData.json')

	getBanner = () => this.instance.get('bannerData.json')

	getCategoryMenu = () => this.instance.get('categoryMenuData.json')

	getTags = () => this.instance.get('tagsData.json')

	getBrands = () => this.instance.get('brandsData.json')

}

export const apiService = new ApiService();
