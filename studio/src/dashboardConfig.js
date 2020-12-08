export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcf8d6d96d6ab0d7d580731',
                  title: 'Sanity Studio',
                  name: 'mince-pie-review-studio',
                  apiId: 'f46efeff-a6a7-48fc-abb3-c18e9e7f93fb'
                },
                {
                  buildHookId: '5fcf8d6d96d6ab04b8581817',
                  title: 'Blog Website',
                  name: 'mince-pie-review',
                  apiId: '6fbb59ed-ec42-471c-885a-33f0517786a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jlabs/mince-pie-review',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://mince-pie-review.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
