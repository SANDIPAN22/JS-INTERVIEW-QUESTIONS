import { createSlice } from "@reduxjs/toolkit";

const getStoredMode = () => {
  try {
    const data = JSON.parse(localStorage.getItem("mode")) ?? true;

    return { value: data };
  } catch {
    return { value: true };
  }
};

const modeSlice = createSlice({
  name: "mode",
  initialState: getStoredMode(),
  reducers: {
    setMode: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("mode", JSON.stringify(action.payload));
    },
  },
});

export default modeSlice.reducer;
export const { setMode } = modeSlice.actions;
