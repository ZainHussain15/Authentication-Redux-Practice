import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice'
const Header = () => {
  const dispatch = useDispatch()

  const isAuth = useSelector(state => state.authSlice.isAuthenticated)
  const logoutHandler = () => {
    dispatch(authActions.logout())
  }
  return (
    <div className={classes.header}>
      <header className={classes.header}>
        <div><h1> </h1></div>

        <nav>
          <ul>
            {!isAuth && (
              <li>
                <button >Login</button>
              </li>
            )}
            {isAuth && (
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            )}
          </ul>
        </nav>


      </header>
    </div>
  );
};

export default Header;