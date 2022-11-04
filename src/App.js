import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Base from './Components/Layout/Base';
import Home from "./Pages/Home"
import Marketplace from './Components/Elements/Marketplace';
function App() {
  return (
   <>
   <BrowserRouter>
   <Base>
   <Routes>
    <Route index path='/' element={<Home/>} />
    <Route index path='/home' element={<Home/>} />
    <Route path='/marketplace' element={<Marketplace/>} />


   </Routes>
   </Base>
   </BrowserRouter>
   </>
  );
}

export default App;
