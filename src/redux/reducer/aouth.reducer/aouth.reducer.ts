import {createSlice} from "@reduxjs/toolkit";
import {stat} from "fs";

const init = {
    user : "",
    token : "",
    freshToken : "",
    isLogin : false
}

const aouthReducer = createSlice({
    name : 'aouthReducer',
    initialState : init,
    reducers : {
        login : (state , action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.freshToken = action.payload.freshToken
            state.isLogin = true
        },
        logout : (state , action) => {
            state.user = ""
            state.token = ""
            state.freshToken = ""
            state.isLogin = false
        }
    }
})

export const {login , logout} = aouthReducer.actions
export default aouthReducer.reducer