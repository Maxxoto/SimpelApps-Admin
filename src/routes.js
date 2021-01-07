import React from 'react';

const CoreUIIcons = React.lazy(() =>
  import('./views/icons/coreui-icons/CoreUIIcons'),
);
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));

// Dashboard
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

// Home
const Distribusi = React.lazy(() => import('./pages/Distribusi'));
const DistribusiEdit = React.lazy(() => import('./pages/DistribusiEdit'));

// Sampel
const Sampel = React.lazy(() => import('./pages/Sampel'));
const SampelCreate = React.lazy(() => import('./pages/SampelCreate'));
const SampelEdit = React.lazy(() => import('./pages/SampelEdit'));

// Invoice
const Invoice = React.lazy(() => import('./pages/Invoice'));
const InvoiceEdit = React.lazy(() => import('./pages/InvoiceEdit'));

const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  {
    path: '/distribusi',
    name: 'Distribusi',
    component: Distribusi,
    exact: true,
  },

  {
    path: '/distribusi/:id',
    name: 'Edit Distribusi',
    component: DistribusiEdit,
  },

  { path: '/sampel', name: 'Sampel', component: Sampel, exact: true },
  { path: '/sampel/create', name: 'Buat Sampel', component: SampelCreate },
  { path: '/sampel/:id', name: 'Update Sampel', component: SampelEdit },

  { path: '/invoices', name: 'Invoice', component: Invoice, exact: true },
  { path: '/invoices/:id', name: 'Update', component: InvoiceEdit },
  // { path: '/panel', name: 'Theme', component: Colors, exact: true },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
];

export default routes;
