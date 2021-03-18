import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setComprar = createAsyncThunk("SET_COMPRAR", ({carritoCompras, userId}) => {
console.log(carritoCompras)
console.log(userId)
   return axios.put("/api/carrito", {carritoCompras, userId}).then((res) => res.data); 
});

export const setCarritoLogin = createAsyncThunk("SET_CARRITO_LOGIN", (carrito) => {
 
    return axios.put("/api/carrito", {carrito}).then((res) => res.data);
  });

export const comprarReducer = createReducer([], {
  [setComprar.fulfilled]: (state, action) => action.payload,
  [setCarritoLogin.fulfilled]: (state, action) => action.payload,
});
