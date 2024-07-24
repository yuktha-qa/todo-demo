import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducer'

const todoStore = configureStore({
  reducer: todoReducer
});

export default todoStore;