export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        {
            name: 'live',
            title: 'Review is live',
            type: 'boolean',
            description: 'Is this review to be live?'
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'string',
            description: 'Please enter brand at least.',
        },
        {
            name: 'range',
            title: 'Range',
            type: 'string',
            description: 'Please enter brand at least.',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'published',
            title: 'Published',
            type: 'date',
            options: {
                dateFormat: 'Do MMMM YYYY'
            }
        },
        {
            name: 'review',
            title: 'Review',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'overall',
            title: 'Overall Rating',
            type: 'number',
        },
        {
            name: 'rating',
            type: 'object',
            fields: [
                { name: 'pastry', title: 'Pastry', type: 'number' },
                { name: 'filling', title: 'Filling', type: 'number' },
                { name: 'presentation', title: 'Presentation', type: 'number' },
                { name: 'value', title: 'Value', type: 'number' },
            ],
            columns: '2'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'brand',
                maxLength: 100,
            },
        },
        {
            name: 'aggregated',
            title: 'Aggregated',
            type: 'boolean',
        },
        {
            name: 'reviewers',
            title: 'Number of reviewers',
            type: 'number'
        },
        {
            name: 'served',
            title: 'Served hot or room temperature',
            type: 'string',
            options: {
                list: [
                    { title: 'Room Temperature', value: 'room-temperature'},
                    { title: 'Hot/Warm', value: 'hot-warm' }
                ]
            },
            initialValue: 'room-temperature'
        },
        {
            name: 'side',
            title: 'Served with a side of...',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            initialValue: 0.00,
        },
        {
            name: 'round',
            title: 'If the same pie has been reviewed then the round number goes up',
            type: 'number',
            initialValue: 1
        },
        {
            name: 'source',
            title: 'Local or supermarket?',
            type: 'string',
            options: {
                list: [
                    { title: 'Supermarket', value: 'supermarket' },
                    { title: 'Local', value: 'local' }
                ]
            },
            initialValue: 'supermarket'
        }
    ],
    preview: {
        select: {
            title: 'brand',
            subtitle: 'range',
            media: 'image'
        },
    },
}
