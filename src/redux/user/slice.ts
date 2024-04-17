import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { IComment, IUser } from "@/interfaces/interfaces";
import { fetchUser } from "./asyncAction";

interface IProps { 
    user?: IUser;
    statusGetUser: Status;
}

const initialState: IProps = {
    user: undefined,
    statusGetUser: Status.LOADING,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.statusGetUser = Status.LOADING;
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.statusGetUser = Status.SUCCES;
            state.user = action.payload;
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.statusGetUser = Status.ERROR;
        })
    },
});

export default userSlice.reducer;