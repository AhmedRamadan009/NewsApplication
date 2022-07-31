
 
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Bussines from './Component/Bussines/Bussines';
import Economy from './Component/Economy/Economy';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Notfound from './Component/Notfound/Notfound';
import Politcis from './Component/Poltics/Politcis';
import Sports from './Component/Sports/Sports';
import Technology from './Component/Tecnology/Technology';

function App() {
  return (
    <>
   
     <Navbar/>
     <div className='container'>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='home' element={<Home/>}/>
     <Route path='sports' element={<Sports/>}/>
     <Route path='bussiness' element={<Bussines/>}/>
     <Route path='sience' element={<Economy/>}/>
     <Route path='tcheno' element={<Technology/>}/>
     <Route path='health' element={<Politcis/>}/>
     <Route path='*' element={<Notfound/>}/>
     </Routes>
     </div>
     <Footer/>
    </>
  );
}

export default App;
