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
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { connect } from 'react-redux';
import * as actions from '../actions';

const getBadge = (status) => {
  switch (status) {
    case 'selesai':
      return 'success text-white';
    case 'proses':
      return 'warning text-white';
    case 'pending':
      return 'danger text-white';
    default:
      return 'danger text-white';
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
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState();

  const toggle = () => {
    setModal(!modal);
  };

  const handleDelete = () => {
    toggle();
    props.deleteDistribusi(item._id);
  };

  useEffect(() => {
    props.getDistribusi();
  }, []);

  useEffect(() => {
    props.getDistribusi();
  }, []);

  return (
    <>
      <CRow>
        <CCol xs='12' lg='12'>
          <CCard>
            <CCardHeader>Data Distribusi Pemeriksaan</CCardHeader>
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
                  _userID: (item) => (
                    <td>
                      {item._userID
                        ? item._userID.nama_lengkap
                          ? item._userID.nama_lengkap
                          : ''
                        : ''}
                    </td>
                  ),
                  _invoiceID: (item) => (
                    <td>
                      {item._invoiceID
                        ? item._invoiceID.invoice_code
                          ? item._invoiceID.invoice_code
                          : ''
                        : ''}
                    </td>
                  ),
                  action: (item) => (
                    <td>
                      <Link
                        to={{ pathname: `/distribusi/${item._id}`, data: item }}
                      >
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
                        onClick={() => {
                          setItem(item);
                          toggle();
                        }}
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
          <CModal id='modalDelete' show={modal} onClose={toggle}>
            <CModalHeader closeButton>
              Konfirmasi hapus data pemeriksaan
            </CModalHeader>
            <CModalBody>
              Apakah anda yakin akan menghapus
              <b> {item ? item._userID.nama_lengkap : ''}</b> ?
            </CModalBody>
            <CModalFooter>
              <CButton color='danger' onClick={() => handleDelete()}>
                Hapus
              </CButton>
              <CButton color='secondary' onClick={toggle}>
                Batal
              </CButton>
            </CModalFooter>
          </CModal>
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
