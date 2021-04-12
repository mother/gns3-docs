
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug'),
  exact: true,
  
},
{
  path: '/search',
  component: ComponentCreator('/search'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/'),
  exact: true,
  
},
{
  path: '/docs/contribute/contribute-to-gns3',
  component: ComponentCreator('/docs/contribute/contribute-to-gns3'),
  exact: true,
  
},
{
  path: '/docs/contribute/development-of-gns3',
  component: ComponentCreator('/docs/contribute/development-of-gns3'),
  exact: true,
  
},
{
  path: '/docs/contribute/how-to-debug-web-ui-guide',
  component: ComponentCreator('/docs/contribute/how-to-debug-web-ui-guide'),
  exact: true,
  
},
{
  path: '/docs/docusaurus-reference/doc1',
  component: ComponentCreator('/docs/docusaurus-reference/doc1'),
  exact: true,
  
},
{
  path: '/docs/docusaurus-reference/doc2',
  component: ComponentCreator('/docs/docusaurus-reference/doc2'),
  exact: true,
  
},
{
  path: '/docs/docusaurus-reference/doc3',
  component: ComponentCreator('/docs/docusaurus-reference/doc3'),
  exact: true,
  
},
{
  path: '/docs/docusaurus-reference/mdx',
  component: ComponentCreator('/docs/docusaurus-reference/mdx'),
  exact: true,
  
},
{
  path: '/docs/emulators/adding-vmware-vms-to-gns3-topologies',
  component: ComponentCreator('/docs/emulators/adding-vmware-vms-to-gns3-topologies'),
  exact: true,
  
},
{
  path: '/docs/emulators/cisco-ios-images-for-dynamips',
  component: ComponentCreator('/docs/emulators/cisco-ios-images-for-dynamips'),
  exact: true,
  
},
{
  path: '/docs/emulators/create-a-docker-container-for-gns3',
  component: ComponentCreator('/docs/emulators/create-a-docker-container-for-gns3'),
  exact: true,
  
},
{
  path: '/docs/emulators/docker-support-in-gns3',
  component: ComponentCreator('/docs/emulators/docker-support-in-gns3'),
  exact: true,
  
},
{
  path: '/docs/emulators/non-native-iou-for-windows-and-osx',
  component: ComponentCreator('/docs/emulators/non-native-iou-for-windows-and-osx'),
  exact: true,
  
},
{
  path: '/docs/emulators/qemu-system-uuid',
  component: ComponentCreator('/docs/emulators/qemu-system-uuid'),
  exact: true,
  
},
{
  path: '/docs/emulators/vpcs',
  component: ComponentCreator('/docs/emulators/vpcs'),
  exact: true,
  
},
{
  path: '/docs/emulators/which-emulators-should-i-use',
  component: ComponentCreator('/docs/emulators/which-emulators-should-i-use'),
  exact: true,
  
},
{
  path: '/docs/getting-started/installation/download-32-bit',
  component: ComponentCreator('/docs/getting-started/installation/download-32-bit'),
  exact: true,
  
},
{
  path: '/docs/getting-started/installation/download-gns3-vm',
  component: ComponentCreator('/docs/getting-started/installation/download-gns3-vm'),
  exact: true,
  
},
{
  path: '/docs/getting-started/installation/esxi',
  component: ComponentCreator('/docs/getting-started/installation/esxi'),
  exact: true,
  
},
{
  path: '/docs/getting-started/installation/gns3-on-packet',
  component: ComponentCreator('/docs/getting-started/installation/gns3-on-packet'),
  exact: true,
  
},
{
  path: '/docs/getting-started/installation/linux',
  component: ComponentCreator('/docs/getting-started/installation/linux'),
  exact: true,
  
},
{
  path: '/docs/getting-started/installation/mac',
  component: ComponentCreator('/docs/getting-started/installation/mac'),
  exact: true,
  
},
{
  path: '/docs/getting-started/installation/one-server-multiple-clients',
  component: ComponentCreator('/docs/getting-started/installation/one-server-multiple-clients'),
  exact: true,
  
},
{
  path: '/docs/getting-started/installation/remote-server',
  component: ComponentCreator('/docs/getting-started/installation/remote-server'),
  exact: true,
  
},
{
  path: '/docs/getting-started/installation/upgrade-gns3',
  component: ComponentCreator('/docs/getting-started/installation/upgrade-gns3'),
  exact: true,
  
},
{
  path: '/docs/getting-started/installation/windows',
  component: ComponentCreator('/docs/getting-started/installation/windows'),
  exact: true,
  
},
{
  path: '/docs/getting-started/setup-wizard-gns3-vm',
  component: ComponentCreator('/docs/getting-started/setup-wizard-gns3-vm'),
  exact: true,
  
},
{
  path: '/docs/getting-started/setup-wizard-local-server',
  component: ComponentCreator('/docs/getting-started/setup-wizard-local-server'),
  exact: true,
  
},
{
  path: '/docs/getting-started/your-first-cisco-topology',
  component: ComponentCreator('/docs/getting-started/your-first-cisco-topology'),
  exact: true,
  
},
{
  path: '/docs/getting-started/your-first-gns3-topology',
  component: ComponentCreator('/docs/getting-started/your-first-gns3-topology'),
  exact: true,
  
},
{
  path: '/docs/how-to-guides/cisco-asa',
  component: ComponentCreator('/docs/how-to-guides/cisco-asa'),
  exact: true,
  
},
{
  path: '/docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server',
  component: ComponentCreator('/docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server'),
  exact: true,
  
},
{
  path: '/docs/how-to-guides/how-to-use-console-applications-with-the-web-ui',
  component: ComponentCreator('/docs/how-to-guides/how-to-use-console-applications-with-the-web-ui'),
  exact: true,
  
},
{
  path: '/docs/how-to-guides/importing-vmx-and-vqfx-into-gns3',
  component: ComponentCreator('/docs/how-to-guides/importing-vmx-and-vqfx-into-gns3'),
  exact: true,
  
},
{
  path: '/docs/troubleshooting-faq/general-faq',
  component: ComponentCreator('/docs/troubleshooting-faq/general-faq'),
  exact: true,
  
},
{
  path: '/docs/troubleshooting-faq/troubleshoot-gns3',
  component: ComponentCreator('/docs/troubleshooting-faq/troubleshoot-gns3'),
  exact: true,
  
},
{
  path: '/docs/troubleshooting-faq/where-do-i-get-ios-images',
  component: ComponentCreator('/docs/troubleshooting-faq/where-do-i-get-ios-images'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/administration/client-server-ssl-encryption',
  component: ComponentCreator('/docs/using-gns3/administration/client-server-ssl-encryption'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/administration/gns3-security',
  component: ComponentCreator('/docs/using-gns3/administration/gns3-security'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/administration/gns3-server-configuration-file',
  component: ComponentCreator('/docs/using-gns3/administration/gns3-server-configuration-file'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/administration/running-gns3-server-as-daemon',
  component: ComponentCreator('/docs/using-gns3/administration/running-gns3-server-as-daemon'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/administration/scale-gns3',
  component: ComponentCreator('/docs/using-gns3/administration/scale-gns3'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/advanced/configuration-transfer-qemu-vms',
  component: ComponentCreator('/docs/using-gns3/advanced/configuration-transfer-qemu-vms'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/advanced/connect-gns3-internet',
  component: ComponentCreator('/docs/using-gns3/advanced/connect-gns3-internet'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/advanced/create-a-new-version-for-an-appliance',
  component: ComponentCreator('/docs/using-gns3/advanced/create-a-new-version-for-an-appliance'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/advanced/move-from-iouvm-gns3-vm',
  component: ComponentCreator('/docs/using-gns3/advanced/move-from-iouvm-gns3-vm'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/advanced/port-name-formatting',
  component: ComponentCreator('/docs/using-gns3/advanced/port-name-formatting'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/advanced/settings-profiles',
  component: ComponentCreator('/docs/using-gns3/advanced/settings-profiles'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/advanced/special-ip-addresses',
  component: ComponentCreator('/docs/using-gns3/advanced/special-ip-addresses'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/advanced/the-nat-node',
  component: ComponentCreator('/docs/using-gns3/advanced/the-nat-node'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/beginners/change-node-symbol',
  component: ComponentCreator('/docs/using-gns3/beginners/change-node-symbol'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/beginners/gns3-styles',
  component: ComponentCreator('/docs/using-gns3/beginners/gns3-styles'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/beginners/import-gns3-appliance',
  component: ComponentCreator('/docs/using-gns3/beginners/import-gns3-appliance'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/beginners/install-from-marketplace',
  component: ComponentCreator('/docs/using-gns3/beginners/install-from-marketplace'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/beginners/link-control',
  component: ComponentCreator('/docs/using-gns3/beginners/link-control'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/beginners/switching-and-gns3',
  component: ComponentCreator('/docs/using-gns3/beginners/switching-and-gns3'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/beginners/the-console-terminal',
  component: ComponentCreator('/docs/using-gns3/beginners/the-console-terminal'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/beginners/the-gns3-gui',
  component: ComponentCreator('/docs/using-gns3/beginners/the-gns3-gui'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/design/architecture',
  component: ComponentCreator('/docs/using-gns3/design/architecture'),
  exact: true,
  
},
{
  path: '/docs/using-gns3/design/why-gns3-uses-uuid',
  component: ComponentCreator('/docs/using-gns3/design/why-gns3-uses-uuid'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
