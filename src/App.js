
import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 적용 
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import './pages/search/Search.module.css';
import './pages/subpage/Sub.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeDetail from './pages/recipe/RecipeDetail';
import Header from './pages/main/mainfull/Header';
import SubHeader from './pages/main/mainfull/SubHeader';
import Today from './pages/main/best/Today';
import Footer from './pages/main/mainfull/Footer';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/recipe" element={<RecipeDetail />} />
          <Route path="/" element={<Today />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
