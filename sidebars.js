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
           'installation/upgrade-gns3'
        ],
     },
      'getting-started/setup-local-server',
      'getting-started/setup-gns3-vm',
      'getting-started/your-first-topology',
      'getting-started/your-first-cisco-topology'
    ],
   'Using GNS3': [{
      type: 'category',
      label: 'GNS3 Administration',
      items: [
         'doc1',
         'doc2',
         'doc3'
      ],
   }, {
      type: 'category',
      label: 'GNS3 Design',
      items: [
          'doc1',
          'doc2',
          'doc3'
      ],
   }, {
    type: 'category',
    label: 'Emulators',
    items: [
        'doc1',
        'doc2',
        'doc3'
    ],
   }],
   'How-to Guides': [
      'doc1',
      'doc2',
      'doc3'
   ],
   'Troubleshooting & FAQ': [
      'doc1',
      'doc2',
      'doc3'
   ]
  },
}
