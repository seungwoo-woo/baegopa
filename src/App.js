import './App.css';
import Card from './components/Card';
import CardList from './components/CardList';
import Addrecipe from './pages/addrecipe/Addrecipe';

function App() {

  const style = {
    width: "30",
  }
  
  return (
    <div className="App">
      <div style={style}>
        {/* <Card /> */}
        {/* <CardList /> */}
        <Addrecipe />
      </div>
    </div>
  );
}

export default App;
