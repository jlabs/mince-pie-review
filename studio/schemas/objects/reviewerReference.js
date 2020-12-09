export default {
    name: 'reviewerReference',
    type: 'object',
    title: 'Reviewer reference',
    fields: [
      {
        name: 'reviewer',
        type: 'reference',
        to: [
          {
            type: 'reviewer'
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'reviewer.name',
        media: 'reviewer.image.asset'
      }
    }
  }
  