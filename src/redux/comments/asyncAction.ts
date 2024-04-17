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