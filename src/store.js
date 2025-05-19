import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todosReducer from './Module 4/Redux Toolkit - State Management in React/Todos_Redux/todosSlice';

/**
 * Custom middleware to log actions and catch errors.
 */
const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action);
  try {
    return next(action);
  } catch (err) {
    console.error('Error during action dispatch:', err);
    throw err;
  }
};

const store = configureStore({
  reducer: {
    todos: todosReducer
  },
  middleware: [...getDefaultMiddleware(), loggerMiddleware]
});

export default store;
