import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";

import Home from "./screens/Home"
import Laptops from "./screens/Laptops";
import Smartphones from "./screens/Smartphones";
import Cart from "./screens/Cart";
import NotFound from "./screens/NotFound";
import Header from "./components/Header/Header";


function App() {

    let navigate = useNavigate()
  return (
      <>
          <Header/>
          <Routes>
             <Route path="/" element={<Home/>}/>
              <Route path='/smartphones/' element={<Smartphones/>}/>
              <Route path='/laptops/' element={<Laptops/>}/>
              <Route path='/cart/'element={<Cart/>}/>
              <Route path="*" element={<NotFound/>}/>
              </Routes>
     </>
  );
}

export default App;
