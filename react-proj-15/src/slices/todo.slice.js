import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("todo/fetchToDo", async () => {
  const res = await fetch("https://dummyjson.com/todos");
  if (!res.ok) throw new Error("HTTP error! With Status Code " + res.status);
  const data = await res.json();
  return data?.todos?.slice(0, 10);
});

const getStoredTodos = () => {
  try {
    const data = JSON.parse(localStorage.getItem("todos")) || [];
    return { error: null, isLoading: false, values: data };
  } catch {
    return { error: null, isLoading: false, values: [] };
  }
};

const todoSlice = createSlice({
  name: "todo",
  initialState: getStoredTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.values.push({ id: nanoid(), todo: action.payload });
    },
    deleteTodo: (state, action) => {
      state.values = state.values.filter((t) => t.id != action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("mode/setMode", (state, action) => {
        const autoSaveEnabled = action.payload;
        if (autoSaveEnabled) {
          localStorage.setItem("todos", JSON.stringify(state.values));
        }
      })
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.values = [...action.payload, ...state.values];
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action?.error?.message;
      });
  },
});

export default todoSlice.reducer;

export const { addTodo, deleteTodo } = todoSlice.actions;
