export default {
    name: 'review',
    type: 'document',
    title: 'Reviews',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'reviewDate',
            type: 'date',
            title: 'Review Date'
        },
        {
            name: 'mincepie',
            title: 'Mince Pie',
            type: 'array',
            of: [
            {
                type: 'mincepieReference'
            }
            ]
        },
        {
            name: 'reviewBody',
            type: 'text',
            title: 'Review'
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Rating',
            desription: 'Rating out of 10'
        },
        {
            name: 'reviewer',
            title: 'Reviewers',
            type: 'array',
            of: [{
                type: 'reviewerReference'
            }]
        },
    ]
}
