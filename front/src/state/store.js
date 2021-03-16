// STORE CREATION
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { booksReducer } from "./books";
import { bookReducer } from "./book";
import { userReducer } from "./user";
import { searchReducer } from "./search";
import { usersReducer } from "./users";
import { categoriasReducer } from "./categorias";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    books: booksReducer,
    book: bookReducer,
    search: searchReducer,
    users: usersReducer,
    categorias: categoriasReducer,
  },
});

export default store;
