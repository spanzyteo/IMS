import { writable } from 'svelte/store';

export const selectedImage = writable(null);

export const details = writable([
	{
		name: 'Red Bull',
		image:
			'https://www.deeliver.co.za/cdn/shop/files/red-bull-energy-drink-250ml-24-pack-6x-4-pack.jpg?v=1686930747&width=1000',
		id: 23,
		category: 'Enregy Drinks',
		price: 405,
		quantity: '17 Packs',
		unit: 6,
		expiry: '20/09/25',
		threshold: '9 packs',
		availability: 'In-stock'
	},
	{
		name: 'Bourn Vita',
		image: 'https://egoleshopping.com/images/thumbnails/465/465/detailed/9/10a_avvr-4k.jpg',
		id: 24,
		category: 'Provisions',
		price: 1900,
		quantity: '7 Cartons',
		unit: 8,
		expiry: '19/02/24',
		threshold: '3 packs',
		availability: 'Out of stock'
	},
	{
		name: 'Harpic',
		image: 'https://m.media-amazon.com/images/I/416ult0+7ML._SX342_SY445_.jpg',
		id: 25,
		category: 'Cleaners',
		price: 800,
		quantity: '4 Cartons',
		unit: 6,
		expiry: '9/06/26',
		threshold: '2 Carton',
		availability: 'In-stock'
	},
	{
		name: 'Peanut Butter',
		image: 'http://bit.ly/3RXACwB',
		id: 26,
		category: 'Snacks',
		price: 1600,
		quantity: '14 (500g) Cans',
		unit: 9,
		expiry: '15/02/24',
		threshold: '7 Cans',
		availability: 'In-stock'
	},
	{
		name: 'Minimie Chin Chin',
		image: 'https://primegrocers.ng/wp-content/uploads/2020/06/Minimie-Chinchin-Sachet.jpg',
		id: 27,
		category: 'Snacks',
		price: 1400,
		quantity: '12 (500g) packs',
		unit: 9,
		expiry: '15/02/24',
		threshold: '7 Cans',
		availability: 'Out of stock'
	},
	{
		name: 'Dano Milk',
		image: 'https://shoprite.ng/wp-content/uploads/2023/04/p61.jpg',
		id: 28,
		category: 'Dairy',
		price: 4999,
		quantity: '30 (800g) Refills',
		unit: 25,
		expiry: '15/02/24',
		threshold: '10 Packs',
		availability: 'In-stock'
	},
	{
		name: 'Custard',
		image:
			'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/B/Y/193620_1654258994.jpg',
		id: 29,
		category: 'Dairy',
		price: 4450,
		quantity: '12 (2kg) Cans',
		unit: 9,
		expiry: '15/02/24',
		threshold: '7 Cans',
		availability: 'In-stock'
	},
	{
		name: 'Rice',
		image: 'https://24hoursmarket.com/wp-content/uploads/2019/11/bagofrice1.jpg',
		id: 30,
		category: 'Foodstuff',
		price: 52000,
		quantity: '12 (50kg) bag',
		unit: 9,
		expiry: '15/02/24',
		threshold: '7 bags',
		availability: 'In-stock'
	},
	{
		name: 'Hollandia',
		image: 'https://www.skippersfastfood.com/phc/121-large_default/hollandia-yoghurt.jpg',
		id: 31,
		category: 'Snacks',
		price: 650,
		quantity: '50 Cans',
		unit: 9,
		expiry: '15/02/24',
		threshold: '7 Cans',
		availability: 'In-stock'
	},
	{
		name: 'Chocolates',
		image:
			'https://i0.wp.com/nextcashandcarry.com.ng/wp-content/uploads/2022/09/d71e5f9c960d690d47e4f68064e605ff-1.jpg?w=400&ssl=1',
		id: 32,
		category: 'Snacks',
		price: 9470,
		quantity: '12 (500g) Cans',
		unit: 9,
		expiry: '15/02/24',
		threshold: '7 Cans',
		availability: 'Out of stock'
	},
	{
		name: 'Standing Fan',
		image:
			'https://electromart.com.ng/pub/media/catalog/product/cache/62d7e851a3f127a3cf9a1da41da5255d/t/s/ts_2020.jpg',
		id: 33,
		category: 'Snacks',
		price: 47990,
		quantity: '12 Fans',
		unit: 9,
		expiry: '15/02/24',
		threshold: '7 Fans',
		availability: 'In-stock'
	},
	{
		name: 'Tent Net',
		image:
			'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/70/462499/1.jpg?0107',
		id: 34,
		category: 'Snacks',
		price: 9500,
		quantity: '12 (500g) Cans',
		unit: 9,
		expiry: '15/02/24',
		threshold: '7 Cans',
		availability: 'In-stock'
	}
]);
