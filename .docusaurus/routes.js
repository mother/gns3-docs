
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/gns3-docs/',
  component: ComponentCreator('/gns3-docs/'),
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
  path: '/gns3-docs/docs/contribute/contribute-to-gns3',
  component: ComponentCreator('/gns3-docs/docs/contribute/contribute-to-gns3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/contribute/development-of-gns3',
  component: ComponentCreator('/gns3-docs/docs/contribute/development-of-gns3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/contribute/how-to-debug-web-ui-guide',
  component: ComponentCreator('/gns3-docs/docs/contribute/how-to-debug-web-ui-guide'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/docusaurus-reference/doc1',
  component: ComponentCreator('/gns3-docs/docs/docusaurus-reference/doc1'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/docusaurus-reference/doc2',
  component: ComponentCreator('/gns3-docs/docs/docusaurus-reference/doc2'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/docusaurus-reference/doc3',
  component: ComponentCreator('/gns3-docs/docs/docusaurus-reference/doc3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/docusaurus-reference/mdx',
  component: ComponentCreator('/gns3-docs/docs/docusaurus-reference/mdx'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/emulators/adding-vmware-vms-to-gns3-topologies',
  component: ComponentCreator('/gns3-docs/docs/emulators/adding-vmware-vms-to-gns3-topologies'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/emulators/cisco-ios-images-for-dynamips',
  component: ComponentCreator('/gns3-docs/docs/emulators/cisco-ios-images-for-dynamips'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/emulators/create-a-docker-container-for-gns3',
  component: ComponentCreator('/gns3-docs/docs/emulators/create-a-docker-container-for-gns3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/emulators/docker-support-in-gns3',
  component: ComponentCreator('/gns3-docs/docs/emulators/docker-support-in-gns3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/emulators/non-native-iou-for-windows-and-osx',
  component: ComponentCreator('/gns3-docs/docs/emulators/non-native-iou-for-windows-and-osx'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/emulators/qemu-system-uuid',
  component: ComponentCreator('/gns3-docs/docs/emulators/qemu-system-uuid'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/emulators/vpcs',
  component: ComponentCreator('/gns3-docs/docs/emulators/vpcs'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/emulators/which-emulators-should-i-use',
  component: ComponentCreator('/gns3-docs/docs/emulators/which-emulators-should-i-use'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/installation/download-32-bit',
  component: ComponentCreator('/gns3-docs/docs/getting-started/installation/download-32-bit'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/installation/download-gns3-vm',
  component: ComponentCreator('/gns3-docs/docs/getting-started/installation/download-gns3-vm'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/installation/esxi',
  component: ComponentCreator('/gns3-docs/docs/getting-started/installation/esxi'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/installation/gns3-on-packet',
  component: ComponentCreator('/gns3-docs/docs/getting-started/installation/gns3-on-packet'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/installation/linux',
  component: ComponentCreator('/gns3-docs/docs/getting-started/installation/linux'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/installation/mac',
  component: ComponentCreator('/gns3-docs/docs/getting-started/installation/mac'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/installation/one-server-multiple-clients',
  component: ComponentCreator('/gns3-docs/docs/getting-started/installation/one-server-multiple-clients'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/installation/remote-server',
  component: ComponentCreator('/gns3-docs/docs/getting-started/installation/remote-server'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/installation/upgrade-gns3',
  component: ComponentCreator('/gns3-docs/docs/getting-started/installation/upgrade-gns3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/installation/windows',
  component: ComponentCreator('/gns3-docs/docs/getting-started/installation/windows'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/setup-wizard-gns3-vm',
  component: ComponentCreator('/gns3-docs/docs/getting-started/setup-wizard-gns3-vm'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/setup-wizard-local-server',
  component: ComponentCreator('/gns3-docs/docs/getting-started/setup-wizard-local-server'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/your-first-cisco-topology',
  component: ComponentCreator('/gns3-docs/docs/getting-started/your-first-cisco-topology'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/getting-started/your-first-gns3-topology',
  component: ComponentCreator('/gns3-docs/docs/getting-started/your-first-gns3-topology'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/how-to-guides/cisco-asa',
  component: ComponentCreator('/gns3-docs/docs/how-to-guides/cisco-asa'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server',
  component: ComponentCreator('/gns3-docs/docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/how-to-guides/how-to-use-console-applications-with-the-web-ui',
  component: ComponentCreator('/gns3-docs/docs/how-to-guides/how-to-use-console-applications-with-the-web-ui'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/how-to-guides/importing-vmx-and-vqfx-into-gns3',
  component: ComponentCreator('/gns3-docs/docs/how-to-guides/importing-vmx-and-vqfx-into-gns3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/troubleshooting-faq/general-faq',
  component: ComponentCreator('/gns3-docs/docs/troubleshooting-faq/general-faq'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/troubleshooting-faq/troubleshoot-gns3',
  component: ComponentCreator('/gns3-docs/docs/troubleshooting-faq/troubleshoot-gns3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/troubleshooting-faq/where-do-i-get-ios-images',
  component: ComponentCreator('/gns3-docs/docs/troubleshooting-faq/where-do-i-get-ios-images'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/administration/client-server-ssl-encryption',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/administration/client-server-ssl-encryption'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/administration/gns3-security',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/administration/gns3-security'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/administration/gns3-server-configuration-file',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/administration/gns3-server-configuration-file'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/administration/running-gns3-server-as-daemon',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/administration/running-gns3-server-as-daemon'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/administration/scale-gns3',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/administration/scale-gns3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/advanced/connect-gns3-internet',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/advanced/connect-gns3-internet'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/advanced/create-a-new-version-for-an-appliance',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/advanced/create-a-new-version-for-an-appliance'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/advanced/move-from-iouvm-gns3-vm',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/advanced/move-from-iouvm-gns3-vm'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/advanced/port-name-formatting',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/advanced/port-name-formatting'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/advanced/settings-profiles',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/advanced/settings-profiles'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/advanced/special-ip-addresses',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/advanced/special-ip-addresses'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/advanced/the-nat-node',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/advanced/the-nat-node'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/beginners/change-node-symbol',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/beginners/change-node-symbol'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/beginners/gns3-styles',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/beginners/gns3-styles'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/beginners/import-gns3-appliance',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/beginners/import-gns3-appliance'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/beginners/install-from-marketplace',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/beginners/install-from-marketplace'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/beginners/link-control',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/beginners/link-control'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/beginners/switching-and-gns3',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/beginners/switching-and-gns3'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/beginners/the-console-terminal',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/beginners/the-console-terminal'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/beginners/the-gns3-gui',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/beginners/the-gns3-gui'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/design/architecture',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/design/architecture'),
  exact: true,
  
},
{
  path: '/gns3-docs/docs/using-gns3/design/why-gns3-uses-uuid',
  component: ComponentCreator('/gns3-docs/docs/using-gns3/design/why-gns3-uses-uuid'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
