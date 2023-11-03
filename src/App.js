//trick for business website is that break it in main parts as follow generally most of the business 
//websites follow the following structure 
//then after breaking solve the individually the pages like in main we need to make 2 parts as left and right
//in this way we have to think
import './App.css';
import Footer from './Components/Footer/Footer';
import Join from './Components/Join/Join';
import Main from './Components/Main/Main';
import Plans from './Components/Plans/Plans';
import Program from './Components/Program/Program';
import Reason from './Components/Reason/Reason';
import Testimonial from './Components/Testimonials/Testimonial';
function App() {
  return (
    <div className="App">
         <Main/>
         <Program/>
         <Reason/>
         <Plans/>
         <Testimonial/>
         <Join/>
         <Footer/>
    </div>
  );
}

export default App;
