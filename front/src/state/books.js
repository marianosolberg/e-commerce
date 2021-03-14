import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setBooks = createAsyncThunk("SET_BOOKS", () => {
  return axios.get("/api/products").then((res) => res.data);
});

/* export const setBooksByWord = createAsyncThunk("SET_BOOKS_BY_WORD", (word) => {  //// lo comentado sería la ruta para buscar por título
  return axios.get(`/api/products/${word}`).then((res) => res.data);
});
 */
export const booksReducer = createReducer([], {
  [setBooks.fulfilled]: (state, action) => action.payload,
  /*  [setBooksByWord.fulfilled]: (state, action) => action.payload,*/
});
