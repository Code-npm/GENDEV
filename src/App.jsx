import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Roadmap from "./roadmap";
import Webdev from "./WebDevRoadmap";
import DataSci from "./datascience";
import CareerChatbot from "./chatbot";
import Ml from "./ml"
import Dsa from "./dsa"
import Cyber from "./cyber"


function Layout() {
  const location = useLocation();

  const hideNavRoutes = ["/webdev" , "/datasci" ,"/ml" ,"/dsa" , "/cyber"];



  return (
    <>
      
      {!hideNavRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
    
        <Route path="/" element={<Home />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/webdev" element={<Webdev />} />
        <Route path="/datasci" element={<DataSci />} />
        <Route path="/ml" element={<Ml />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/chatbot" element={<CareerChatbot/>}/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
