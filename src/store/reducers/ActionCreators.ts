import axios, {AxiosError} from "axios";
import {IUser} from "../../models/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
            return response.data;
        }
        catch (e: any) {
            if (e instanceof AxiosError) return thunkAPI.rejectWithValue("Сетевая ошибка: " + e.message);
            else return thunkAPI.rejectWithValue("Непредвиденная ошибка")
        }

    }
)