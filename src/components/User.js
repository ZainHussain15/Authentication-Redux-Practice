import AddUser from './AddUser'
import firebase from '../firebase';
import React, { useCallback, useEffect, useState } from 'react';
import Table from './Table';
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/userSlice'
function App() {
    const dispatch = useDispatch()
    const firstName = useSelector(state => state.userSlice.firstName);
    const lastname = useSelector(state => state.userSlice.lastName);
    const email = useSelector(state => state.userSlice.email);
    const phoneNumber = useSelector(state => state.userSlice.phoneNumber);
    const id = useSelector(state => state.userSlice.Id)
    console.log(id, "jjjjjjjj")
    const firstNameChangeHandler = (event) => {
        dispatch(counterActions.setFirstName(event.target.value))
    }
    const lastNameChangeHandler = (event) => {
        dispatch(counterActions.setLastName(event.target.value))

    }
    const emailChangeHandler = (event) => {
        dispatch(counterActions.setEmail(event.target.value))
    }
    const phoneChangeHandler = (event) => {
        dispatch(counterActions.setPhoneNumber(event.target.value))
    }




    const formSubmitHandler = (event) => {
        event.preventDefault()
        console.log(id, 'idididididid')
        if (id === '') {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ firstName, lastname, email, phoneNumber })
            };
            fetch('https://fir-21323-default-rtdb.firebaseio.com/User.json', requestOptions)
                .then(response => {
                    console.log(response.status, "hhhhhh")
                    if (response.status === 200 && response.ok) {
                        fetchUserDataHandler();
                    } else {
                        alert("data not saved")
                    }
                })
        } else {
            firebase.child(`User/${id}`).set(
                { firstName, lastname, email, phoneNumber },
                err => {
                    if (err)
                        console.log(err)
                    dispatch(counterActions.setId(''))
                    fetchUserDataHandler();
                }
            )
        }

        dispatch(counterActions.setFirstName(''))
        dispatch(counterActions.setLastName(''))
        dispatch(counterActions.setEmail(''))
        dispatch(counterActions.setPhoneNumber(''))

    }
    const [userData, setUserData] = useState([]);


    const fetchUserDataHandler = useCallback(async () => {

        try {
            const response = await fetch('https://fir-21323-default-rtdb.firebaseio.com/User.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            const userInfo = []

            for (const key in data) {
                userInfo.push({
                    id: key,
                    firstName: data[key].firstName,
                    lastName: data[key].lastname,
                    email: data[key].email,
                    phoneNumber: data[key].phoneNumber
                })
            }
            setUserData(userInfo);

        } catch (error) {
            console.error();
        }

    }, [])
    useEffect(() => {
        fetchUserDataHandler();
    }, [fetchUserDataHandler]);

    const deleteHandler = (id) => {
        firebase.child(`User/${id}`).remove(
            err => {
                if (err)
                    console.log(err)
                fetchUserDataHandler()
            }
        )
    }
    return (
        <div className="row">
            <AddUser email={email} lastname={lastname} phoneNumber={phoneNumber} id={id}
                firstName={firstName} userData={userData}
                formSubmitHandler={formSubmitHandler}
                phoneChangeHandler={phoneChangeHandler}
                emailChangeHandler={emailChangeHandler}
                firstNameChangeHandler={firstNameChangeHandler}
                lastNameChangeHandler={lastNameChangeHandler} />
            <Table userData={userData} deleteHandler={deleteHandler} />
        </div>
    );
}

export default App;
