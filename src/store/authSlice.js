import { createSlice } from '@reduxjs/toolkit'





const initialAuthState = {
    loginId: '',
    loginEmail: '',
    pass: '',
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'Authentication',
    initialState: initialAuthState,
    reducers: {
        setLoginEmail(state, action) {
            state.loginEmail = action.payload
        },
        setPass(state, action) {
            state.pass = action.payload
        },
        setLoginId(state, action) {
            state.loginId = action.payload
        },
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})
export const authActions = authSlice.actions;
export default authSlice.reducer