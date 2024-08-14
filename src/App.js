import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/LandingPage';
import NavbarComponent from './Components/NavBar';
import RewardsIcons from './Components/RewardsIcons';
import CreditCards from './Components/CreditCards';
import CompareCards from './Components/CompareCards';
import LoungeFinder from './Components/LoungeFinder';
import RatanTataPage from './Components/RatanTataPage';
import CustomFooter from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <LandingPage/>
      <RewardsIcons />
      <CreditCards />
      <CompareCards />
      <LoungeFinder />
      <RatanTataPage />
      <CustomFooter />
    </div>
  );
}

export default App;
