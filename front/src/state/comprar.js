import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setComprar = createAsyncThunk("SET_COMPRAR", () => {
  return axios.post("/api/carrito").then((res) => res.data);
});

export const comprarReducer = createReducer([], {
  [setComprar.fulfilled]: (state, action) => action.payload,
});
