import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setBook = createAsyncThunk("SET_BOOK", () => {
  return axios.get("/api/products/:id").then((res) => res.data);
});

export const bookReducer = createReducer([], {
  [setBook.fullfilled]: (state, action) => action.payload,
});
