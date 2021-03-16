// STORE CREATION
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { booksReducer } from "./books";
import { bookReducer } from "./book";
import { userReducer } from "./user";
import { usersReducer } from "./users";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    books: booksReducer,
    book: bookReducer,
    users: usersReducer,
  },
});

export default store;
