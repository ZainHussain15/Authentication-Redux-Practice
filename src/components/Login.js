import '../components/Login.css';
// import firebase from '../firebase';
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/authSlice'
import { useState } from 'react';



const Auth = () => {
  const dispatch = useDispatch()
  const loginEmail = useSelector(state => state.authSlice.loginEmail);
  const pass = useSelector(state => state.authSlice.pass);
  // const loginId = useSelector(state => state.authSlice.loginId)



  const loginEmailChangeHandler = (event) => {
    dispatch(authActions.setLoginEmail(event.target.value))
  }
  const passChangeHandler = (event) => {
    dispatch(authActions.setPass(event.target.value))
  }

  const [loginData, setLoginData] = useState([])
  const [email, setEmail] = useState('')

  const loginHandler = async (event) => {
    event.preventDefault()
    // console.log(loginEmail, 'ididididid')
    // if (loginId === '')
    //   firebase.child('Login').push(
    //     { loginEmail, pass, },
    //     err => {
    //       if (err)
    //         console.log(err)
    //     }
    //   )
    try {
      const response = await fetch('https://fir-21323-default-rtdb.firebaseio.com/Login.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const loginInfo = []

      for (const key in data) {
        loginInfo.push({
          id: key,
          loginEmail: data[key].loginEmail,
          pass: data[key].pass
        })
      }
      console.log(loginInfo, 'info')
      setLoginData(loginInfo);
      loginData.map((loginInfo, index) => (
        setEmail(loginInfo.loginEmail)
      ))
      console.log(email, 'email')
    } catch (error) {
      console.error();
    }
    if (loginEmail === email) {
      dispatch(authActions.login())
    } else {
      console.log(email, 'login')
      console.log(loginEmail, 'loginEmail')
      console.log(pass, 'pass')

    }
  }

  return (
    <main className='Login'>
      <form onSubmit={loginHandler}>
        <section>
          <div className='control'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={loginEmail} onChange={loginEmailChangeHandler} />
          </div>

          <div className='control'>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={pass} onChange={passChangeHandler} />
          </div>
          <button className='button'>Login</button>
        </section>
      </form>
    </main>
  );
};

export default Auth;

