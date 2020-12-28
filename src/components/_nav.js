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
    _tag: 'CSidebarNavDropdown',
    name: 'Base',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Forms',
        to: '/base/forms',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Icons',
    to: '/icons/coreui-icons',
    icon: 'cil-star',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Toaster',
        to: '/notifications/toaster',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2',
  },
];

export default _nav;
