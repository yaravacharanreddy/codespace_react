import { createSlice } from '@reduxjs/toolkit';

/**
 * todosSlice manages the list of to-do items.
 * Actions:
 * - addTodo: Adds a new todo item with unique id and default completed false
 * - toggleTodo: Toggles completion state of the todo by id
 * - deleteTodo: Removes a todo item by id
 */
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
