import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { IComment } from "@/interfaces/interfaces";
import { fetchComments } from "./asyncAction";

interface IProps { 
    comments: IComment[];
    statusGetComments: Status;
}

const initialState: IProps = {
    comments: [],
    statusGetComments: Status.LOADING,
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.statusGetComments = Status.LOADING;
        })
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.statusGetComments = Status.SUCCES;
            state.comments = action.payload;
        })
        builder.addCase(fetchComments.rejected, (state) => {
            state.statusGetComments = Status.ERROR;
        })
    },
});

export default commentsSlice.reducer;