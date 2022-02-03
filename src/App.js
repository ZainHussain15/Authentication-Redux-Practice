import User from './components/User'
import Login from './components/Login';

import Header from './components/Header'
import { useSelector } from 'react-redux';
import './App.css';
import { Fragment } from 'react';

function App() {
  const isAuth = useSelector(state => state.authSlice.isAuthenticated)
  return (
    <Fragment>
      <Header />

      {!isAuth && <Login />}
      {isAuth && <User />}

    </Fragment>
  );
}

export default App;
