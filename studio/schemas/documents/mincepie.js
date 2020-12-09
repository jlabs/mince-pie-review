export default {
    name: 'mincepies',
    type: 'document',
    title: 'Mince Pies',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description'
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
        of: [
          {
            type: 'reviewerReference'
          }
        ]
      },
    ]
  }
  