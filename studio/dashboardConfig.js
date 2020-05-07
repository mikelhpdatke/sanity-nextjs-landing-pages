export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5eb3b698accaca697ccff2f8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-aremtji2',
                  apiId: '302114a5-9fed-4f27-a3e3-faea022a667c'
                },
                {
                  buildHookId: '5eb3b6985d2791f1ec3f18f1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ytibddm5',
                  apiId: '730413af-096b-4c8f-80a6-a7333fa8ba91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikelhpdatke/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ytibddm5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
