import './App.css';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";
import Card from './components/Card';
import CardList from './components/CardList';
import Subpage from './pages/subpage/Subpage';
import Footer, {  } from './pages/subpage/Footer';
import './pages/subpage/Subcss.css';

function App() {

  const GlobalStyle = createGlobalStyle`
   /* reset css 적용 */
    ${reset}
`;
  
  return (
    <>
        <GlobalStyle/>
      <div>
        {/* <h1>배고파 - BAEGOPA ~~~1</h1> */}
        {/* <Card /> */}
        <Subpage/>
        <CardList />
        <Footer/>
      </div>
    </>
  );
}

export default App;
