import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      try {
        state.value += 1;
      } catch (error) {
        console.error('Error in increment action:', error);
      }
    },
    decrement: (state) => {
      try {
        state.value -= 1;
      } catch (error) {
        console.error('Error in decrement action:', error);
      }
    },
    reset: (state) => {
      try {
        state.value = 0;
      } catch (error) {
        console.error('Error in reset action:', error);
      }
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
