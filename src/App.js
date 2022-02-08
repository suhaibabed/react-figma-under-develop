import react from 'react';

//style
import './App.css';

//component
import Navbar from './component/Navbar';
import About from './component/About';
import Feature from './component/Feature';
import ChoosYourPlan from './component/ChooseYourPlan';
import HugeGlobal from './component/HugeGlobal';
import TrustedText from './component/TrustedText';
import PreFooter from './component/PreFooter';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Feature/>
      <ChoosYourPlan />
      <HugeGlobal />
      <TrustedText/>
      <PreFooter />
      <Footer/>
      

 
    </div>
  );
}

export default App;
