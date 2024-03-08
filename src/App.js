import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './omponents/Header';
import MainPage from './pages/MainPage';
import { Cart } from './pages/Cart';
import { AppProvider } from './productcontex';

const Appstate = createContext();
function App() {
  const [open, setOpen] = useState(false);
  
  return (
    <AppProvider value={{ open, setOpen }}>
   <div className='App'>
    <Router>
    <Header />
    <Cart/>
    <MainPage />
    <Routes>
      <Route path="/"/>
      <Route path="/cart"/>
    </Routes>
    
   </Router>
   
   </div>
   </AppProvider>
  );
}

export default App;
export {Appstate}
