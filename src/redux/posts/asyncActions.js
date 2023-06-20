import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'pizza/fetchPostsStatus',
    async () => {
        const formData = new FormData();
        formData.append("actionName", "MessagesLoad");
        formData.append("messageId", "0");

        const { Messages } = await fetch("http://a0830433.xsph.ru/", {
            method: "POST",
            body: formData,
        }).then(res => res.json());

        return Messages;
    }
)