import Navbar from './Home/Navbar/Navbar.tsx';
import './Home/Navbar/Navbar.scss';
import LandingPage from './Home/LandingPage/LandingPage.tsx';
import'./Home/LandingPage/LandingPage.scss';
import Cards from './Home/LandingPage/Cards/Cards.tsx';
import './Home/LandingPage/Cards/Cards.scss';


function App() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Cards/>
    </>
  );
}

export default App;
