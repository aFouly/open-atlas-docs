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
    component: ComponentCreator('/open-atlas-docs/docs', '57e'),
    routes: [
      {
        path: '/open-atlas-docs/docs',
        component: ComponentCreator('/open-atlas-docs/docs', 'ca0'),
        routes: [
          {
            path: '/open-atlas-docs/docs',
            component: ComponentCreator('/open-atlas-docs/docs', '7b2'),
            routes: [
              {
                path: '/open-atlas-docs/docs/intro',
                component: ComponentCreator('/open-atlas-docs/docs/intro', 'd97'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/plot-of-land',
                component: ComponentCreator('/open-atlas-docs/docs/plot-of-land', '1b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/risk-assessment',
                component: ComponentCreator('/open-atlas-docs/docs/risk-assessment', '23b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/risk-assessment-tutorial',
                component: ComponentCreator('/open-atlas-docs/docs/risk-assessment-tutorial', '4ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/open-atlas-docs/docs/tutorialintro',
                component: ComponentCreator('/open-atlas-docs/docs/tutorialintro', '88c'),
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
