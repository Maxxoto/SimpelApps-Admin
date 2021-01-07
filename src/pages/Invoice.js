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
  CModalHeader,
  CModalBody,
  CModalFooter,
  CForm,
  CFormGroup,
  CLabel,
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
    key: 'invoice_code',
    label: 'Kode Invoice',
  },
  {
    key: '_itemID',
    label: 'Item Barang',
  },
  {
    key: 'status',
    label: 'Status',
  },
  {
    key: 'total_harga',
    label: 'Total Harga',
  },
  {
    key: 'action',
    label: 'Aksi',
  },
];

const Invoice = (props) => {
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState();

  const toggle = () => {
    setModal(!modal);
  };

  const handleDelete = () => {
    toggle();
    props.deleteInvoice(item._id);
  };

  useEffect(() => {
    props.getInvoice();
  }, []);

  return (
    <>
      <CRow>
        <CCol xs='12' lg='12'>
          <CCard>
            <CCardHeader>Data Invoice</CCardHeader>
            <CCardBody>
              <CDataTable
                items={props.data ? props.data : null}
                fields={fields}
                itemsPerPage={10}
                pagination
                key='data-invoice'
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
                  _itemID: (item) => (
                    <td>
                      {item._itemID.map((val) => {
                        return (
                          <>
                            <CBadge color='info'>{val.nama_sampel}</CBadge>
                          </>
                        );
                      })}
                    </td>
                  ),
                  total_harga: (item) => (
                    <td>{item.total_harga ? `Rp.${item.total_harga}` : ''}</td>
                  ),
                  varianPengujian: (item) => (
                    <td>
                      {item.varianPengujian.map((val) => {
                        return (
                          <>
                            <CBadge color='info'>
                              Nama Pengujian : {val.nama_pengujian}
                            </CBadge>
                            <p className='m-0'>
                              <CBadge color='success'>
                                Harga : {val.harga}
                              </CBadge>
                            </p>
                            <br />
                          </>
                        );
                      })}
                    </td>
                  ),

                  action: (item) => (
                    <td>
                      <Link
                        to={{ pathname: `/invoices/${item._id}`, data: item }}
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
              Konfirmasi hapus data invoice
            </CModalHeader>
            <CModalBody>
              Apakah anda yakin akan menghapus
              <b> {item ? item.invoice_code : ''}</b> ?
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
  const { invoiceReducer } = state;
  return invoiceReducer;
};

export default connect(mapStateToProps, actions)(Invoice);
