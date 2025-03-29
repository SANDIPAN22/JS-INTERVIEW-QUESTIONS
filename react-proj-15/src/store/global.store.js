import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../slices/todo.slice";
import ModeSliceReducer from "../slices/mode.slice";

const BAD_WORDS = new Set([
  "damn",
  "hell",
  "crap",
  "piss",
  "bastard",
  "bitch",
  "douche",
  "asshole",
  "shit",
  "fuck",
  "fucked",
  "motherfucker",
  "cock",
  "dick",
  "cunt",
  "whore",
  "slut",
  "twat",
  "prick",
  "bollocks",
  "wanker",
  "bugger",
  "arse",
  "jerk",
  "retard",
  "moron",
]);

const censor = (store) => (next) => (action) => {
  if (action.type.startsWith("todo")) {
    const bad = action.payload.split(" ").filter((w) => BAD_WORDS.has(w));
    if (bad.length) {
      alert("Do not use bad word !! 🤬");
      return;
    }
  }
  return next(action);
};

const localStorageSave = (store) => (next) => (action) => {
  next(action);

  if (action.type.startsWith("todo")) {
    const { todo, mode } = store.getState();

    if (mode.value) {
      localStorage.setItem("todos", JSON.stringify(todo.values));
    }
  }
};

export const store = configureStore({
  reducer: {
    todo: todoSliceReducer,
    mode: ModeSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(censor).concat(localStorageSave),
});
