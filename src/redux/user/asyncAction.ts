import axiosInstance from "@/lib/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
        async () => {

        try {
            const {data} = await axiosInstance.get('/api/users');
            return data;
        } catch(error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                return axiosError.message;
            }
        }
    }
);