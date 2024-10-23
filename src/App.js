import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
      <CookieConsent />
    </div>
  );
}

export default App;
