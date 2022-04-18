import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface IUser{
    value: null|any;
}
export interface IRootUser{
    user:IUser
}
const init:IUser ={
    value: null
}

const userSlice:Slice = createSlice({
    name: 'user',
    initialState: init,
    reducers:{
        setUser: (state:IUser, action:PayloadAction<IUser>) => {
            state.value = action.payload
        },
        logout: (state:IUser) => {
            state.value = null;
        }
    }
});

export default userSlice.reducer;
export const {setUser, logout} = userSlice.actions;
export const selectUser = (state: IRootUser) => state.user.value;