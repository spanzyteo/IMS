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
	}
]);
