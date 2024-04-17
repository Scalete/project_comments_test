import { IComment } from "@/interfaces/interfaces";
import axiosInstance from "@/lib/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
        async () => {

        try {
            const {data} = await axiosInstance.get('/api/comments');
            return data;
        } catch(error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                return axiosError.message;
            }
        }
    }
);

export const addComment = createAsyncThunk<string, IComment>(
    'comments/addComment',
        async (comment) => {

        try {
            const {data} = await axiosInstance.post('/api/comments', comment);
            return data;
        } catch(error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                return axiosError.message;
            }
        }
    }
);

export const deleteComment = createAsyncThunk<string, string>(
    'comments/deleteComment',
        async (_id) => {

        try {
            const {data} = await axiosInstance.delete(`/api/comments/${_id}`);
            return data;
        } catch(error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                return axiosError.message;
            }
        }
    }
);