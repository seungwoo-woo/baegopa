import './App.css';
import Card from './components/Card';
import CardList from './components/CardList';
import Addrecipe from './pages/addrecipe/Addrecipe';
import GetRecipeDB from './pages/addrecipe/GetRecipeDB';
import Login from './pages/login/Login';

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
        <Login />
      </div>
    </div>
  );
}

export default App;
