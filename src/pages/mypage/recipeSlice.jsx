import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  recipeKeepList: [
    {
      id: 1,
      title: "애호박구이 간장조림",
      cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
      userId: "샬라라",
      viewNo: 137479,
      likeNo: 3657,
      userComment: [
        {
        commentUserId: "삐리리",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        }
      ]
    },
    {
      id: 2,
      title: "애호박구이 간장조림",
      cardImagePath: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/4dit/image/NOs1ajU_u2GUfLb-aWQk9Z6oxPs",
      userId: "샬라라",
      viewNo: 137479,
      likeNo: 3657,
      userComment: [
        {
        commentUserId: "삐리리",
        comment: "스팸이랑 팽이버섯도 넣어서 해봤어요 진짜 맛있네요ㅋㅋㅋ좋은 레시피 감사해요!"
        } 
      ]
    },
  ],
};


const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    addItemToRecipe: (state, { payload: item }) => {
      console.log(item);
      const targetItem = state.recipeKeepList.find((recipe) => { return recipe.id === item.id; });
    }
  }
});

export const { addItemToRecipe } = recipeSlice.actions;

export const selectRecipeList = state => state.recipe.recipeKeepList;

export default recipeSlice.reducer;