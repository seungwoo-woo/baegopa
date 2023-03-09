
import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 적용 
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import './pages/search/Search.module.css';
import './pages/subpage/Sub.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetail from './pages/recipe/RecipeDetail';
import Header from './pages/main/mainfull/Header';
import Today from './pages/main/best/Today';
import Footer from './pages/main/mainfull/Footer';
import SearchPage from './pages/search/SearchPage';
import BestSlider from './pages/main/best/BestSlider';
import NomatchPage from './pages/main/NomatchPage';
import Main from './pages/main/Main';
import styles from './App.css';
import GetRecipeDB from './pages/addrecipe/GetRecipeDB';
import CardList from './components/CardList';
import Subpage from './pages/subpage/Subpage';
import Signin from './pages/login/Signin';
import Signup from './pages/login/Signup';
import MovePage from './pages/login/MovePage';
import Mypage from './pages/mypage/Mypage';
// import recipeListAPI from './pages/recipe/api/recipeListAPI';
import Addrecipe from './pages/addrecipe/Addrecipe';
import React, { useState } from 'react';

function App() {
  const [vis, setVis] = useState(true);
  return (
  <div className="App">
      <BrowserRouter>
        <Header />
        <Routes vis={vis} setVis={setVis}>
          <Route setVis={setVis} path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<Main />} />
          <Route path="/recipe/:docId" element={<RecipeDetail />} />
          <Route path="/sub" element={<Subpage />} />
          <Route path="/today" element={<Today />} />

          <Route path="/best" element={<BestSlider />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NomatchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <RecipeDetail /> */}
      {/* <recipeListAPI /> */}

    </div>
  );
}

export default App;
