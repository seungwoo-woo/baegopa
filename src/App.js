import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 적용 
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import './pages/search/Search.module.css';
import './pages/subpage/Sub.module.css';

import Main from './pages/main/Main';
import Subpage from './pages/subpage/Subpage';
import Footer from './pages/subpage/Footer';
import SearchPage from './pages/search/SearchPage';
import CardList from './components/CardList';
import RecipeDetail from './pages/recipe/RecipeDetail';


function App() {


  return (
    <div className="App">
      <div>
        <Main />
        {/* <Subpage/> */}
        {/* <SearchPage/> */}
        {/* <CardList />
        <Footer/> */}
        {/* <RecipeDetail /> */}
      </div>
    </div>
  );
}

export default App;
