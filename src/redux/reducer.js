import { INCREMENT, DECREMENT } from "./actions";

const initialState = {
  counter: 0,
};

//pure function
const counterReducer = (state = initialState, action) => { //action is an object which has type
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };

    case DECREMENT:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;