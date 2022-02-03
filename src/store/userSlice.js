import { createSlice } from '@reduxjs/toolkit'





const initialCounterState = {
    Id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
}
const userSlice = createSlice({
    name: 'User Input',
    initialState: initialCounterState,
    reducers: {
        setFirstName(state, action) {
            state.firstName = action.payload
        },
        setLastName(state, action) {
            state.lastName = action.payload
        },
        setEmail(state, action) {
            state.email = action.payload
        },
        setPhoneNumber(state, action) {
            state.phoneNumber = action.payload
        },
        setId(state, action) {
            state.Id = action.payload
        }
    }
})
export const counterActions = userSlice.actions;
export default userSlice.reducer

