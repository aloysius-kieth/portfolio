import './App.css';
import Background from './components/Background';
import Footer from './components/Footer';
import Resume from './components/Resume';
import ScrollTop from './components/ScrollTop';

import ThemeSwitcher from './components/ThemeSwitcher';
import AboutPage from './pages/AboutPage';
// import Contact from './pages/Contact';
import LandingPage from './pages/LandingPage/LandingPage';
import PortfolioPage from './pages/PortfolioPage';
// import CopyText from './utils/copyText';

function App() {
  return (
    <div className='App'>
      <ThemeSwitcher>
        <Resume />
        <Background />
        <LandingPage />
        <AboutPage />
        <PortfolioPage />
        {/* <Contact /> */}
        {/* <CopyText /> */}
        <ScrollTop />
        <Footer />
      </ThemeSwitcher>
    </div>
  );
}

export default App;
