import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name='cil-speedometer' customClasses='c-sidebar-nav-icon' />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['SimpleApps Panel'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Data Pemeriksaan',
    to: '/distribusi',
    icon: 'cil-map',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Data Sampel',
    to: '/sampel',
    icon: 'cil-magnifying-glass',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Data Invoice',
    to: '/invoices',
    icon: 'cil-notes',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Settings'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Data User',
    route: '/settings/users',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pengaturan',
    route: '/settings/profile',
    icon: 'cil-settings',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Icons',
    to: '/icons/coreui-icons',
    icon: 'cil-star',
  },
];

export default _nav;
