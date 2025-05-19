import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './Module 4/Redux Toolkit - State Management in React/Todos_Redux/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer
  }
});

export default store;
