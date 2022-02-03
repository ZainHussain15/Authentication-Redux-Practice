import React from 'react';

import './Table.css'
import { useDispatch } from 'react-redux'
import { counterActions } from '../store/userSlice'
const Table = (props) => {
    const dispatch = useDispatch()
    const updateUser = (user) => {
        // console.log(user, "gggggggggg")
        // console.log(user.id,'aasssddddddd')
        dispatch(counterActions.setLastName(user.lastName))
        dispatch(counterActions.setFirstName(user.firstName))
        dispatch(counterActions.setEmail(user.email))
        dispatch(counterActions.setPhoneNumber(user.phoneNumber))
        dispatch(counterActions.setId(user.id))
        // console.log(user, "gggggggggg")


    }

    return (
        <React.Fragment>
            <div className="col-md-7">
                <section className='table'>
                    <table>
                        <thead >
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Delete</th>
                                <th>Update</th>

                            </tr>
                        </thead>
                        <tbody>
                            {props.userData.map((userInfo, index) => (
                                <tr key={index}>
                                    <td>{userInfo.firstName}</td>
                                    <td>{userInfo.lastName}</td>
                                    <td>{userInfo.email}</td>
                                    <td>{userInfo.phoneNumber}</td>
                                    <td><button onClick={() => { props.deleteHandler(userInfo.id) }}>Delete</button></td>
                                    <td><button onClick={() => { updateUser(userInfo) }}>Update</button></td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </section>
            </div>

        </React.Fragment>
    )
}
export default Table