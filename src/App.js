

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel-1/Carousel';
import Cards from './components/cards';


function App() {
  return (
    <>
    <Navbar/>
     <div><Carousel/></div>
     <div className='cards'><Cards/></div>
    </>
    

   
   

  )
    
 
};

export default App;
