import './App.css';
import Header from './pages/main/Header';
import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 적용 
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import Today from './pages/main/best/Today';
import Best from './pages/main/best/Best';
import Slider from "react-slick"; // 슬라이드 적용
import 'slick-carousel/slick/slick.css';// 슬라이드 적용
import 'slick-carousel/slick/slick-theme.css';// 슬라이드 적용
import Card from './components/Card';
import CardList from './components/CardList';


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
        <h1>배고파 - BAEGOPA ~~~1</h1>
        {/* <Card /> */}
        <CardList />
      </div>
    </div>
  );
}

export default App;
