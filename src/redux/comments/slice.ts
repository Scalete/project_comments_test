import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../types";
import { IComment } from "@/interfaces/interfaces";
import { addComment, deleteComment, fetchComments } from "./asyncAction";

interface IProps { 
    comments: IComment[];
    statusGetComments: Status;
    statusAddComment: Status;
    statusDeleteComment: Status;
}

const initialState: IProps = {
    comments: [],
    statusGetComments: Status.LOADING,
    statusAddComment: Status.LOADING,
    statusDeleteComment: Status.LOADING,
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setStatusAddComment: (state, action) => {
            state.statusAddComment = action.payload;
        },
        setStatusDeleteComment: (state, action) => {
            state.statusDeleteComment = action.payload;
        }
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

        builder.addCase(addComment.pending, (state) => {
            state.statusAddComment = Status.LOADING;
        })
        builder.addCase(addComment.fulfilled, (state, action) => {
            state.statusAddComment = Status.SUCCES;
        })
        builder.addCase(addComment.rejected, (state) => {
            state.statusAddComment = Status.ERROR;
        })
        
        builder.addCase(deleteComment.pending, (state) => {
            state.statusDeleteComment = Status.LOADING;
        })
        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.statusDeleteComment = Status.SUCCES;
        })
        builder.addCase(deleteComment.rejected, (state) => {
            state.statusDeleteComment = Status.ERROR;
        })
    },
});

export const {setStatusAddComment, setStatusDeleteComment} = commentsSlice.actions;

export default commentsSlice.reducer;