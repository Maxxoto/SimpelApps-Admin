import React, { useEffect } from 'react';
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader,
} from '../components/index';

// Import redux
import { connect } from 'react-redux';

// Action cretor
import * as actions from '../actions';

// Additional libs
import jwt from 'jsonwebtoken';

const TheLayout = (props) => {
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      jwt.verify(
        token,
        process.env.NODE_ENV === 'production'
          ? process.env.JWT_SECRET
          : process.env.REACT_APP_JWT_SECRET,
        (err, decoded) => {
          if (err) {
            localStorage.removeItem('token'); //Remove token if error to force user relogin the apps
            props.history.push('/login');
          } else {
            props.history.push('/');
          }
        },
      );
    } else {
      props.history.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isAuthenticated]);
  return (
    <div className='c-app c-default-layout'>
      <TheSidebar />
      <div className='c-wrapper'>
        <TheHeader />
        <div className='c-body'>
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { authReducer } = state;
  return authReducer;
};

export default connect(mapStateToProps, actions)(TheLayout);
