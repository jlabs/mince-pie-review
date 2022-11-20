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
		round: 1
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
		round: 1
	},
	{
		brand: 'Sainsbury\'s',
		range: '',
		image: '/images/Sainsburys.jpeg',
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
		round: 1
	},
	{
		brand: 'Sainsbury\'s',
		range: 'Taste The Difference',
		image: '/images/Sainsburys.jpeg',
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
		round: 1
	},
	{
		brand: 'Sainsbury\'s',
		range: 'Taste The Difference',
		image: '/images/Sainsburys.jpeg',
		published: new Date("2022-11-20"),
		description: '',
		overal: 17,
		rating: {
			pastry: 5,
			filling: 4,
			presentation: 4,
			value: 4
		},
        slug: 'sainsburys-taste-the-difference-2',
		agregregated: false,
		reviewers: 2,
		served: 'Warm',
		side: 'Double Cream',
		price: 1.47,
		round: 2
	},
	{
		brand: 'M&S',
		range: '',
		image: '/images/MnS Waitrose.jpg',
		published: new Date("2022-11-10"),
		description: 'Good pastry, very pricy at £2.00, and we didn\'t like the hole in the top of the pie. For... reasons. Look, if you must know we thought it looked like a cat\'s backside, OK? And that can\'t be unseen.  ',
		overal: 13,
		rating: {
			pastry: 0,
			filling: 0,
			presentation: 0,
			value: 0
		},
        slug: 'm-and-s',
		agregregated: true,
		reviewers: 5,
		served: 'Room Temperature',
		side: '',
		price: 2.00,
		round: 1
	},
	{
		brand: 'Waitrose & Partners',
		range: '',
		image: '/images/MnS Waitrose.jpg',
		published: new Date("2022-11-10"),
		description: 'Nice pastry, filling not bad, great value at £1.68, really good-looking pies. Taster\'s comment: "The box looks like a present',
		overal: 15.5,
		rating: {
			pastry: 0,
			filling: 0,
			presentation: 0,
			value: 0
		},
        slug: 'waitrose',
		agregregated: true,
		reviewers: 5,
		served: 'Room Temperature',
		side: '',
		price: 1.68,
		round: 1
	},
]