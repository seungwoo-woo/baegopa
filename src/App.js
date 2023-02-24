import './App.css';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";
import Card from './components/Card';
import CardList from './components/CardList';
import Subpage from './pages/subpage/Subpage';
import Footer from './pages/subpage/Footer';
import SearchPage from './pages/search/SearchPage.jsx';
import './pages/subpage/Subcss.css';
import './pages/search/Search.css';


function App() {

  const GlobalStyle = createGlobalStyle`
   /* reset css 적용 */
    ${reset}
    font-family:"Noto Sans KR", Helvetica, "Helvetica Neue", Arial, "sans-serif";
`;
  
  return (
    <>
        <GlobalStyle/>
      <div>
        {/* <h1>배고파 - BAEGOPA ~~~1</h1> */}
        {/* <Card /> */}
        {/* <Subpage/> */}
        <SearchPage/>
        <CardList />
        <Footer/>
      </div>
    </>
  );
}

export default App;
