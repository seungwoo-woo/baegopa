import './App.css';
import Card from './components/Card';
import CardList from './components/CardList';

function App() {

  const style = {
    width: "30",
  }
  
  return (
    <div className="App">
      <div style={style}>
        {/* <Card /> */}
        <CardList />
      </div>
    </div>
  );
}

export default App;
