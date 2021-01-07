import React, { useState, useEffect } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CRow,
  CButton,
  CForm,
  CLabel,
  CFormGroup,
} from '@coreui/react';
import { Input, Select } from 'antd';

import CIcon from '@coreui/icons-react';

import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

const InvoiceEdit = (props) => {
  const [item, setItem] = useState([]);
  const { control, errors, handleSubmit, reset } = useForm();

  const actionSubmit = (data) => {
    console.log(data);
    // props.updateInvoice(props.location.data._id, data, props.history);
  };

  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    props.getSampel();
  }, []);

  useEffect(() => {
    props.location.data._itemID.map((val) => {
      setItem([...item, val._id]);
    });
  }, [props.location.data._itemID]);

  return (
    <>
      <CRow>
        <CCol xs='12' lg='12'>
          <CCard>
            <CCardHeader>
              Update Data {props.location.data.invoice_code}
            </CCardHeader>
            <CForm onSubmit={handleSubmit(actionSubmit)}>
              <CCardBody>
                <CFormGroup row>
                  <CCol md='3'>
                    <CLabel>Kode Invoice</CLabel>
                  </CCol>
                  <CCol xs='12' md='9'>
                    <Controller
                      as={Input}
                      name='invoice_code'
                      type='text'
                      placeholder=''
                      control={control}
                      readOnly={true}
                      defaultValue={
                        props.location.data.invoice_code
                          ? props.location.data.invoice_code
                          : ''
                      }
                      rules={{ required: true }}
                    />
                    {errors._userID ? (
                      <div className='invalid-feedback-custom'>
                        Kode invoice tidak boleh kosong
                      </div>
                    ) : (
                      ''
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md='3'>
                    <CLabel>Item Barang</CLabel>
                  </CCol>

                  <CCol xs='12' md='9'>
                    <Controller
                      mode='multiple'
                      as={Select}
                      name='_itemID'
                      type='text'
                      control={control}
                      readOnly={true}
                      defaultValue={props.item ? props.item : []}
                      rules={{ required: true }}
                    >
                      {props.data
                        ? props.data.map((data) => (
                            <Select.Option
                              key={data._id}
                              value={data._id}
                              search={data.nama_sampel}
                            >
                              {data.nama_sampel}
                            </Select.Option>
                          ))
                        : null}
                    </Controller>
                    {errors._itemID ? (
                      <div className='invalid-feedback-custom'>
                        Item tidak boleh kosong
                      </div>
                    ) : (
                      ''
                    )}
                    <Select.Option key='proses' value='proses'>
                      Proses
                    </Select.Option>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md='3'>
                    <CLabel>Status</CLabel>
                  </CCol>
                  <CCol xs='12' md='9'>
                    <Controller
                      as={Select}
                      name='status'
                      type='text'
                      placeholder='Pilih status'
                      control={control}
                      defaultValue={
                        props.location.data.status
                          ? props.location.data.status
                          : ''
                      }
                      rules={{ required: true }}
                    >
                      <Select.Option key='pending' value='pending'>
                        Pending
                      </Select.Option>
                      <Select.Option key='proses' value='proses'>
                        Proses
                      </Select.Option>
                      <Select.Option key='lunas' value='lunas'>
                        Selesai
                      </Select.Option>
                    </Controller>
                    {errors.status ? (
                      <div className='invalid-feedback-custom'>
                        Kode pemeriksaan tidak boleh kosong
                      </div>
                    ) : (
                      ''
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md='3'>
                    <CLabel>Harga Total</CLabel>
                  </CCol>

                  <CCol xs='12' md='9'>
                    <Controller
                      as={Input}
                      name='harga_total'
                      type='text'
                      placeholder='Pilih tagihan'
                      autoComplete='harga_total'
                      control={control}
                      readOnly={true}
                      defaultValue={
                        props.location.data.total_harga
                          ? props.location.data.total_harga
                          : ''
                      }
                      rules={{ required: true }}
                    />
                    {errors._invoiceID ? (
                      <div className='invalid-feedback-custom'>
                        Invoice tidak boleh kosong
                      </div>
                    ) : (
                      ''
                    )}
                  </CCol>
                </CFormGroup>
              </CCardBody>
              <CCardFooter>
                <CButton type='submit' size='sm' color='primary'>
                  <CIcon name='cil-scrubber' /> Submit
                </CButton>
                &nbsp;
                <CButton
                  type='reset'
                  onClick={handleReset}
                  size='sm'
                  color='danger'
                >
                  <CIcon name='cil-ban' /> Reset
                </CButton>
              </CCardFooter>
            </CForm>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};
const mapStateToProps = (state) => {
  const { sampelReducer } = state;
  return sampelReducer;
};

export default connect(mapStateToProps, actions)(InvoiceEdit);
