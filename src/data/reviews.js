const slug = (brand) => {
    return brand
}

export const reviews = [
	{
		id: 0,
		brand: 'Tesco',
		range: '',
		image: '/images/Tesco Default.jpg',
		published: new Date("2022-10-25"),
		description: 'Good flavour, although a lot of pastry.  Good value.',
		overal: 13.5,
		rating: {
			pastry: 0,
			filling: 0,
			presentation: 0,
			value: 0
		},
        slug: 'tesco',
		agregregated: true,
		reviewers: 5,
		served: 'Room Temperature',
		side: '',
		price: 0.00,
	},
	{
		id: 1,
		brand: 'Mr Kipling',
		range: '',
		image: '/images/Mr Kipling Default.jpg',
		published: new Date("2022-11-02"),
		description: 'Very disappointing, flavourless paste of a filling.  Nice-looking box but why the plastic? We don\'t want plastic.',
		overal: 8,
		rating: {
			pastry: 0,
			filling: 0,
			presentation: 0,
			value: 0
		},
        slug: 'mr-kipling',
		agregregated: true,
		reviewers: 5,
		served: 'Room Temperature',
		side: '',
		price: 0.00,
	},	
]