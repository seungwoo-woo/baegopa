import './App.css';
import Card from './components/Card';
import CardList from './components/CardList';
import Addrecipe from './pages/addrecipe/Addrecipe';
import GetRecipeDB from './pages/addrecipe/GetRecipeDB';
import Login from './pages/login/Login';
import LecipeAPI2 from './temp/LecipeAPI2';

function App() {

  const style = {
    width: "30",
  }
  
  return (
    <div className="App">
      <div style={style}>
        {/* <Card /> */}
        {/* <CardList /> */}
        {/* <Addrecipe /> */}
        {/* <GetRecipeDB /> */}
        <LecipeAPI2 />
        {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;
