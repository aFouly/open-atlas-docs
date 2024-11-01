import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/open-atlas-docs/markdown-page',
    component: ComponentCreator('/open-atlas-docs/markdown-page', '9cc'),
    exact: true
  },
  {
    path: '/open-atlas-docs/docs',
    component: ComponentCreator('/open-atlas-docs/docs', 'e20'),
    routes: [
      {
        path: '/open-atlas-docs/docs',
        component: ComponentCreator('/open-atlas-docs/docs', 'e56'),
        routes: [
          {
            path: '/open-atlas-docs/docs',
            component: ComponentCreator('/open-atlas-docs/docs', '555'),
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
