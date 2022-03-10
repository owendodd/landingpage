export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '6229fd8183a2cf2e2cb541e6',
                  title: 'Sanity Studio',
                  name: 'landingpage-studio-fuuu6xah',
                  apiId: '8ee9d24a-be2e-4a47-a6cd-6cfc7f242b09'
                },
                {
                  buildHookId: '6229fd8147da6a31331149fd',
                  title: 'Landing pages Website',
                  name: 'landingpage-web-sgge1psq',
                  apiId: '52235606-bc20-4d13-a1c7-ed5b79dfb18e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/owendodd/landingpage',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://landingpage-web-sgge1psq.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
