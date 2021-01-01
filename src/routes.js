import React from 'react';

const Toaster = React.lazy(() =>
  import('./views/notifications/toaster/Toaster'),
);

const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const BrandButtons = React.lazy(() =>
  import('./views/buttons/brand-buttons/BrandButtons'),
);
const ButtonDropdowns = React.lazy(() =>
  import('./views/buttons/button-dropdowns/ButtonDropdowns'),
);
const ButtonGroups = React.lazy(() =>
  import('./views/buttons/button-groups/ButtonGroups'),
);
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const CoreUIIcons = React.lazy(() =>
  import('./views/icons/coreui-icons/CoreUIIcons'),
);
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));

const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

// Pages
// Home
const Distribusi = React.lazy(() => import('./pages/Distribusi'));

// Sampel
const Sampel = React.lazy(() => import('./pages/Sampel'));
const SampelCreate = React.lazy(() => import('./pages/SampelCreate'));
const SampelEdit = React.lazy(() => import('./pages/SampelEdit'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/distribusi', name: 'Distribusi', component: Distribusi },
  { path: '/sampel', name: 'Sampel', component: Sampel, exact: true },
  { path: '/sampel/create', name: 'Buat Sampel', component: SampelCreate },
  { path: '/sampel/:id', name: 'Buat Sampel', component: SampelEdit },
  // { path: '/panel', name: 'Theme', component: Colors, exact: true },

  { path: '/base/forms', name: 'Forms', component: BasicForms },

  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  {
    path: '/buttons/button-dropdowns',
    name: 'Dropdowns',
    component: ButtonDropdowns,
  },
  {
    path: '/buttons/button-groups',
    name: 'Button Groups',
    component: ButtonGroups,
  },
  {
    path: '/buttons/brand-buttons',
    name: 'Brand Buttons',
    component: BrandButtons,
  },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  {
    path: '/notifications',
    name: 'Notifications',
    component: Alerts,
    exact: true,
  },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
