import React, { useEffect } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { useForm, Controller } from 'react-hook-form';

import { connect } from 'react-redux';
import * as actions from '../actions';

const Login = (props) => {
  const { control, errors, handleSubmit } = useForm();

  useEffect(() => {
    if (props.isAuthenticated) {
      props.history.push('/dashboard');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isAuthenticated]);

  const getLogin = (data) => {
    props.login(data);
  };

  return (
    <div className='c-app c-default-layout flex-row align-items-center'>
      <CContainer>
        <CRow className='justify-content-center'>
          <CCol md='6'>
            <CCardGroup>
              <CCard className='p-4'>
                <CCardBody>
                  <CForm onSubmit={handleSubmit(getLogin)}>
                    <h1>Login</h1>
                    <p className='text-muted'>Sign In to your account</p>
                    <CInputGroup className='mb-3'>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name='cil-user' />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <Controller
                        as={CInput}
                        style={errors.email && { borderColor: 'red' }}
                        name='email'
                        type='email'
                        placeholder={
                          errors.email ? 'Field is required' : 'Email'
                        }
                        autoComplete='email'
                        control={control}
                        defaultValue=''
                        rules={{ required: true }}
                      />
                    </CInputGroup>
                    <CInputGroup className='mb-4'>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name='cil-lock-locked' />
                        </CInputGroupText>
                      </CInputGroupPrepend>

                      <Controller
                        as={CInput}
                        style={errors.password && { borderColor: 'red' }}
                        name='password'
                        type='password'
                        placeholder={
                          errors.password ? 'Field is required' : 'Password'
                        }
                        autoComplete='current-password'
                        control={control}
                        defaultValue=''
                        rules={{ required: true }}
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol xs='6'>
                        <CButton type='submit' color='primary' className='px-4'>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs='6' className='text-right'>
                        <CButton color='link' className='px-0'>
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { authReducer } = state;
  return authReducer;
};

export default connect(mapStateToProps, actions)(Login);
