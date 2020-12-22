import React from 'react';
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

const TheHeaderDropdown = () => {
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
        <CDropdownItem className='text-white bg-danger'>
          {/* <CIcon name='cil-backspace' className='mfe-2' /> */}
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
