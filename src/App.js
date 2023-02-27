import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 적용 
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import Main from './pages/main/Main';
import RecipeDetail from './pages/recipe/RecipeDetail';



function App() {


  return (
    <div className="App">
      <div>
        <Main />
        {/* <RecipeDetail /> */}
      </div>
    </div>
  );
}

export default App;
