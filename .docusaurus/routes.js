import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/search',
    component: ComponentCreator('/search', '9aa'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6d6'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '989'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/contribute/contribute-to-gns3',
        component: ComponentCreator('/docs/contribute/contribute-to-gns3', '6d1'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/contribute/development-of-gns3',
        component: ComponentCreator('/docs/contribute/development-of-gns3', '1f9'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/contribute/how-to-debug-web-ui-guide',
        component: ComponentCreator('/docs/contribute/how-to-debug-web-ui-guide', '700'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/docusaurus-reference/doc1',
        component: ComponentCreator('/docs/docusaurus-reference/doc1', '817'),
        exact: true
      },
      {
        path: '/docs/docusaurus-reference/doc2',
        component: ComponentCreator('/docs/docusaurus-reference/doc2', 'e71'),
        exact: true
      },
      {
        path: '/docs/docusaurus-reference/doc3',
        component: ComponentCreator('/docs/docusaurus-reference/doc3', '0fc'),
        exact: true
      },
      {
        path: '/docs/docusaurus-reference/mdx',
        component: ComponentCreator('/docs/docusaurus-reference/mdx', 'b91'),
        exact: true
      },
      {
        path: '/docs/emulators/adding-vmware-vms-to-gns3-topologies',
        component: ComponentCreator('/docs/emulators/adding-vmware-vms-to-gns3-topologies', '2a0'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/emulators/cisco-ios-images-for-dynamips',
        component: ComponentCreator('/docs/emulators/cisco-ios-images-for-dynamips', '914'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/emulators/create-a-docker-container-for-gns3',
        component: ComponentCreator('/docs/emulators/create-a-docker-container-for-gns3', 'd4c'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/emulators/docker-support-in-gns3',
        component: ComponentCreator('/docs/emulators/docker-support-in-gns3', 'afd'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/emulators/non-native-iou-for-windows-and-osx',
        component: ComponentCreator('/docs/emulators/non-native-iou-for-windows-and-osx', '1d8'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/emulators/qemu-system-uuid',
        component: ComponentCreator('/docs/emulators/qemu-system-uuid', '83c'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/emulators/vpcs',
        component: ComponentCreator('/docs/emulators/vpcs', '757'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/emulators/which-emulators-should-i-use',
        component: ComponentCreator('/docs/emulators/which-emulators-should-i-use', '3ee'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/installation/download-32-bit',
        component: ComponentCreator('/docs/getting-started/installation/download-32-bit', '5e4'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/installation/download-gns3-vm',
        component: ComponentCreator('/docs/getting-started/installation/download-gns3-vm', '4c8'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/installation/esxi',
        component: ComponentCreator('/docs/getting-started/installation/esxi', '417'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/installation/gns3-on-equinix',
        component: ComponentCreator('/docs/getting-started/installation/gns3-on-equinix', 'c02'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/installation/linux',
        component: ComponentCreator('/docs/getting-started/installation/linux', 'd02'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/installation/mac',
        component: ComponentCreator('/docs/getting-started/installation/mac', 'f97'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/installation/one-server-multiple-clients',
        component: ComponentCreator('/docs/getting-started/installation/one-server-multiple-clients', 'abd'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/installation/remote-server',
        component: ComponentCreator('/docs/getting-started/installation/remote-server', 'c64'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/installation/upgrade-gns3',
        component: ComponentCreator('/docs/getting-started/installation/upgrade-gns3', 'e2e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/installation/windows',
        component: ComponentCreator('/docs/getting-started/installation/windows', '9a0'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/setup-wizard-gns3-vm',
        component: ComponentCreator('/docs/getting-started/setup-wizard-gns3-vm', '388'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/setup-wizard-local-server',
        component: ComponentCreator('/docs/getting-started/setup-wizard-local-server', '801'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/your-first-cisco-topology',
        component: ComponentCreator('/docs/getting-started/your-first-cisco-topology', 'c5b'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/getting-started/your-first-gns3-topology',
        component: ComponentCreator('/docs/getting-started/your-first-gns3-topology', 'e89'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/how-to-guides/cisco-asa',
        component: ComponentCreator('/docs/how-to-guides/cisco-asa', '7b8'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server',
        component: ComponentCreator('/docs/how-to-guides/configure-gns3-to-use-an-additional-remote-server', '65c'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/how-to-guides/how-to-use-console-applications-with-the-web-ui',
        component: ComponentCreator('/docs/how-to-guides/how-to-use-console-applications-with-the-web-ui', '2f7'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/how-to-guides/importing-vmx-and-vqfx-into-gns3',
        component: ComponentCreator('/docs/how-to-guides/importing-vmx-and-vqfx-into-gns3', 'ff5'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/troubleshooting-faq/general-faq',
        component: ComponentCreator('/docs/troubleshooting-faq/general-faq', 'f9d'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/troubleshooting-faq/troubleshoot-gns3',
        component: ComponentCreator('/docs/troubleshooting-faq/troubleshoot-gns3', '315'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/troubleshooting-faq/where-do-i-get-ios-images',
        component: ComponentCreator('/docs/troubleshooting-faq/where-do-i-get-ios-images', '555'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/administration/client-server-ssl-encryption',
        component: ComponentCreator('/docs/using-gns3/administration/client-server-ssl-encryption', 'a24'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/administration/gns3-security',
        component: ComponentCreator('/docs/using-gns3/administration/gns3-security', '2a4'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/administration/gns3-server-configuration-file',
        component: ComponentCreator('/docs/using-gns3/administration/gns3-server-configuration-file', '879'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/administration/running-gns3-server-as-daemon',
        component: ComponentCreator('/docs/using-gns3/administration/running-gns3-server-as-daemon', '156'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/administration/scale-gns3',
        component: ComponentCreator('/docs/using-gns3/administration/scale-gns3', 'b8a'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/advanced/configuration-transfer-qemu-vms',
        component: ComponentCreator('/docs/using-gns3/advanced/configuration-transfer-qemu-vms', '43d'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/advanced/connect-gns3-internet',
        component: ComponentCreator('/docs/using-gns3/advanced/connect-gns3-internet', 'a1d'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/advanced/create-a-new-version-for-an-appliance',
        component: ComponentCreator('/docs/using-gns3/advanced/create-a-new-version-for-an-appliance', '65f'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/advanced/hubs-and-switches',
        component: ComponentCreator('/docs/using-gns3/advanced/hubs-and-switches', '3bf'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/advanced/move-from-iouvm-gns3-vm',
        component: ComponentCreator('/docs/using-gns3/advanced/move-from-iouvm-gns3-vm', '9cf'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/advanced/port-name-formatting',
        component: ComponentCreator('/docs/using-gns3/advanced/port-name-formatting', 'a66'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/advanced/settings-profiles',
        component: ComponentCreator('/docs/using-gns3/advanced/settings-profiles', 'ab3'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/advanced/special-ip-addresses',
        component: ComponentCreator('/docs/using-gns3/advanced/special-ip-addresses', 'e61'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/advanced/the-nat-node',
        component: ComponentCreator('/docs/using-gns3/advanced/the-nat-node', 'e85'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/beginners/change-node-symbol',
        component: ComponentCreator('/docs/using-gns3/beginners/change-node-symbol', '5ff'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/beginners/gns3-styles',
        component: ComponentCreator('/docs/using-gns3/beginners/gns3-styles', 'd6a'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/beginners/import-gns3-appliance',
        component: ComponentCreator('/docs/using-gns3/beginners/import-gns3-appliance', '46e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/beginners/install-from-marketplace',
        component: ComponentCreator('/docs/using-gns3/beginners/install-from-marketplace', 'ebc'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/beginners/link-control',
        component: ComponentCreator('/docs/using-gns3/beginners/link-control', '787'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/beginners/switching-and-gns3',
        component: ComponentCreator('/docs/using-gns3/beginners/switching-and-gns3', '215'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/beginners/the-console-terminal',
        component: ComponentCreator('/docs/using-gns3/beginners/the-console-terminal', '77e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/beginners/the-gns3-gui',
        component: ComponentCreator('/docs/using-gns3/beginners/the-gns3-gui', '613'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/design/architecture',
        component: ComponentCreator('/docs/using-gns3/design/architecture', '6e1'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/docs/using-gns3/design/why-gns3-uses-uuid',
        component: ComponentCreator('/docs/using-gns3/design/why-gns3-uses-uuid', '0ef'),
        exact: true,
        sidebar: "someSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '151'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
