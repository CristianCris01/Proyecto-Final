import './App.css'
import Home from './Pages/Home'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ProductosView from '../src/views/ProductosView';





function App() {
  //const {token} = useContext(UserContext);
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<LoginView/>} />
      <Route path="/Register" element={<RegisterView/>} />
      <Route path="/Productos" element={<ProductosView/>} />
     { /*<Route path="/Login" element={ token ? <Navigate to="/" /> : <Login/>} />*/}



    </Routes>
    </BrowserRouter>
  )
}

export default App
