import React from 'react';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react';
import { DocsLink } from 'src/reusable';

import usersData from '../views/users/UsersData';
const getBadge = (status) => {
  switch (status) {
    case 'Active':
      return 'success';
    case 'Inactive':
      return 'secondary';
    case 'Pending':
      return 'warning';
    case 'Banned':
      return 'danger';
    default:
      return 'primary';
  }
};
const fields = [
  {
    key: 'name',
    label: 'Nama',
  },
  {
    key: 'registered',
    label: 'Registered',
  },
  {
    key: 'Role',
    label: 'Role',
  },
  {
    key: 'status',
    label: 'Status',
  },
];

const Distribusi = (props) => {
  return (
    <>
      <CRow>
        <CCol xs='12' lg='12'>
          <CCard>
            <CCardHeader>
              Data Distribusi
              <DocsLink name='CModal' />
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                itemsPerPage={5}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Distribusi;
