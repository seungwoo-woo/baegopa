import './App.css';
import Card from './components/Card';

function App() {

  const style = {
    width: "30",
  }
  
  return (
    <div className="App">
      <div style={style}>
        <h1>배고파 - BAEGOPA ~~~</h1>
        <Card />
      </div>
    </div>
  );
}

export default App;
