import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/open-atlas-docs/blog',
    component: ComponentCreator('/open-atlas-docs/blog', '3c9'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/archive',
    component: ComponentCreator('/open-atlas-docs/blog/archive', '436'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/authors',
    component: ComponentCreator('/open-atlas-docs/blog/authors', '455'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/open-atlas-docs/blog/authors/all-sebastien-lorber-articles', '595'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/authors/yangshun',
    component: ComponentCreator('/open-atlas-docs/blog/authors/yangshun', '56b'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/first-blog-post',
    component: ComponentCreator('/open-atlas-docs/blog/first-blog-post', '5fb'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/long-blog-post',
    component: ComponentCreator('/open-atlas-docs/blog/long-blog-post', 'ed7'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/mdx-blog-post',
    component: ComponentCreator('/open-atlas-docs/blog/mdx-blog-post', '136'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/tags',
    component: ComponentCreator('/open-atlas-docs/blog/tags', '6da'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/tags/docusaurus',
    component: ComponentCreator('/open-atlas-docs/blog/tags/docusaurus', 'd17'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/tags/facebook',
    component: ComponentCreator('/open-atlas-docs/blog/tags/facebook', '482'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/tags/hello',
    component: ComponentCreator('/open-atlas-docs/blog/tags/hello', '7d8'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/tags/hola',
    component: ComponentCreator('/open-atlas-docs/blog/tags/hola', '298'),
    exact: true
  },
  {
    path: '/open-atlas-docs/blog/welcome',
    component: ComponentCreator('/open-atlas-docs/blog/welcome', '99d'),
    exact: true
  },
  {
    path: '/open-atlas-docs/markdown-page',
    component: ComponentCreator('/open-atlas-docs/markdown-page', '9cc'),
    exact: true
  },
  {
    path: '/open-atlas-docs/docs',
    component: ComponentCreator('/open-atlas-docs/docs', '8b3'),
    routes: [
      {
        path: '/open-atlas-docs/docs',
        component: ComponentCreator('/open-atlas-docs/docs', '2ed'),
        routes: [
          {
            path: '/open-atlas-docs/docs',
            component: ComponentCreator('/open-atlas-docs/docs', '3cb'),
            routes: [
              {
                path: '/open-atlas-docs/docs/category/tutorial---basics',
                component: ComponentCreator('/open-atlas-docs/docs/category/tutorial---basics', '98a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/category/tutorial---extras',
                component: ComponentCreator('/open-atlas-docs/docs/category/tutorial---extras', 'ef1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/intro',
                component: ComponentCreator('/open-atlas-docs/docs/intro', 'd97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/open-atlas-docs/docs/tutorial-basics/congratulations', 'd24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/open-atlas-docs/docs/tutorial-basics/create-a-blog-post', '1c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/open-atlas-docs/docs/tutorial-basics/create-a-document', 'cee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/open-atlas-docs/docs/tutorial-basics/create-a-page', '712'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/open-atlas-docs/docs/tutorial-basics/deploy-your-site', '848'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/open-atlas-docs/docs/tutorial-basics/markdown-features', '45e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/open-atlas-docs/docs/tutorial-extras/manage-docs-versions', '50c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/open-atlas-docs/docs/tutorial-extras/translate-your-site', '789'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/open-atlas-docs/',
    component: ComponentCreator('/open-atlas-docs/', '447'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
