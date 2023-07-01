import { createSlice } from '@reduxjs/toolkit';

<<<<<<< HEAD
const initialState = { todos: [] };

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action) {
      return (state.todos = state.todos.filter(
        todo => todo.id !== action.payload
      ));
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { addTodo, decrement, incrementByAmount } = todoSlice.actions;
export default todoSlice.reducer;
=======
const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload);
    },

    updateTodo: (state, { payload }) =>
      state.todos.map(item => {
        return item.id === payload.id ? payload : item;
      }),
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;

// Selectors

export const getAllTodos = state => state.todos;
>>>>>>> 53d29fd6a7d39531e0aa1f5c606496ebb5b0874f
