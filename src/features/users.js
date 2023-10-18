import { createSlice } from "@reduxjs/toolkit";
import {data} from '../data'

export const userSlice = createSlice({
    name : 'users' ,
    initialState : {value : data} ,
    reducers : {
        addUser : (state , action) => {
            state.value.push(action.payload)
        },
        deleteUser : (state , action) => {
            state.value = state.value.filter((user) => user.username !== action.payload.username )
        },
        updateUser : (state , action ) => {
            state.value.map( (user) => {
                if(user.username === action.payload.username){
                   user.username = action.payload.newusername
                }
            } )
        }
    }
})

export const {addUser , deleteUser , updateUser} = userSlice.actions
export default userSlice.reducer;