import './App.css';
import Header from './pages/main/Header';
import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 적용 
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import Today from './pages/main/best/Today';
import Best from './pages/main/best/Best';
function App() {

  const style = {
    width: "30",
    
  }
  
  return (
    <div className="App">
      <div style={style}>
        <Header/>
        <Today/>
        <Best/>
      </div>
    </div>
  );
}

export default App;
