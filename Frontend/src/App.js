import React , {useEffect,useState} from 'react';
import "./App.css";
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import SetAvatar from './Pages/Avatar/setAvatar';



const App = () => {
  const [data,setData]=useState('');
  useEffect(()=>{
    axios.get('/').then(response=>{
      setData(response.data);
    })
    .catch(error=>{
      console.log('error fetching data:',error);
    });
  },[]);
  return (
    
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App