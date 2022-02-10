import react from 'react';

//style
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

//component
import Navbar from './component/Navbar';
import About from './component/About';
import Feature from './component/Feature';
import ChoosYourPlan from './component/ChooseYourPlan';
import HugeGlobal from './component/HugeGlobal';
import PreFooter from './component/PreFooter';
import Footer from './component/Footer';
import Customers from './component/Customers';



function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Feature/>
      <ChoosYourPlan />
      <HugeGlobal />
      <Customers />
      <PreFooter />
      <Footer/>
      

 
    </div>
  );
}

export default App;
