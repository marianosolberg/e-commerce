// STORE CREATION
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { booksReducer } from "./books";
import { bookReducer } from "./book";
import { userReducer } from "./user";
<<<<<<< HEAD
import { searchReducer } from './search'
=======
import { usersReducer } from "./users";
>>>>>>> 306805f8d48c8b7d5bb5a2568275031e8f05ba78

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    books: booksReducer,
    book: bookReducer,
<<<<<<< HEAD
    search: searchReducer,
=======
    users: usersReducer,
>>>>>>> 306805f8d48c8b7d5bb5a2568275031e8f05ba78
  },
});

export default store;
