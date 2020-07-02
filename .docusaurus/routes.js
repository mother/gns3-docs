
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/gns3-docs',
  component: ComponentCreator('/gns3-docs'),
  exact: true,
  
},
{
  path: '/gns3-docs/blog',
  component: ComponentCreator('/gns3-docs/blog'),
  exact: true,
  
},
{
  path: '/gns3-docs/blog/hello-world',
  component: ComponentCreator('/gns3-docs/blog/hello-world'),
  exact: true,
  
},
{
  path: '/gns3-docs/blog/hola',
  component: ComponentCreator('/gns3-docs/blog/hola'),
  exact: true,
  
},
{
  path: '/gns3-docs/blog/tags',
  component: ComponentCreator('/gns3-docs/blog/tags'),
  exact: true,
  
},
{
  path: '/gns3-docs/blog/tags/docusaurus',
  component: ComponentCreator('/gns3-docs/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/gns3-docs/blog/tags/facebook',
  component: ComponentCreator('/gns3-docs/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/gns3-docs/blog/tags/hello',
  component: ComponentCreator('/gns3-docs/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/gns3-docs/blog/tags/hola',
  component: ComponentCreator('/gns3-docs/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/gns3-docs/blog/welcome',
  component: ComponentCreator('/gns3-docs/blog/welcome'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs',
  component: ComponentCreator('/gns3-docs/docs'),
  
  routes: [
{
  path: '/gns3-docs/docs/',
  component: ComponentCreator('/gns3-docs/docs/'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/doc2',
  component: ComponentCreator('/gns3-docs/docs/doc2'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/doc3',
  component: ComponentCreator('/gns3-docs/docs/doc3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/mdx',
  component: ComponentCreator('/gns3-docs/docs/mdx'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
