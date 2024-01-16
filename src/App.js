
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EmpListing from './EmpListing'
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';
import EmpDetail from './EmpDetail';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
<BrowserRouter>
<ToastContainer></ToastContainer>
<Routes>
<Route path='/Home' element={<Home/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Register' element={<Registration/>}/>
<Route path='/' element={<EmpListing/>}/>
<Route path='/Create' element={<EmpCreate/>}/>
<Route path='/Edit/:empid' element={<EmpEdit/>}/>
<Route path='/Detail/:empid' element={<EmpDetail/>}/>



</Routes>

</BrowserRouter>



    </div>
  );
}

export default App;
