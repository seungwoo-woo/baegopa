import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from "../pages/mypage/recipeSlice";

export const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  }
});