import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const getStoredTodos = () => {
  try {
    const data = JSON.parse(localStorage.getItem("todos")) || [];
    return { values: data };
  } catch {
    return { values: [] };
  }
};

const todoSlice = createSlice({
  name: "todo",
  initialState: getStoredTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.values.push({ id: nanoid(), name: action.payload });
    },
    deleteTodo: (state, action) => {
      state.values = state.values.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase("mode/setMode", (state, action) => {
      const autoSaveEnabled = action.payload;
      if (autoSaveEnabled) {
        localStorage.setItem("todos", JSON.stringify(state.values));
      }
    });
  },
});

export default todoSlice.reducer;

export const { addTodo, deleteTodo } = todoSlice.actions;
