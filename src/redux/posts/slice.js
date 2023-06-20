import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./asyncActions";


const initialState = {
    items: [],
    status: 'loading',
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading';
            state.items = [];
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'error';
            state.items = [];
        })
    }
});

export const { setItems } = postsSlice.actions;

export default postsSlice.reducer;