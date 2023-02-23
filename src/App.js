import './App.css';
import Header from './pages/main/Header';
import 'bootstrap/dist/css/bootstrap.min.css' //부트스트랩 적용 
import 'react-toastify/dist/ReactToastify.min.css'; // ReactToastify CSS 추가
import Today from './pages/main/best/Today';
import Best from './pages/main/best/Best';
import BestSlider from './pages/main/best/BestSlider';
import MembersFood from './pages/main/membersFood/MembersFood';
import MainButton from './pages/main/button/MainButton';
import Footer from './pages/main/Footer';
import LatestView from './pages/main/view/LastView';



function App() {

  
  return (
    <div className="App">
      <div>
        <Header/>
        <Today/>
        <Best/>
        <BestSlider/>
        {/* <LatestView/> */}
        <MembersFood/>
        <MainButton/> 
        <Footer/>
      </div>
    </div>
  );
}

export default App;
