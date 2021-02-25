import { createStore } from "redux";
import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const ADD = "ADD";
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };
// const addToDo = createAction("ADD");

// const DELETE = "DELETE";
// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };
// const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//     // case ADD:
//     case addToDo.type: // addToDo.type = ADD
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type: // deleteToDo.type = DELETE
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
// });
// Redux Toolkit을 사용하면 state를 mutate해도 된다. immer.js와 같이 작동하기 때문이다.
// createReducer을 할 때에는 2가지 옵션이 있다.
// 1. 새로운 state를 return할 수 있다 => [{ text: action.payload, id: Date.now() }, ...state]
// 2. state 자체를 mutate할 수 있다. => state.push({ text: action.payload, id: Date.now() }) 하지만 뒤에서는 1번과 같은 작업이 이루어지고 있다.

const toDos = createSlice({
  name: "toDoReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});
// createSlice()는 internally createAction, createReducer을 사용한다.

// const store = createStore(reducer);
const store = configureStore({ reducer: toDos.reducer });
// configureStore은 middleware(Redux Dev Tool)와 함께 store를 생성한다.

export const { add, remove } = toDos.actions;
export default store;
