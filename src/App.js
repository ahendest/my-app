import Navbar from './Home/Navbar/Navbar.tsx';
import './Home/Navbar/Navbar.scss';
import LandingPage from './Home/LandingPage/LandingPage.tsx';
import'./Home/LandingPage/LandingPage.scss';

function App() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
    </>
  );
}

export default App;
