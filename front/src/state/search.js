import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const setSearch = createAsyncThunk("SET_SEARCH", (title) => {
    return axios.get(`/api/products/search/${title}`).then((res) => res.data);
  });
  
 
  export const searchReducer= createReducer([], {
    [setSearch.fulfilled]: (state, action) => action.payload,
  
  });
  