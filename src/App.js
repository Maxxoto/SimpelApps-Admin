import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// Action creator
// import * as actions from './actions';

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
);

// Containers
// const MainLayout = React.lazy(() => import('./components/TheLayout'));

// Pages
// const Login = React.lazy(() => import('./pages/Login'));

class App extends Component {
  // componentDidUpdate(prevProps) {
  //   if (prevProps.alertReducer.message !== this.props.alertReducer.message) {
  //     setTimeout(() => {
  //       this.props.clear();
  //     }, 3000);
  //   }
  // }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
        {/* <Router>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route
                exact
                path='/login'
                name='Login Page'
                render={(props) => <Login {...props} />}
              />

              <Route
                path='/'
                name='Home'
                render={(props) => <TheLayout {...props} />}
              />
            </Switch>
          </React.Suspense>
        </Router> */}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   const {alertReducer} = state;
//   return {alertReducer};
// };
// export default connect(mapStateToProps, actions)(App);
export default App;
