import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todosReducer from '../todos/todosSlice';

const loggerMiddleware = storeAPI => next => action => {
  console.log('Dispatching:', action);
  try {
    return next(action);
  } catch (error) {
    console.error('Dispatch error:', error);
    throw error;
  }
};

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: [...getDefaultMiddleware(), loggerMiddleware],
});

export default store;
