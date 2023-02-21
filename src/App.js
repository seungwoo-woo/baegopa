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
        <h1>배고파 - BAEGOPA ~~~1</h1>
        {/* <Card /> */}
        <CardList />
      </div>
    </div>
  );
}

export default App;
