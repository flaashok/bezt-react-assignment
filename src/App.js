import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import './Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './omponents/Header';
import MainPage from './pages/MainPage';
import { Cart } from './pages/Cart';


function App() {
  return (
   <div className='App'>
    <Router>
    <Header />
    <Cart />
    <Routes>
      <Route path="/"/>
      <Route path="/cart"/>
    </Routes>
    <MainPage />
   </Router>
   
   </div>
  );
}

export default App;
