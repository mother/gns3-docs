
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
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
  path: '/gns3-docs/go',
  component: ComponentCreator('/gns3-docs/go'),
  exact: true,
  
},
{
  path: '/gns3-docs/search',
  component: ComponentCreator('/gns3-docs/search'),
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
  path: '/gns3-docs/docs/doc1',
  component: ComponentCreator('/gns3-docs/docs/doc1'),
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
  path: '/gns3-docs/docs/getting-started/setup-gns3-vm',
  component: ComponentCreator('/gns3-docs/docs/getting-started/setup-gns3-vm'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/setup-local-server',
  component: ComponentCreator('/gns3-docs/docs/getting-started/setup-local-server'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/your-first-cisco-topology',
  component: ComponentCreator('/gns3-docs/docs/getting-started/your-first-cisco-topology'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/your-first-topology',
  component: ComponentCreator('/gns3-docs/docs/getting-started/your-first-topology'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/installation/download-32-bit',
  component: ComponentCreator('/gns3-docs/docs/installation/download-32-bit'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/installation/download-gns3-vm',
  component: ComponentCreator('/gns3-docs/docs/installation/download-gns3-vm'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/installation/esxi',
  component: ComponentCreator('/gns3-docs/docs/installation/esxi'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/installation/linux',
  component: ComponentCreator('/gns3-docs/docs/installation/linux'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/installation/mac',
  component: ComponentCreator('/gns3-docs/docs/installation/mac'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/installation/one-server-multiple-clients',
  component: ComponentCreator('/gns3-docs/docs/installation/one-server-multiple-clients'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/installation/remote-server',
  component: ComponentCreator('/gns3-docs/docs/installation/remote-server'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/installation/upgrade-gns3',
  component: ComponentCreator('/gns3-docs/docs/installation/upgrade-gns3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/installation/windows',
  component: ComponentCreator('/gns3-docs/docs/installation/windows'),
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
