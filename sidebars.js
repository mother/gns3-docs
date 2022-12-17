module.exports = {
   someSidebar: {
      'Getting Started': [
         'getting-started/what-is-gns3',
         {
           type: 'category',
           label: 'Installation',
           items: [
              'getting-started/installation/windows',
              'getting-started/installation/mac',
              'getting-started/installation/linux',
              'getting-started/installation/esxi',
              'getting-started/installation/remote-server',
              'getting-started/installation/download-gns3-vm',
              'getting-started/installation/download-32-bit',
              'getting-started/installation/one-server-multiple-clients',
              'getting-started/installation/upgrade-gns3',
              'getting-started/installation/gns3-on-equinix'
           ],
         },
         'getting-started/setup-wizard-local-server',
         'getting-started/setup-wizard-gns3-vm',
         'getting-started/your-first-gns3-topology',
         'getting-started/your-first-cisco-topology'
      ],
   'Using GNS3': [{
      type: 'category',
      label: 'Beginners',
      items: [
         'using-gns3/beginners/the-gns3-gui',
         'using-gns3/beginners/change-node-symbol',
         'using-gns3/beginners/gns3-styles',
         'using-gns3/beginners/switching-and-gns3',
         'using-gns3/beginners/the-console-terminal',
         'using-gns3/beginners/install-from-marketplace',
         'using-gns3/beginners/import-gns3-appliance',
         'using-gns3/beginners/link-control'
      ],
   }, {
      type: 'category',
      label: 'Advanced',
      items: [
         'using-gns3/advanced/connect-gns3-internet',
         'using-gns3/advanced/the-nat-node',
         'using-gns3/advanced/special-ip-addresses',
         'using-gns3/advanced/move-from-iouvm-gns3-vm',
         'using-gns3/advanced/settings-profiles',
         'using-gns3/advanced/create-a-new-version-for-an-appliance',
         'using-gns3/advanced/port-name-formatting',
         'using-gns3/advanced/configuration-transfer-qemu-vms',
      ],
   }, {
      type: 'category',
      label: 'GNS3 Administration',
      items: [
         'using-gns3/administration/gns3-server-configuration-file',
         'using-gns3/administration/running-gns3-server-as-daemon',
         'using-gns3/administration/gns3-security',
         'using-gns3/administration/client-server-ssl-encryption',
         'using-gns3/administration/scale-gns3'
      ],
   }, {
      type: 'category',
      label: 'GNS3 Design',
      items: [
         'using-gns3/design/architecture',
         'using-gns3/design/why-gns3-uses-uuid'
      ],
   }],
   'Emulators': [
      'emulators/which-emulators-should-i-use',
      'emulators/cisco-ios-images-for-dynamips',
      'emulators/non-native-iou-for-windows-and-osx',
      'emulators/adding-vmware-vms-to-gns3-topologies',
      'emulators/docker-support-in-gns3',
      'emulators/create-a-docker-container-for-gns3',
      'emulators/vpcs',
      'emulators/qemu-system-uuid'
   ],
   'Contribute': [
      'contribute/contribute-to-gns3',
      'contribute/development-of-gns3',
      'contribute/how-to-debug-web-ui-guide'
   ],
   'How-to Guides': [
      'how-to-guides/cisco-asa',
      'how-to-guides/importing-vmx-and-vqfx-into-gns3',
      'how-to-guides/how-to-use-console-applications-with-the-web-ui',
      'how-to-guides/configure-gns3-to-use-an-additional-remote-server'
   ],
   'Troubleshooting & FAQ': [
      'troubleshooting-faq/troubleshoot-gns3',
      'troubleshooting-faq/general-faq',
      'troubleshooting-faq/where-do-i-get-ios-images'
   ]
  },
}
