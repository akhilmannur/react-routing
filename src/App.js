import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div  className='App'>
<Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/home' element={<Home/>} /> 
   
</Routes>


    </div>
  );
}

export default App;
