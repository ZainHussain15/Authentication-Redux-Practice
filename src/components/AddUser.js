import { Fragment } from 'react'
import './AddUser.css'
const AddUser = (props) => {


    const validity = props.firstName && props.lastname && props.email && props.phoneNumber

    let formIsValid = false
    if (validity) {
        formIsValid = true
    }


    return (
        <Fragment>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">User Data and Table</h1>
                </div>
            </div>

            <form onSubmit={props.formSubmitHandler} >
                <div className='form'>
                    <div>
                        <label htmlFor='fname'>First Name</label>
                        <input type='text' id='fname' value={props.firstName}
                            onChange={props.firstNameChangeHandler}

                        />

                    </div>

                    <div >
                        <label htmlFor='lname'>Last Name</label>
                        <input type='text' id='lname' value={props.lastname}
                            onChange={props.lastNameChangeHandler}

                        />

                    </div>
                    <div>
                        <label htmlFor='email'>E-Mail Address</label>
                        <input type='email' id='email' value={props.email}
                            onChange={props.emailChangeHandler}
                        />
                    </div>

                    <div>
                        <label htmlFor='pNO'>Phone Number</label>
                        <input type='number' id='Pno' value={props.phoneNumber}
                            onChange={props.phoneChangeHandler}
                        />
                    </div>

                    <div >
                        {<button disabled={!formIsValid} className='button'>{props.id === '' ? "Save" : "Update"}</button>}
                    </div>
                </div>
            </form>


        </Fragment>
    )
}
export default AddUser