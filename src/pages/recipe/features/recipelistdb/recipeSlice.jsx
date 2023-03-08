import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "../../api/recipeListAPI";


const initialState = {
  recipeList: [],
  selectedRecipe: {},    // 상품 하나이기 때문에 {}를 씀. 여러개일 경우 []대괄호!
  status: 'idle',  // 빈문자'' 여도 상관 없음, 아무거나 지으셈
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState, 
  reducers: {
    getAllRecipes: (state, action) => {
      // console.log(action);
      // console.log(action.payload);
      state.recipeList = action.payload;
      // initialState변수의 productList에 접근한거임
    },
    getRecipeById: (state, action)=> {
      state.selectedRecipe = action.payload
    },
    getMoreRecipe: (state, action)=> {
      // console.log(...action.payload);
      state.recipeList.push(...action.payload);  // array.push(추가할array) - 추가할 데이터를 배열 통으로 추가함
      // array.push(...추가할array) - 추가할 데이터를 배열에서 꺼내서 등록함 
    },
  }
});

export const { getAllRecipes, getRecipeById } = recipeSlice.actions;
export const selectedRecipe = state => state.product.productList;
export default recipeSlice.reducer;