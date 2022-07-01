import React,{useEffect} from 'react'
import { BrowserRouter as Router,Routes,Route}from 'react-router-dom'

import './App.css';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './components/Home'
import ProductDetails from './components/product/ProductDetails'


import Cart from './components/cart/Cart'
import Shipping from './components/cart/Shipping'


import Login from './components/user/Login'
import Register from './components/user/Register'
import { loadUser } from './actions/userActions'
import Profile from './components/user/Profile'
import store from './store'

import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import NewPassword from './components/user/NewPassword';


// import ProtectedRoute from './components/route/ProtectedRoute';///ask how to make protected route




function App() {


  useEffect(() => {
    store.dispatch(loadUser())


  }, [])

  return (
    <Router>
    <div className="App">
    <Header/>
    <Routes>
    <Route path="/" element  ={<Home/>} exact />
    <Route path="/search/:keyword" element  ={<Home/>}  />
    <Route path="/product/:id" element  ={<ProductDetails/> } exact />
    <Route path="/login" element={<Login/> } />
    <Route path="/Register" element={<Register/> } />
    <Route path="/me" element={<Profile/> }exact />
    <Route path="/me/update" element={<UpdateProfile/> }exact />
    <Route path="/password/update" element={<UpdatePassword/> }exact />
    <Route path="/password/forgot" element={<ForgotPassword/> } exact/>
    <Route path="/password/reset/:token" element={<NewPassword/> } exact/>
    <Route path="/cart" element={<Cart/> } exact />
    <Route path="/shipping" element={<Shipping/> }  />
    </Routes> 
    <Footer/>  
    </div>
  </Router> 
  );
}

export default App;
