import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import 'antd/dist/antd.css';

import { connect } from 'react-redux';

import { CAlert, CToaster, CToast, CToastBody, CSpinner } from '@coreui/react';

import { Detector } from 'react-detect-offline';

import * as actions from './actions';

// Containers
const TheLayout = React.lazy(() => import('./pages/TheLayout'));

// Pages
const Login = React.lazy(() => import('./pages/Login'));
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

// Components
const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
);

class App extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.alertReducer.message !== this.props.alertReducer.message) {
      setTimeout(() => {
        this.props.clear();
      }, 3000);
    }
  }

  render() {
    return (
      <>
        {this.props.alertReducer.message && (
          <CAlert
            color={`${this.props.alertReducer.type}`}
            style={{ textAlign: 'center', alignContent: 'center' }}
            closeButton
          >
            {this.props.alertReducer.message}
          </CAlert>

          //
        )}

        <Detector
          render={({ online }) => {
            return (
              <CToaster position='top-right' key={'toaster-state-network'}>
                <CToast
                  key={'toast-state-network'}
                  show={online ? false : true}
                  fade={true}
                >
                  <CToastBody
                    className={
                      online ? 'bg-success text-white' : 'bg-danger text-white'
                    }
                  >
                    {!online && (
                      <>
                        Oops, You're seem to be offline . <br />
                        Reconnecting &nbsp;
                        <CSpinner size='sm' />{' '}
                      </>
                    )}
                  </CToastBody>
                </CToast>
                <CToast
                  key={'toast-state-network-online'}
                  show={online ? true : false}
                  autohide={3000}
                  fade={true}
                >
                  <CToastBody
                    className={
                      online ? 'bg-success text-white' : 'bg-danger text-white'
                    }
                  >
                    {online && <>Good , You're Online </>}
                  </CToastBody>
                </CToast>
              </CToaster>
            );
          }}
        />
        <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route
                exact
                path='/login'
                name='Login Page'
                render={(props) => <Login {...props} />}
              />

              {/* <Route
              exact
              path='/500'
              name='Page 500'
              render={(props) => <Page500 {...props} />}
            /> */}
              {/* <Route
              exact
              path='/404'
              name='Page 404'
              render={(props) => <Page404 {...props} />}
            /> */}
              <Route
                path='/'
                name='Home'
                render={(props) => <TheLayout {...props} />}
              />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { alertReducer } = state;
  return { alertReducer };
};

export default connect(mapStateToProps, actions)(App);
