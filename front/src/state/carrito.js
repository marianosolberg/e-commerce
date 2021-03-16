import { createReducer, createAction } from "@reduxjs/toolkit";

export const setCarrito = createAction("SET_CARRITO");

export const carritoReducer = createReducer([], {
  [setCarrito]: (state, action) => [...state, action.payload],
});
