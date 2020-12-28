import React from 'react';
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import ChartLineSimple from '../charts/ChartLineSimple';

const WidgetsDropdown = (props) => {
  return (
    <CRow>
      <CCol sm='6' lg='3'>
        <CWidgetDropdown
          color='gradient-primary'
          header={
            props.dataDistribusi
              ? `${Object.keys(props.dataDistribusi).length}`
              : '0'
          }
          text='Data Pemeriksaan'
          footerSlot={
            <ChartLineSimple
              pointed
              className='c-chart-wrapper mt-3 mx-3'
              style={{ height: '70px' }}
              dataPoints={[65, 59, 84, 84, 51]}
              pointHoverBackgroundColor='primary'
              label='Members'
              labels='months'
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color='transparent'>
              <CIcon name='cil-settings' />
            </CDropdownToggle>
            <CDropdownMenu className='pt-0 pb-0' placement='bottom-end'>
              <CDropdownItem to='/distribusi'>Lihat data</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm='6' lg='3'>
        <CWidgetDropdown
          color='gradient-warning'
          header={
            props.dataSampel ? `${Object.keys(props.dataSampel).length}` : '0'
          }
          text='Data Sampel'
          footerSlot={
            <ChartLineSimple
              pointed
              className='mt-3 mx-3'
              style={{ height: '70px' }}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor='warning'
              options={{ elements: { line: { tension: 0.00001 } } }}
              label='Members'
              labels='months'
            />
          }
        >
          <CDropdown>
            <CDropdownToggle caret={false} color='transparent'>
              <CIcon name='cil-location-pin' />
            </CDropdownToggle>
            <CDropdownMenu className='pt-0 pb-0' placement='bottom-end'>
              <CDropdownItem to='/sampel'>Lihat data</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropdown;
