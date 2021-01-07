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

const DistribusiEdit = (props) => {
  const { control, errors, handleSubmit, reset } = useForm();

  const actionSubmit = (data) => {
    props.updateDistribusi(props.location.data._id, data, props.history);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <>
      <CRow>
        <CCol xs='12' lg='12'>
          <CCard>
            <CCardHeader>
              Update Data {props.location.data._userID.nama_lengkap}
            </CCardHeader>
            <CForm onSubmit={handleSubmit(actionSubmit)}>
              <CCardBody>
                <CFormGroup row>
                  <CCol md='3'>
                    <CLabel>Nama Pemohon</CLabel>
                  </CCol>
                  <CCol xs='12' md='9'>
                    <Controller
                      as={Input}
                      name='_userID'
                      type='text'
                      placeholder=''
                      control={control}
                      readOnly={true}
                      defaultValue={
                        props.location.data._userID
                          ? props.location.data._userID.nama_lengkap
                          : ''
                      }
                      rules={{ required: true }}
                    />
                    {errors._userID ? (
                      <div className='invalid-feedback-custom'>
                        Nama pemohon tidak boleh kosong
                      </div>
                    ) : (
                      ''
                    )}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md='3'>
                    <CLabel>Kode Pemeriksaan</CLabel>
                  </CCol>

                  <CCol xs='12' md='9'>
                    <Controller
                      as={Input}
                      name='kode_pemeriksaan'
                      type='text'
                      placeholder='Masukkan Kode Pemeriksaan'
                      autoComplete='kode_pemeriksaan'
                      control={control}
                      readOnly={true}
                      defaultValue={
                        props.location.data.kode_pemeriksaan
                          ? props.location.data.kode_pemeriksaan
                          : ''
                      }
                      rules={{ required: true }}
                    />
                    {errors.kode_pemeriksaan ? (
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
                      <Select.Option key='selesai' value='selesai'>
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
                    <CLabel>Tagihan</CLabel>
                  </CCol>

                  <CCol xs='12' md='9'>
                    <Controller
                      as={Input}
                      name='_invoiceID'
                      type='text'
                      placeholder='Pilih tagihan'
                      autoComplete='_invoiceID'
                      control={control}
                      readOnly={true}
                      defaultValue={
                        props.location.data._invoiceID
                          ? props.location.data._invoiceID.invoice_code
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

export default connect(null, actions)(DistribusiEdit);
