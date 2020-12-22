import React, { lazy, useEffect } from 'react';
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import MainChartExample from '../views/charts/MainChartExample.js';

import { connect } from 'react-redux';
import * as actions from '../actions';

const WidgetsDropdown = lazy(() =>
  import('../views/widgets/WidgetsDropdown.js'),
);

const Dashboard = (props) => {
  useEffect(() => {
    props.getDistribusi();
  }, []);
  return (
    <>
      <WidgetsDropdown data={props.data ? props.data : []} />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm='5'>
              <h4 id='traffic' className='card-title mb-0'>
                Monitoring Jumlah Sampel Masuk
              </h4>
              <div className='small text-muted'>Desember 2020</div>
            </CCol>
            <CCol sm='7' className='d-none d-md-block'>
              <CButton color='primary' className='float-right'>
                <CIcon name='cil-cloud-download' />
              </CButton>
              <CButtonGroup className='float-right mr-3'>
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color='outline-secondary'
                    key={value}
                    className='mx-0'
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{ height: '300px', marginTop: '40px' }} />
        </CCardBody>
      </CCard>
    </>
  );
};
const mapStateToProps = (state) => {
  const { distribusiReducer } = state;
  return distribusiReducer;
};

export default connect(mapStateToProps, actions)(Dashboard);
