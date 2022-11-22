export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
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
            name: 'overall',
            title: 'Overall Rating',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
    ],
    preview: {
        select: {title: 'brand', media: 'image'},
    },
}
