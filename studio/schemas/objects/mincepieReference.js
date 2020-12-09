export default {
    name: 'mincepieReference',
    type: 'object',
    title: 'Mince Pie reference',
    fields: [
      {
        name: 'mincepies',
        type: 'reference',
        to: [
          {
            type: 'mincepies'
          }
        ]
      }
    ]
  }
  