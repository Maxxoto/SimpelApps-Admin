import React from 'react';
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { connect } from 'react-redux';
import * as actions from '../actions';

const TheHeaderDropdown = (props) => {
  return (
    <CDropdown inNav className='c-header-nav-items mx-2 ' direction='down'>
      <CDropdownToggle className='c-header-nav-link' caret={false}>
        <div className='c-avatar'>
          <CImg
            src={'avatars/7.jpg'}
            className='c-avatar-img'
            alt='admin@simpleapps.go.id'
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className='pt-0 pb-0 ' placement='bottom-end'>
        <CDropdownItem header tag='div' color='light' className='text-center'>
          <strong>Account</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name='cil-user' className='mfe-2' />
          Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name='cil-settings' className='mfe-2' />
          Settings
        </CDropdownItem>
        <CDropdownItem divider className='pb-0 mb-0' />
        <CDropdownItem onClick={() => props.logout()} style={{ color: 'red' }}>
          <span className='ml-2'>Logout</span>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default connect(null, actions)(TheHeaderDropdown);
