import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { connect } from 'react-redux';
import * as actions from '../actions';

const getBadge = (status) => {
  switch (status) {
    case 'selesai':
      return 'success';
    case 'proses':
      return 'warning';
    case 'pending':
      return 'secondary';
    default:
      return 'secondary';
  }
};
const fields = [
  {
    key: '_userID',
    label: 'Nama Pemohon',
  },
  {
    key: 'kode_pemeriksaan',
    label: 'Kode Pemeriksaan',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: '_invoiceID',
    label: 'Tagihan',
  },
  {
    key: 'action',
    label: 'Aksi',
  },
];

const Distribusi = (props) => {
  useEffect(() => {
    props.getDistribusi();
    console.log(props.data);
  }, []);

  return (
    <>
      <CRow>
        <CCol xs='12' lg='12'>
          <CButton
            color={'primary'}
            className='mb-1'
            size='md'
            onClick={() => console.log('Clicking')}
          >
            <CIcon
              className='c-sidebar-brand-minimized'
              name={'cil-pencil'}
              height={35}
            />
            &nbsp;Tambah Data Distribusi
          </CButton>
          <CCard>
            <CCardHeader>Data Distribusi</CCardHeader>
            <CCardBody>
              <CDataTable
                items={props.data ? props.data : null}
                fields={fields}
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status === 'pending'
                          ? 'Pending'
                          : item.status === 'proses'
                          ? 'Proses'
                          : item.status === 'selesai'
                          ? 'Selesai'
                          : '-'}
                      </CBadge>
                    </td>
                  ),
                  action: (item) => (
                    <td>
                      <Link to={`#`}>
                        <CButton color={'success'} className='mr-1' size='sm'>
                          <CIcon
                            className='c-sidebar-brand-minimized'
                            name={'cilPencil'}
                            height={35}
                          />
                        </CButton>
                      </Link>

                      <CButton
                        color={'danger'}
                        className='mr-1'
                        size='sm'
                        onClick={() => console.log(item)}
                      >
                        <CIcon
                          className='c-sidebar-brand-minimized'
                          name={'cilTrash'}
                          height={35}
                        />
                      </CButton>
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
const mapStateToProps = (state) => {
  const { distribusiReducer } = state;
  return distribusiReducer;
};

export default connect(mapStateToProps, actions)(Distribusi);
