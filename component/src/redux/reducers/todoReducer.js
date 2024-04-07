import { createSlice } from "@reduxjs/toolkit";
import { addTodoAPI, deleteTodoApi, updateTodoApi } from "../actions/todoAction";

const initialState = {
  listTodo: []
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.listTodo.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteTodoApi.fulfilled, (state, action) => {
        state.listTodo = state.listTodo.filter(row => row.id !== action.payload);
      })
      .addCase(deleteTodoApi.rejected, (state, action) => {
        console.log('Delete todo rejected:', action.error.message);
      })
      .addCase(addTodoAPI.fulfilled, (state, action) => {
        state.listTodo.push(action.payload);
      })
      .addCase(updateTodoApi.fulfilled, (state, action) => {
        const { id, name, title, price, image, title1} = action.payload;
        const todo = state.listTodo.find(row => row.id === id);
        if (todo) {
          todo.name = name;
          todo.title = title;
          todo.price = price;
          todo.image = image;
          todo.title1 = title1;
        }
      });
  }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
