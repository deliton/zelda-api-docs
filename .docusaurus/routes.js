
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','d12'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','d1f'),
  exact: true,
},
{
  path: '/blog/first-release',
  component: ComponentCreator('/blog/first-release','feb'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','929'),
  exact: true,
},
{
  path: '/blog/tags/api',
  component: ComponentCreator('/blog/tags/api','b46'),
  exact: true,
},
{
  path: '/blog/tags/documentation',
  component: ComponentCreator('/blog/tags/documentation','b53'),
  exact: true,
},
{
  path: '/blog/tags/release',
  component: ComponentCreator('/blog/tags/release','325'),
  exact: true,
},
{
  path: '/blog/v1-release',
  component: ComponentCreator('/blog/v1-release','91d'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','98a'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','bc1'),
  exact: true,
},
{
  path: '/docs/bosses',
  component: ComponentCreator('/docs/bosses','78a'),
  exact: true,
},
{
  path: '/docs/characters',
  component: ComponentCreator('/docs/characters','aff'),
  exact: true,
},
{
  path: '/docs/dungeons',
  component: ComponentCreator('/docs/dungeons','dd8'),
  exact: true,
},
{
  path: '/docs/games',
  component: ComponentCreator('/docs/games','f38'),
  exact: true,
},
{
  path: '/docs/graphql',
  component: ComponentCreator('/docs/graphql','2f2'),
  exact: true,
},
{
  path: '/docs/items',
  component: ComponentCreator('/docs/items','cfc'),
  exact: true,
},
{
  path: '/docs/mdx',
  component: ComponentCreator('/docs/mdx','155'),
  exact: true,
},
{
  path: '/docs/monsters',
  component: ComponentCreator('/docs/monsters','a09'),
  exact: true,
},
{
  path: '/docs/places',
  component: ComponentCreator('/docs/places','ffe'),
  exact: true,
},
{
  path: '/docs/staff',
  component: ComponentCreator('/docs/staff','76c'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
