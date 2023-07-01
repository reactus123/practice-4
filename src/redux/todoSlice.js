import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [{id: 1, text: 'text'}] };

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload
      );
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { addTodo, deleteTodo, incrementByAmount } = todoSlice.actions;
export default todoSlice.reducer;
