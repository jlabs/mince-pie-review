const slug = (brand) => {
    return brand
}

export const reviews = [
	{
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
		brand: 'Mr Kipling',
		range: '',
		image: '/images/Mr Kipling Default.jpg',
		published: new Date("2022-10-25"),
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
	{
		brand: 'Sainsbury\'s',
		range: '',
		image: '/images/Mr Kipling Default.jpg',
		published: new Date("2022-11-02"),
		description: 'Theses are bad. 7.5/20 and that\'s being generous.  Boring, tasteless and textureless. No plastic on the box itself, but a weak design on the outside.',
		overal: 7.5,
		rating: {
			pastry: 0,
			filling: 0,
			presentation: 0,
			value: 0
		},
        slug: 'sainsburys',
		agregregated: true,
		reviewers: 5,
		served: 'Room Temperature',
		side: '',
		price: 1.25,
	},
	{
		brand: 'Sainsbury\'s',
		range: 'Taste The Difference',
		image: '/images/Mr Kipling Default.jpg',
		published: new Date("2022-11-02"),
		description: 'At £2.25 these are a whole pound dearer than their counterpart. Worth it.  A potential champion here with a massive 17/20. Delicious, textured filling and proper pastry that didn\'t crumble. We loved the actual icing sugar sprinkling - one taster remarked \'It looks like snowy Christmas\'. ',
		overal: 17,
		rating: {
			pastry: 0,
			filling: 0,
			presentation: 0,
			value: 0
		},
        slug: 'sainsburys-taste-the-difference',
		agregregated: true,
		reviewers: 5,
		served: 'Room Temperature',
		side: '',
		price: 2.25,
	},
]