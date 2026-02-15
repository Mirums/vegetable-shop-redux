import {configureStore} from "@reduxjs/toolkit";
import {vegetableSlice} from "./vegetableSlice.ts";

export const store = configureStore({
    reducer: {
        vegetables: vegetableSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch