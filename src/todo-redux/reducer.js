import { ADD } from "./actions";

const initialState = {
  todoList: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        todoList: [...state.todoList, action.value]
      };
    default:
      return state;
  }
};

export default todoReducer;