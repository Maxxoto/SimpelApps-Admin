import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

import { connect } from 'react-redux';

import { CAlert } from '@coreui/react';

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
          <CAlert color={`${this.props.alertReducer.type}`} closeButton>
            {this.props.alertReducer.message}
          </CAlert>

          // style={{ textAlign: 'center', alignContent: 'center' }}
        )}

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
