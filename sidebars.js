module.exports = {
   someSidebar: {
      'Getting Started': [
         'getting-started/what-is-gns3',
         {
           type: 'category',
           label: 'Installation',
           items: [
              'installation/windows',
              'installation/mac',
              'installation/linux',
              'installation/esxi',
              'installation/remote-server',
              'installation/download-gns3-vm',
              'installation/download-32-bit',
              'installation/one-server-multiple-clients',
              'installation/upgrade-gns3',
              'installation/packet'
           ],
         },
         'getting-started/setup-local-server',
         'getting-started/setup-gns3-vm',
         'getting-started/your-first-topology',
         'getting-started/your-first-cisco-topology'
      ],
   'Using GNS3': [{
      type: 'category',
      label: 'Beginners',
      items: [
         'using-gns3/beginners/the-gns3-gui',
         'using-gns3/change-node-symbol',
         'using-gns3/gns3-styles',
         'using-gns3/switching-and-gns3',
         'using-gns3/the-console-terminal',
         'using-gns3/install-from-marketplace',
         'using-gns3/import-gns3-appliance',
         'using-gns3/link-control'
      ],
   }, {
      type: 'category',
      label: 'Advanced',
      items: [
         'using-gns3/connect-gns3-internet',
         'using-gns3/the-nat-node',
         'using-gns3/special-ip-addresses',
         'using-gns3/move-from-iouvm-gns3-vm',
         'using-gns3/settings-profiles',
         'using-gns3/create-a-new-version-for-an-appliance',
         'using-gns3/port-name-formatting'
      ],
   }, {
      type: 'category',
      label: 'GNS3 Administration',
      items: [
         'using-gns3/gns3-server-configuration-file',
         'using-gns3/running-gns3-server-as-daemon',
         'using-gns3/gns3-security',
         'using-gns3/client-server-ssl-encryption',
         'using-gns3/scale-gns3'
      ],
   }, {
      type: 'category',
      label: 'GNS3 Design',
      items: [
         'using-gns3/architecture',
         'using-gns3/why-gns3-uses-uuid'
      ],
   }],
   'Emulators': [
      'emulators/which-emulators-should-i-use',
      'emulators/non-native-iou-for-windows-and-osx',
      'emulators/adding-vmware-vms-to-gns3-topologies',
      'emulators/vpcs',
      'emulators/qemu-system-uuid'
   ],
   'Contribute': [
      'contribute/contribute-to-gns3',
      'contribute/development-of-gns3',
      'contribute/how-to-debug-web-ui-guide'
   ],
   'How-to Guides': [
      'how-to/cisco-asa',
      'how-to/importing-vmx-and-vqfx-into-gns3',
      'how-to/how-to-use-console-applications-with-the-web-ui'
   ],
   'Troubleshooting & FAQ': [
      'troubleshooting-faq/troubleshoot-gns3',
      'troubleshooting-faq/general-faq',
      'troubleshooting-faq/where-do-i-get-ios-images'
   ]
  },
}
