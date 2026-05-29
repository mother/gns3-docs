module.exports = {
  sidebar310en: [
    'intro',
    {
      type: 'category',
      label: 'New Features in 3.1',
      link: { type: 'doc', id: 'new-features-3.1/intro' },
      items: [],
    },
    {
      type: 'category',
      label: 'GNS3 VM',
      items: [
        'gns3-vm/gns3-vm-usage',
        'gns3-vm/virtualbox-usage',
        'gns3-vm/kvm-usage',
        'gns3-vm/hyperv-usage',
        'gns3-vm/vmware-workstation-usage',
        'gns3-vm/vmware-esxi-usage',
        'gns3-vm/development-setup',
      ],
    },
    {
      type: 'category',
      label: 'Managing Projects',
      link: { type: 'doc', id: 'web-ui/project-management' },
      items: [
        'web-ui/project-topology',
        'web-ui/use-web-console',
        'web-ui/use-web-vnc',
        'web-ui/use-web-wireshark',
      ],
    },
    {
      type: 'category',
      label: 'Creating Templates',
      link: { type: 'doc', id: 'web-ui/new-template' },
      items: [
        'web-ui/template-cisco-ios',
        'web-ui/template-cisco-iou',
        'web-ui/template-qemu',
        'web-ui/template-docker',
      ],
      collapsible: true,
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Configuring Templates',
      link: { type: 'doc', id: 'web-ui/template-preferences' },
      items: [
        'web-ui/template-preferences-builtin',
        'web-ui/template-preferences-dynamips',
        'web-ui/template-preferences-iou',
        'web-ui/template-preferences-vpcs',
        'web-ui/template-preferences-qemu',
        'web-ui/template-preferences-docker',
      ],
      collapsible: true,
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Managing Resources',
      items: [
        'web-ui/manage-images',
        'web-ui/manage-computes',
        'web-ui/monitor-system',
        'web-ui/configure-settings',
      ],
    },
    {
      type: 'category',
      label: 'Managing Users',
      items: [
        'web-ui/manage-users',
      ],
    },
    {
      type: 'category',
      label: 'AI Tools',
      items: [
        'ai-tools/use-ai-assistant',
        'ai-tools/use-ai-skills',
        'ai-tools/use-fault-injection',
        'ai-tools/use-ai-packet-analysis',
      ],
    },
  ],
};
