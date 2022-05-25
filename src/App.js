import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewdonor from './components/Viewdonor';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" exact element={<Signin/>}/>
  <Route path="/sign" exact element={<Signup/>}/>
  <Route path="/view" exact element={<Viewdonor/>}/>
</Routes>
</BrowserRouter>


    </div>
  );
}

export default App;
