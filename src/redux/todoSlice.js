import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [] }

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state,action) {
      state.todos.push(action.payload)
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { addTodo, decrement, incrementByAmount } = todoSlice.actions
export default todoSlice.reducer