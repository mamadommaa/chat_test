import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";

export const fetchMessages = createAsyncThunk(
    "posts/fetchMessages",
    async () => {
        const { data } = await axios.get("/messages");
        console.log("Data from server:", data); // Вывод данных в консоль
        return data;
    }
);

// import axios from "axios";

export const sendMessage = async (message) => {
    console.log(message);
    try {
        const response = await axios.post("/add", { message }); // Оборачиваем message в объект
        console.log("Message sent successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error sending message:", error);
        throw error; // Пробрасываем ошибку для обработки в вызывающем коде
    }
};

const initialState = {
    messages: {
        items: [],
        status: "loading",
    },
};

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, (state) => {
                state.messages.items = [];
                state.messages.status = "loading";
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.messages.items = action.payload;
                state.messages.status = "loaded";
            })
            .addCase(fetchMessages.rejected, (state) => {
                state.messages.items = [];
                state.messages.status = "error";
            });
    },
});

export const messagesReducer = messagesSlice.reducer;
