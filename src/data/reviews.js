const slug = (brand) => {
    return brand
}

export const reviews = [
	{
		id: 0,
		title: 'First Tesco Own',
		brand: 'Tesco',
		range: '',
		image: '/images/Tesco Default.jpg',
		published: new Date("2022-10-25"),
		description: 'Good flavour, although a lot of pastry.  Good value.',
		rating: {
			overal: 13.5
		},
        slug: 'tesco'
	},
	{
		id: 1,
		title: 'Second Tesco Own',
		brand: 'Mr Kipling',
		range: '',
		image: '/images/Mr Kipling Default.jpg',
		published: new Date("2022-11-02"),
		description: 'Very disappointing, flavourless paste of a filling.  Nice-looking box but why the plastic? We don\'t want plastic.',
		rating: {
			overal: 8
		},
        slug: 'mr-kipling'
	}
]