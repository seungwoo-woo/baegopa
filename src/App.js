import './App.css';
import Header from './pages/main/Header';
import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 적용 
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import Today from './pages/main/best/Today';
import Best from './pages/main/best/Best';
import Card from './components/Card';
import CardList from './components/CardList';
import BestSlider from './pages/main/best/BestSlider';
import MembersFood from './pages/main/membersFood/MembersFood';
import MainButton from './pages/main/button/MainButton';
import Footer from './pages/main/Footer';



function App() {

  const style = {
    width: "30",
    
  }
  
  return (
    <div className="App">
      <div>
        <Header/>
        <Today/>
        <Best/>
        <img src='https://via.placeholder.com/285x285' />
        <img src='https://via.placeholder.com/285x285' />
        <img src='https://via.placeholder.com/285x285' />
        <img src='https://via.placeholder.com/285x285' />
        <MembersFood/>
        <MainButton/> 
        <Footer/>
        {/* <BestSlider/> */}
        {/* <Card /> */}
        {/* <CardList /> */}
      </div>
    </div>
  );
}

export default App;
