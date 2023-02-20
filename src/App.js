import './App.css';
import Header from './pages/main/Header';
import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 적용 
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
function App() {

  const style = {
    width: "30",
  }
  
  return (
    <div className="App">
      <div style={style}>
        <Header></Header>
        <h1>배고파 - BAEGOPA ~~~1</h1>
      </div>
    </div>
  );
}

export default App;
