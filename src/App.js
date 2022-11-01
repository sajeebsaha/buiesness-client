import React from 'react';
import './App.css';
import Login from './Components/LogIn/Login';
import { Routes, Route } from "react-router-dom";
import AddProduct from './Components/AddProduct/AddProduct';
import Register from './Components/LogIn/Register';
import Navbar from './Components/Navbar/Navbar';
import ViewProduct from './Components/ViewProduct/ViewProduct';
import SearchProduct from './Components/SearchProduct/SearchProduct';
import EditProduct from './Components/EditProduct/EditProduct';
import AllProducts from './Components/AllProducts/AllProducts';
import useFirebase from './Components/Hook/useFirebase';
import Welcome from './Components/Welcome/Welcome';
function App() {
  const {user}=useFirebase()
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {user.email?
        <Route path="/"  element={<Welcome/>} />
        :
        <Route path="/" element={<Login/>}/>
        }
        
        <Route path="/register" element={<Register />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/viewproduct" element={<ViewProduct />} />
        <Route path="/searchproduct" element={<SearchProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
        <Route path="/allproduct" element={<AllProducts />} />
        
      </Routes>
      
    </div>
  );
}

export default App;