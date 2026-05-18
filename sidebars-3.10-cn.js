module.exports = {
  sidebar310cn: [
    'intro',
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
      ],
    },
    {
      type: 'category',
      label: 'Web UI',
      items: [
        'web-ui/intro',
        'web-ui/project-topology',
        {
          type: 'category',
          label: '新建模板',
          link: { type: 'doc', id: 'web-ui/new-template' },
          items: [
            'web-ui/template-cisco-ios',
            'web-ui/template-cisco-iou',
            'web-ui/template-qemu',
            'web-ui/template-docker',
          ],
        },
        {
          type: 'category',
          label: '模板首选项',
          link: { type: 'doc', id: 'web-ui/template-preferences' },
          items: [
            'web-ui/template-preferences-builtin',
            'web-ui/template-preferences-dynamips',
            'web-ui/template-preferences-iou',
            'web-ui/template-preferences-vpcs',
            'web-ui/template-preferences-qemu',
            'web-ui/template-preferences-docker',
          ],
        },
        'web-ui/image-manager',
        'web-ui/computes',
        'web-ui/system-status',
        'web-ui/settings',
        'web-ui/management',
      ],
    },
    {
      type: 'category',
      label: '3.1 新特性',
      link: { type: 'doc', id: 'new-features-3.1/intro' },
      items: [
        'new-features-3.1/web-console',
        'new-features-3.1/web-vnc',
        'new-features-3.1/web-wireshark',
        'new-features-3.1/ai-assistant',
        'new-features-3.1/fault-injection',
        'new-features-3.1/gns3-skills',
      ],
    },
  ],
};
