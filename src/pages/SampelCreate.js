import React, { useState } from 'react';
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
import { Input, Select, InputNumber } from 'antd';

import CIcon from '@coreui/icons-react';

import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

const SampelCreate = (props) => {
  const { control, errors, handleSubmit, reset } = useForm();
  const [varian, setVarian] = useState([{ nama_pengujian: '', harga: '' }]);

  const handleRemove = (index) => {
    const list = [...varian];
    list.splice(index, 1);
    setVarian(list);
  };
  const handleSelectVarian = (value, index) => {
    const list = [...varian];
    list[index]['nama_pengujian'] = value;
    setVarian(list);
  };
  const handleInputHarga = (value, index) => {
    const list = [...varian];
    list[index]['harga'] = value;
    setVarian(list);
  };

  const actionSubmit = (data) => {
    data.varianPengujian = varian;
    props.postSampel(data, props.history);
  };

  const handleReset = () => {
    reset();
  };
  return (
    <>
      <CRow>
        <CCol xs='12' lg='12'>
          <CCard>
            <CCardHeader>Buat Sampel</CCardHeader>
            <CForm onSubmit={handleSubmit(actionSubmit)}>
              <CCardBody>
                <CFormGroup row>
                  <CCol md='3'>
                    <CLabel>Nama Sampel</CLabel>
                  </CCol>
                  <CCol xs='12' md='9'>
                    <Controller
                      as={Input}
                      name='nama_sampel'
                      type='text'
                      placeholder='Masukkan Nama Sampel'
                      autoComplete='nama_sampel'
                      control={control}
                      defaultValue=''
                      rules={{ required: true }}
                    />
                    {errors.nama_sampel ? (
                      <div className='invalid-feedback-custom'>
                        Nama sampel tidak boleh kosong
                      </div>
                    ) : (
                      ''
                    )}
                  </CCol>
                </CFormGroup>
                {varian.map((val, i) => {
                  return (
                    <CFormGroup row key={i}>
                      {i === 0 ? (
                        <CCol md='3'>
                          <CLabel>Varian Pengujian</CLabel>
                        </CCol>
                      ) : (
                        <CCol md='3'></CCol>
                      )}
                      <CCol xs='12' md='5'>
                        <Select
                          name='nama_pengujian'
                          placeholder='Pilih Jenis Pengujian'
                          onChange={(val) => handleSelectVarian(val, i)}
                          style={{ width: '100%' }}
                          defaultActiveFirstOption={true}
                        >
                          <Select.Option key='Kimia' value='Kimia'>
                            Kimia
                          </Select.Option>
                          <Select.Option key='Biologi' value='Biologi'>
                            Biologi
                          </Select.Option>
                        </Select>
                      </CCol>
                      <CCol xs='12' md='2'>
                        <InputNumber
                          defaultValue={0}
                          name='harga'
                          placeholder='Masukkan harga sampel'
                          formatter={(value) =>
                            `Rp. ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                          }
                          parser={(value) => value.replace(/\Rp.\s?|(,*)/g, '')}
                          autoComplete='harga'
                          onChange={(e) => handleInputHarga(e, i)}
                          style={{ width: '100%' }}
                        />
                      </CCol>
                      <CCol xs='12' md='2'>
                        <CButton
                          size='sm'
                          color='primary'
                          onClick={() =>
                            setVarian([
                              ...varian,
                              {
                                nama_pengujian: '',
                                harga: '',
                              },
                            ])
                          }
                        >
                          Tambah Varian
                        </CButton>
                        &nbsp; &nbsp;
                        {i !== 0 && (
                          <CButton
                            color='danger'
                            size='sm'
                            onClick={() => handleRemove(i)}
                          >
                            Hapus
                          </CButton>
                        )}
                      </CCol>
                    </CFormGroup>
                  );
                })}
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

export default connect(null, actions)(SampelCreate);
