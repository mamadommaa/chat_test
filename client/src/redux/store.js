import { configureStore } from "@reduxjs/toolkit";
import { messagesReducer } from "./slices/messages";

const store = configureStore({
    reducer: {
        messages: messagesReducer,
    },
});
// console.log(store.getState());
// store.getState()

export default store;
